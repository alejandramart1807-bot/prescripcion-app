import type { FichaRef } from "@tinterno/content";

/** Tabla de valores de referencia, igual a `renderRefView(d)` de index.html. */
export default function TablaReferencia({ ficha }: { ficha: FichaRef }) {
  return (
    <div className="panel rt-wrap">
      <table className="rt">
        <thead>
          <tr>
            <th scope="col">Parámetro</th>
            <th scope="col">Rango</th>
            <th scope="col">Interpretación</th>
          </tr>
        </thead>
        <tbody>
          {ficha.rows.map((r, i) => (
            <tr key={i}>
              <td className="rt-p">{r[0]}</td>
              <td className="rt-v">{r[1]}</td>
              <td className="rt-n">{r[2] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
