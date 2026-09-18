# Activar cuentas y sugerencias en Tinterno

Tiempo estimado: 20 minutos. Costo: gratis (plan gratuito de Supabase).
Mientras no hagas esto, Tinterno sigue funcionando igual: todo se guarda en el dispositivo y el botón de cuenta dice "aún no activadas".

## 1. Crear el proyecto en Supabase
1. Entra a **supabase.com** → *Start your project* → crea tu cuenta (puedes usar GitHub).
2. *New project*:
   - Nombre: `tinterno`
   - Contraseña de la base de datos: una fuerte. **Guárdala en tu gestor de contraseñas; no va en la app.**
   - Región: la más cercana disponible (por ejemplo, *South America (São Paulo)*).
3. Espera 1–2 minutos a que el proyecto quede listo.

## 2. Crear las tablas y la seguridad
1. En el menú izquierdo: **SQL Editor** → *New query*.
2. Abre `supabase-schema.sql`, copia **todo** su contenido, pégalo y dale **Run**.
3. Debe decir *Success*. Esto crea:
   - Perfiles de usuario.
   - Tus datos sincronizados (favoritos, recientes, notas, repaso, modo).
   - Las sugerencias.
   - Las reglas de seguridad: cada quien ve solo lo suyo y solo el personal revisor evalúa.

## 3. Configurar el inicio de sesión
Ve a **Authentication → URL Configuration**:
- **Site URL:** tu dirección de Netlify, por ejemplo `https://guia-prescripcion-co.netlify.app`
- **Redirect URLs:** agrega `https://guia-prescripcion-co.netlify.app/**`

En **Authentication → Sign In / Providers → Email**, deja activo *Confirm email*. Así cada cuenta confirma su correo.

> El correo que trae Supabase por defecto envía pocos mensajes por hora. Si esperas muchos registros, configura tu propio servidor de correo en **Authentication → Emails → SMTP Settings** (por ejemplo Resend, Brevo o el correo de tu dominio).

## 4. Conectar Tinterno con tu proyecto
1. En Supabase: **Project Settings → API** (o *Data API*). Copia:
   - **Project URL**, algo como `https://abcd1234.supabase.co`
   - **anon public key**, una clave larga que empieza por `eyJ…` o `sb_publishable_…`
2. **Nunca copies la clave `service_role` ni la `secret`.** Esa da acceso total y no debe ir en la app.
3. En GitHub abre `index.html` → lápiz ✏️ → busca (Cmd+F) `TINTERNO_CLOUD` y cambia:
   ```js
   const TINTERNO_CLOUD={url:"",anonKey:""};
   ```
   por:
   ```js
   const TINTERNO_CLOUD={url:"https://abcd1234.supabase.co",anonKey:"eyJ...tu-clave-anon..."};
   ```
4. **Commit changes**. En un minuto Netlify publica.

La clave *anon* es pública por diseño: la usan todas las apps web de Supabase. La protección real está en las reglas de seguridad del paso 2.

## 5. Nombrarte personal revisor
1. Abre Tinterno → icono de persona → **Crear cuenta** con tu correo, y confírmalo.
2. En Supabase → **SQL Editor** → ejecuta, con tu correo real:
   ```sql
   update public.profiles set role = 'staff'
   where id = (select id from auth.users where email = 'tu-correo@ejemplo.com');
   ```
3. Cierra sesión y vuelve a entrar en Tinterno. Verás **Panel de revisión** en el menú.
4. Repite el paso 2 con cada persona de tu equipo revisor.

## 6. Completar la política de privacidad (obligatorio antes de abrir el registro)
Por la Ley 1581 de 2012, debes indicar quién es el responsable del tratamiento de datos y cómo contactarlo.
En `index.html` busca `[nombre y correo de contacto del administrador — por completar]` y reemplázalo con tu nombre o entidad y un correo de contacto.

## Cómo funciona para los usuarios
- **Sin cuenta:** todo igual que antes, guardado en el teléfono.
- **Con cuenta:** favoritos, recientes, notas, repaso y modo se sincronizan entre dispositivos. Si ya tenía cosas en el teléfono, se combinan con lo de la nube y no se pierde nada.
- **Sugerir corrección:** está en cada ficha (botón al final y en el menú ⋮). Se elige tipo, sección y orden específica, se explica el cambio y se puede citar una fuente. El usuario ve el estado en *Tu cuenta → Mis sugerencias*: Nueva, En revisión, Aceptada, No aceptada o Implementada, junto con tu respuesta.
- **Panel de revisión (solo personal):** filtros por estado, cambio de estado y respuesta al usuario. El personal no puede modificar el texto que envió el usuario.
- **Protección de datos de pacientes:** notas y sugerencias bloquean textos que parecen documentos o historias clínicas, y siempre muestran el aviso de no incluir datos de pacientes.
- **Peso del paciente:** nunca se sincroniza; se queda en el dispositivo y se borra al cerrar la app.
- **Límite anti-spam:** máximo 20 sugerencias por usuario al día.

## Qué hacer cuando aceptas una sugerencia
1. Márcala como **Aceptada** y responde al usuario.
2. Haz el cambio en el contenido clínico (tú en GitHub, o pídemelo a mí o a Claude Code con el `index.html` actual).
3. Márcala como **Implementada** cuando esté publicada.
