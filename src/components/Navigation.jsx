import { NavLink } from "react-router-dom"
import {
  faHouse,
  faBriefcase,
  faUser,
  faFileArrowDown,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link" aria-label="Inicio">
        <FontAwesomeIcon icon={faHouse} />
      </NavLink>
      <NavLink to="/sobre-mi" className="navigation__link" aria-label="Sobre mi">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink to="/portafolio" className="navigation__link" aria-label="Portafolio">
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>
      <NavLink to="/habilidades" className="navigation__link" aria-label="Habilidades">
        <FontAwesomeIcon icon={faGear} />
      </NavLink>
      <a
        href="./CV-Valentina-Muñoz-2024.pdf"
        className="navigation__link"
        download
        aria-label="Descarga mi currículum"
      >
        <FontAwesomeIcon icon={faFileArrowDown} />
      </a>
    </nav>
  );
};

export default Navigation;
