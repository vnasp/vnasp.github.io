import { NavLink, NavLinkProps } from 'react-router-dom'
import {
  faHouse,
  faBriefcase,
  faUser,
  faFileArrowDown,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavSection() {
  const setActiveclassName: NavLinkProps['className'] = ({ isActive }) =>
    isActive ? 'navigation__link navigation__link--active' : 'navigation__link'

  return (
    <nav className="NavSection">
      <NavLink to="/" className={setActiveclassName} aria-label="Inicio">
        <FontAwesomeIcon icon={faHouse} />
      </NavLink>

      <NavLink to="/about" className={setActiveclassName} aria-label="Sobre mi">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>

      <NavLink to="/portfolio" className={setActiveclassName} aria-label="Portafolio">
        <FontAwesomeIcon icon={faBriefcase} />
      </NavLink>

      <NavLink to="/skills" className={setActiveclassName} aria-label="Habilidades">
        <FontAwesomeIcon icon={faGear} />
      </NavLink>

      <a
        href="./CV-Valentina-Munoz-2024.pdf"
        className="navigation__link"
        download
        aria-label="Descarga mi currículum"
      >
        <FontAwesomeIcon icon={faFileArrowDown} />
      </a>
    </nav>
  )
}

export default NavSection
