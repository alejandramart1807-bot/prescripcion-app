// Placeholder de la migración de Tinterno al monorepo.
// El contenido clínico y la lógica de la app todavía viven en /index.html (raíz).
// Este componente se reemplaza a medida que @tinterno/content y @tinterno/engine
// se integran aquí. No se debe tocar el index.html de la raíz durante la migración.
export default function App() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100dvh",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <h1>Tinterno — migración en curso</h1>
        <p>Esta es la nueva base en apps/web. La app en producción sigue siendo index.html.</p>
      </div>
    </main>
  );
}
