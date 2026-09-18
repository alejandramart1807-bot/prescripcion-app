import type { Guide, GuideStatus } from "@tinterno/content";

const ESTADO_EVIDENCIA: Record<GuideStatus, [string, string]> = {
  ok: ["st-ok", "Vigente"],
  old: ["st-old", "Desactualizada, se complementa"],
  none: ["st-none", "No disponible"],
  na: ["st-old", "Sin verificar"],
};

/**
 * Evidencia y referencias de una ficha (`<details>` desplegable), igual a
 * `evidenceHTML(g)` de index.html: guía colombiana con su estado, guías
 * internacionales/complementarias y diferencias de disponibilidad en
 * Colombia.
 */
export default function GuiaFicha({ guide }: { guide?: Guide }) {
  if (!guide) {
    return <p className="muted">Sin guía registrada para esta ficha.</p>;
  }
  const [clase, texto] = ESTADO_EVIDENCIA[guide.co.st];
  const soloTexto = guide.co.st === "none" || guide.co.st === "na";

  return (
    <dl>
      <dt>Guía colombiana</dt>
      <dd>
        {!soloTexto && (
          <>
            {guide.co.n}
            {guide.co.y ? `, ${guide.co.y}` : ""}.{" "}
          </>
        )}
        <span className={clase}>{texto}.</span> {guide.co.txt}
      </dd>
      <dt>{guide.co.st === "ok" ? "Guías complementarias" : "Guías internacionales que se usan"}</dt>
      <dd>{guide.intl}</dd>
      {guide.dif && guide.dif.length > 0 && (
        <>
          <dt>Aplicabilidad en Colombia</dt>
          <dd>
            <ul className="criteria">
              {guide.dif.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </dd>
        </>
      )}
    </dl>
  );
}
