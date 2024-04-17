import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <main className="main">
      <section className="w-2/5 home__photo">
        <img
          src="./assets/img/home.webp"
          alt="Desarrolladora Web"
        />
      </section>
      <section className="home">
        <h3 className="home__title">Transformo ideas en </h3>
        <p className="home__title--symbols">
          &#123;<span className="home__subtitle"> realidad digital </span>{" "}
          &#125;
        </p>
        <p className="home__text">
          Explora mi trabajo y descubre cómo mi creatividad transforma ideas en
          soluciones digitales efectivas. Cada proyecto que verás es el
          resultado de una meticulosa atención al detalle y un compromiso con la
          excelencia técnica.
        </p>
        <NavLink to="/sobre-mi" className="home__button" aria-label="Sobre mi">
        Comencemos
      </NavLink>
      </section>
    </main>
  );
};

export default Home;
