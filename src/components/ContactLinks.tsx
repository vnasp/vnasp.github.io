import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactLinks() {
  return (
    <article className="header__icons">
      <a
        href="http://github.com/vnasp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visita mi GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/vnasp/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visita mi LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="mailto:valentinamr@gmail.com" aria-label="Enviar un correo a Valentina">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </article>
  )
}

export default ContactLinks
