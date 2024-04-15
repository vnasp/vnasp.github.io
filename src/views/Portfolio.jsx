import Projects from "../components/Projects";
import { ProjectData } from "../data/ProjectsData";

const Portfolio = () => {

  return (
    <main className="main">
      <section className="w-2/5 about__photo">acá algún filtro</section>
      <section className="w-3/5 about">
        <h3 className="about__title">Proyectos</h3>
        <Projects data={ProjectData}/>
      </section>
    </main>
  );
};

export default Portfolio;