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
      <section className="w-2/5 about__photo">
        <img
          src="./assets/img/about.jpg"
          alt="Valentina, Full Stack Developer Chile"
          className="about__photo--img"
        />
      </section>
      <section className="w-3/5 about">
        <h3 className="about__title">Sobre mi</h3>
        <p className="about__text">
          Mi nombre es <b>Valentina</b> y soy desarrolladora{" "}
          <b>Full Stack Javascript</b>, entre otras cosas. Desde hace más de
          10 años comencé diseñando con HTML, incursioné en la gestión de
          distintos CMS y en el 2024 di el gran paso:
          Full Stack Javascript. Ahora diseño aplicaciones web y convierto tus
          ideas en realidad digital.
        </p>
        <p className="about__text">
          Me considero una persona multi-potencial. Además de Full Stack JS,
          tengo mi grado de Magíster en Bioquímica y título de Administración de
          Empresas. Me encanta aprender, por lo que la programación es una
          perfecta fusión de creatividad y análisis que desafía mi mente. Esta diversidad de intereses y habilidades me permite
          abordar problemas desde múltiples perspectivas y ofrecer un valor
          añadido en cada proyecto en el que trabajo.
        </p>
        <p className="about__text">
          En mi tiempo libre, disfruto de las actividades que me llenen de
          energía y me permiten desconectar. ¡Descubre mis favoritas!
        </p>
        <div className="about__hobbies">
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faPaw} className="about__hobbies--icon" />
            <span className="about__hobbies--tooltip">
              Pasar tiempo con mis perros
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faTree} className="about__hobbies--icon" />
            <span className="about__hobbies--tooltip">
              Hacer trekking y cuidar el huerto
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="about__hobbies--icon"
            />
            <span className="about__hobbies--tooltip">Armar rompecabezas</span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon
              icon={faUtensils}
              className="about__hobbies--icon"
            />
            <span className="about__hobbies--tooltip">
              Degustar platos de diferentes países
            </span>
          </div>
          <div className="group about__tooltip">
            <FontAwesomeIcon icon={faPlane} className="about__hobbies--icon -rotate-45" />
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
