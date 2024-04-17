import {
  faPaw,
  faTree,
  faPuzzlePiece,
  faUtensils,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <main className="main">
      <section className="w-2/5 about__photo mb-10 lg:mb-0">
        <img
          src="./assets/img/about.webp"
          alt="Valentina, Full Stack Developer Chile"
          className="about__photo--img"
        />
      </section>
      <section className="about">
        <p className="about__text">
          Mi nombre es <strong>Valentina</strong>. Desde hace
          10 años comencé diseñando con HTML, incursioné en la gestión de
          distintos CMS y desde el 2023, soy Full Stack Javascript. Ahora, diseño aplicaciones web y convierto tus
          ideas en realidad digital.
        </p>
        <p className="about__text">
          Además de Full Stack JS,
          tengo mi grado de Magíster en Bioquímica y título de Administración de
          Empresas. Me encanta aprender, por lo que la programación es una
        combinación de creatividad y análisis que desafía mi mente. Esta diversidad de intereses y habilidades me permite
          abordar problemas desde múltiples perspectiva y ofrecer un valor
          agregado en cada proyecto.
        </p>
        <p className="about__text">
          En mi tiempo libre, disfruto de las actividades que me llenen de
          energía y me permiten desconectar. ¡Descubre mis favoritas!
        </p>
        <div className="about__hobbies">
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faPaw} className="about__hobbies--icon" aria-hidden="true"/>
            <span className="about__hobbies--tooltip">
              Pasar tiempo con mis perros
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faTree} className="about__hobbies--icon" aria-hidden="true"/>
            <span className="about__hobbies--tooltip">
              Hacer trekking y cuidar el huerto
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="about__hobbies--icon"
              aria-hidden="true"
            />
            <span className="about__hobbies--tooltip">Armar rompecabezas</span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon
              icon={faUtensils}
              className="about__hobbies--icon"
              aria-hidden="true"
            />
            <span className="about__hobbies--tooltip">
              Degustar platos de diferentes países
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faPlane} className="about__hobbies--icon -rotate-45" aria-hidden="true" />
            <span className="about__hobbies--tooltip">
              Descubrir nuevos lugares
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
