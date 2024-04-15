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
  const setActiveclassName = ({ isActive }) => (isActive ? "navigation__link navigation__link--active" : "navigation__link")

  return (
    <nav className="navigation">
      <NavLink to="/" className={setActiveclassName} aria-label="Inicio">
        <FontAwesomeIcon icon={faHouse} />
      </NavLink>
      <NavLink to="/sobre-mi" className={setActiveclassName} aria-label="Sobre mi">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink to="/portafolio" className={setActiveclassName} aria-label="Portafolio">
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>
      <NavLink to="/habilidades" className={setActiveclassName} aria-label="Habilidades">
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
