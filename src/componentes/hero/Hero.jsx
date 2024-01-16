import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, Soy Juan Jose</h1>
        <p className={styles.description}>         
            Desarrollador apasionado de software y páginas web buscando
            oportunidades para fortalecer habilidades. Comprometido con el
            crecimiento mediante proyectos prácticos, estudio autodidacta y
            futuras colaboraciones. Enfoque constante en aprender y aplicar
            conocimientos para soluciones innovadoras. ¡Emocionado por
            contribuir al mundo del desarrollo de software!
        </p>
        <a href="poloj3614@gmail.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/mainjpl.png")}
        alt="Hero image "
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
