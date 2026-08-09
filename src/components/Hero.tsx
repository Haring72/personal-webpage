import backgroundImg from "../assets/background.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <img
        src={backgroundImg}
        alt="Circuit board background with logo"
        className={styles.img}
      ></img>
      <div className={styles.imgBlur}></div>

      <div className={styles.titlePosition}>
        <div className={styles.headerText}>Soluciones tecnológicas</div>
        <h1 className={styles.title}>
          Alex
          <br />
          <span className={styles.titleSecondColor}>Informático</span>
        </h1>
        <p className={styles.subtext}>
          Se ofrecen diferentes soluciones para la instalación, preparación y
          mantenimiento de la infraestructura informática de pymes y
          particulares, tanto a distancia (España) como presencial (Ourense).
        </p>
        <a href="#servicios" className={styles.button}>
          Explorar servicios
        </a>
      </div>
    </section>
  );
}
