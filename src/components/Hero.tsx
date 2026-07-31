import backgroundImg from "../assets/background.png";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={backgroundImg}
        alt="Circuit board background with logo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5, 13, 26, 0.55) 0%, rgba(5, 13, 26, 0.4) 50%, rgba(5, 13, 26, 0.85) 100%)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "760px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#06b6d4",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 500,
            marginBottom: "20px",
          }}
        >
          Subnombre 1
        </div>
        <h1
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#e8f0fe",
            margin: "0 0 24px",
          }}
        >
          Nombre 1<br />
          <span
            style={{
              color: "#3b82f6",
            }}
          >
            Nombre 2
          </span>
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#7fa5c8",
            margin: "0 auto 40px",
            maxWidth: "520px",
          }}
        >
          Añadir descripción del sitio web
        </p>
        <a
          href="#servicios"
          style={{
            display: "inline-block",
            padding: "13px 36px",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            color: "#fff",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "4px",
            boxShadow: "0 0 32px rgba(59, 130, 246, 0.4)",
          }}
        >
          Explorar servicios
        </a>
      </div>
    </section>
  );
}
