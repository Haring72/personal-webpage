export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
        padding: "28px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(127, 165, 200, 0.5)",
        }}
      >
        Alex Informático
      </span>
      <span
        style={{
          fontSize: "12px",
          color: "rgba(127, 165, 200, 0.35)",
          letterSpacing: "0.05em",
        }}
      >
        © {new Date().getFullYear()} · Todos los derechos reservados
      </span>
    </footer>
  );
}
