import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

function HeaderLinks() {
  return (
    <nav
      aria-label="Redes y contacto"
      className="flex flex-row items-center justify-between gap-8 text-xl md:text-2xl"
    >
      <ul className="flex flex-row gap-8">
        <li>
          <a
            href="http://github.com/vnasp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil en GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vnasp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil en LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="mailto:valentinamr@gmail.com" aria-label="Enviar un correo a Valentina">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderLinks
