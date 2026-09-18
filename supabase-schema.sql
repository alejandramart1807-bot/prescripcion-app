-- =====================================================================
-- Tinterno · Esquema de cuentas, sincronización y sugerencias (Supabase)
-- Cómo usarlo: Supabase → tu proyecto → SQL Editor → New query →
-- pega TODO este archivo → Run. Se puede ejecutar más de una vez.
-- =====================================================================

-- 1) Perfiles (uno por usuario). El rol 'staff' = personal revisor.
create table if not exists public.profiles (
  id           uuid primary key references auth.users on delete cascade,
  display_name text check (char_length(display_name) <= 60),
  role         text not null default 'user' check (role in ('user','staff')),
  created_at   timestamptz not null default now()
);

-- 2) Datos personales sincronizados (favoritos, recientes, notas, repaso, modo)
create table if not exists public.user_data (
  user_id    uuid primary key references auth.users on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint user_data_size check (pg_column_size(data) < 500000)
);

-- 3) Sugerencias y correcciones
create table if not exists public.suggestions (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users on delete cascade,
  ficha_id    text not null check (char_length(ficha_id) <= 80),
  ficha_name  text check (char_length(ficha_name) <= 200),
  kind        text not null check (char_length(kind) <= 80),
  section     text check (char_length(section) <= 60),
  order_ref   text check (char_length(order_ref) <= 200),
  body        text not null check (char_length(body) between 10 and 4000),
  source_url  text check (source_url is null or source_url ~ '^https?://'),
  status      text not null default 'nueva'
              check (status in ('nueva','en_revision','aceptada','rechazada','implementada')),
  staff_note  text check (char_length(staff_note) <= 1000),
  reviewed_by uuid references auth.users,
  reviewed_at timestamptz,
  app_version text check (char_length(app_version) <= 20),
  created_at  timestamptz not null default now()
);
create index if not exists suggestions_status_idx on public.suggestions (status, created_at desc);
create index if not exists suggestions_user_idx   on public.suggestions (user_id, created_at desc);

-- Relación para mostrar el nombre del autor en el panel del personal
alter table public.suggestions drop constraint if exists suggestions_user_profile_fk;
alter table public.suggestions add constraint suggestions_user_profile_fk
  foreign key (user_id) references public.profiles(id) on delete cascade;

-- 4) ¿El usuario actual es personal revisor?
create or replace function public.is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'staff');
$$;

-- 5) Crear el perfil automáticamente al registrarse
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, left(coalesce(new.raw_user_meta_data->>'display_name',''), 60))
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- 6) Seguridad a nivel de fila (RLS)
alter table public.profiles    enable row level security;
alter table public.user_data   enable row level security;
alter table public.suggestions enable row level security;

drop policy if exists "perfil: ver el propio o staff" on public.profiles;
create policy "perfil: ver el propio o staff" on public.profiles
  for select to authenticated using (id = auth.uid() or public.is_staff());
drop policy if exists "perfil: editar el propio" on public.profiles;
create policy "perfil: editar el propio" on public.profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
-- Nadie puede cambiarse el rol desde la app: solo se permite editar el nombre.
revoke update on public.profiles from authenticated, anon;
grant  update (display_name) on public.profiles to authenticated;

drop policy if exists "datos: solo los propios" on public.user_data;
create policy "datos: solo los propios" on public.user_data
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "sugerencias: crear como uno mismo" on public.suggestions;
create policy "sugerencias: crear como uno mismo" on public.suggestions
  for insert to authenticated
  with check (user_id = auth.uid() and status = 'nueva' and staff_note is null and reviewed_by is null);
drop policy if exists "sugerencias: ver las propias o staff" on public.suggestions;
create policy "sugerencias: ver las propias o staff" on public.suggestions
  for select to authenticated using (user_id = auth.uid() or public.is_staff());
drop policy if exists "sugerencias: solo staff evalúa" on public.suggestions;
create policy "sugerencias: solo staff evalúa" on public.suggestions
  for update to authenticated using (public.is_staff()) with check (public.is_staff());
-- El personal solo puede cambiar estado y respuesta, no el texto del usuario.
revoke update on public.suggestions from authenticated, anon;
grant  update (status, staff_note, reviewed_by, reviewed_at) on public.suggestions to authenticated;
revoke all on public.profiles, public.user_data, public.suggestions from anon;

-- 7) Límite anti-spam: máximo 20 sugerencias por usuario cada 24 h
create or replace function public.limit_suggestions() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.suggestions
        where user_id = auth.uid() and created_at > now() - interval '24 hours') >= 20 then
    raise exception 'Límite diario de sugerencias alcanzado';
  end if;
  return new;
end; $$;
drop trigger if exists suggestions_rate_limit on public.suggestions;
create trigger suggestions_rate_limit before insert on public.suggestions
  for each row execute function public.limit_suggestions();

-- =====================================================================
-- 8) Para nombrar personal revisor (ejecutar aparte, con el correo real):
--    update public.profiles set role = 'staff'
--    where id = (select id from auth.users where email = 'correo@ejemplo.com');
-- =====================================================================
