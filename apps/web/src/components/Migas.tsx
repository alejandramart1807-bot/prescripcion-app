import { Fragment } from "react";
import Icono from "./Icono";

export interface Miga {
  href?: string;
  texto: string;
}

/** Ruta de migas de pan (`<nav class="crumb">` en index.html), para categoría y contexto. */
export default function Migas({ items }: { items: Miga[] }) {
  return (
    <nav className="crumb" aria-label="Ruta">
      {items.map((it, i) => (
        <Fragment key={i}>
          {it.href ? <a href={it.href}>{it.texto}</a> : <span>{it.texto}</span>}
          {i < items.length - 1 && <Icono nombre="right" className="nav-crumb-chev" />}
        </Fragment>
      ))}
    </nav>
  );
}
