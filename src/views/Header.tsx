import ContactLinks from '../components/ContactLinks'

function Header() {
  return (
    <header className="header">
      <article className="header__logo">
        <h1 className="header__logo--title">Valentina Muñoz</h1>
        <h2 className="header__logo--subtitle">Full Stack Developer</h2>
      </article>
      <ContactLinks />
    </header>
  )
}

export default Header
