import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.leftSpan}>Alex Informático</span>
      <span className={styles.rightSpan}>
        © {new Date().getFullYear()} · Todos los derechos reservados
      </span>
    </footer>
  );
}
