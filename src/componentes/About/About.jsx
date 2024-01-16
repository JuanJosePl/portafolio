import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/excelent.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Frontend</h3>
              <p>
                Apasionado por crear sitios web atractivos y optimizados con
                enfoque en experiencias de usuario intuitivas. Especializado en
                HTML, CSS y JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Soy un apasionado desarrollador backend con una mente inquieta
                para resolver problemas. Constantemente busco aprender y aplicar
                las últimas tecnologías, asegurándome de que cada línea de
                código contribuya al éxito del proyecto.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Diseñador de Interfaz de Usuario (UI)</h3>
              <p>
                He creado múltiples páginas de inicio y desarrollado sistemas de
                diseño.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
