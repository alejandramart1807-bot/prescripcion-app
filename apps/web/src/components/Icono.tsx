export type NombreIcono =
  | "search"
  | "x"
  | "star"
  | "starFill"
  | "right"
  | "left"
  | "pulse"
  | "bed"
  | "steth"
  | "heart"
  | "calc"
  | "flask"
  | "scale"
  | "info"
  | "home"
  | "copy"
  | "more"
  | "panel"
  | "share";

/**
 * Iconos de trazo 2 (estilo Lucide), igual que el objeto `IP` de index.html
 * raíz (CLAUDE.md §6: "No usar emojis como iconos"). Mismos trazados que la
 * v7, reescritos como JSX (sin `dangerouslySetInnerHTML`) para poder usarse
 * en apps/web.
 */
export default function Icono({ nombre, className }: { nombre: NombreIcono; className?: string }) {
  const relleno = nombre === "starFill";
  const svgProps = {
    className: `ico ${className || ""}`.trim(),
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (nombre) {
    case "search":
      return (
        <svg {...svgProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "x":
      return (
        <svg {...svgProps}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case "star":
    case "starFill":
      return (
        <svg {...svgProps} style={relleno ? { fill: "currentColor" } : undefined}>
          <path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z" />
        </svg>
      );
    case "right":
      return (
        <svg {...svgProps}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );
    case "left":
      return (
        <svg {...svgProps}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );
    case "home":
      return (
        <svg {...svgProps}>
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "copy":
      return (
        <svg {...svgProps}>
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
        </svg>
      );
    case "more":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="5" r="1.2" />
          <circle cx="12" cy="12" r="1.2" />
          <circle cx="12" cy="19" r="1.2" />
        </svg>
      );
    case "panel":
      return (
        <svg {...svgProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </svg>
      );
    case "share":
      return (
        <svg {...svgProps}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...svgProps}>
          <path d="M22 12h-4l-3 8-6-16-3 8H2" />
        </svg>
      );
    case "bed":
      return (
        <svg {...svgProps}>
          <path d="M2 5v15M2 9h16a4 4 0 0 1 4 4v7M2 16h20" />
          <circle cx="7" cy="12" r="1.5" />
        </svg>
      );
    case "steth":
      return (
        <svg {...svgProps}>
          <path d="M5 3H4v6a5 5 0 0 0 10 0V3h-1" />
          <path d="M9 14v1.5a5.5 5.5 0 0 0 11 0V13" />
          <circle cx="20" cy="11" r="2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...svgProps}>
          <path d="M19.5 13.6C21 12 22 10.6 22 8.5A5.5 5.5 0 0 0 12 5.3 5.5 5.5 0 0 0 2 8.5c0 2.1 1 3.5 2.5 5.1L12 21z" />
          <path d="M3.5 12H9l1.5-2.5 2 4.5 1.5-3h6.5" />
        </svg>
      );
    case "calc":
      return (
        <svg {...svgProps}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h8" />
        </svg>
      );
    case "flask":
      return (
        <svg {...svgProps}>
          <path d="M9 3h6M10 3v6L4.6 18.5A2 2 0 0 0 6.3 21.5h11.4a2 2 0 0 0 1.7-3L14 9V3" />
          <path d="M7 15h10" />
        </svg>
      );
    case "scale":
      return (
        <svg {...svgProps}>
          <path d="M12 3v18M7 21h10M5 7h14M5 7 2 14a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z" />
        </svg>
      );
    case "info":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      );
    default:
      return null;
  }
}
