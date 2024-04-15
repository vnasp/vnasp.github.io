import ContactLinks from "../components/ContactLinks";

const Header = () => {
  return (
    <section className="header">
      <article className="header__logo">
        <h1 className="header__logo--title">Valentina Muñoz</h1>
        <h2 className="header__logo--subtitle">Full Stack Developer</h2>
      </article>
      <ContactLinks color="bg-violet-800" />
    </section>
  );
};

export default Header;
