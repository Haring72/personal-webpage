import LogoImg from "../assets/logo_recortado.png";
import ContactLink from "./ContactLink";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(5, 13, 26, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.12)",
        padding: "0 40px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src={LogoImg}
          alt="Logo"
          style={{
            width: "44px",
            height: "44px",
            objectFit: "contain",
          }}
        ></img>
        <div
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "0.1em",
            color: "#e8f0fe",
            textTransform: "uppercase",
          }}
        >
          Nombre Empresa
        </div>
      </div>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <ContactLink href="mailto:test@empresa.com" label="Email">
          Item 1
        </ContactLink>
        <ContactLink href="tel:+1234567890" label="Teléfono">
          Item 2
        </ContactLink>
        <ContactLink href="https://wa.me/1234567890" label="WhatsApp">
          Item 3
        </ContactLink>
        <ContactLink href="https://linkedin.com" label="LinkedIn">
          Item 4
        </ContactLink>
      </nav>
    </header>
  );
}
