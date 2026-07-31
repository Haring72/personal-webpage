import ContactLink from "./ContactLink";

export default function Header() {
  return (
    <header>
      <div>
        <img></img>
        <div>Nombre Empresa</div>
      </div>

      <nav>
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
