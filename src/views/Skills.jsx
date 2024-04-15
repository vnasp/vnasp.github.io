import { SkillsData } from "../data/SkillsData";
import Accordion from "../components/Accordion";

const Skills = () => {

  return (
    <main className="main">
      <section className="w-2/5 home__photo">
        <img src="./assets/img/home.png" alt="Desarrolladora Web" />
      </section>
      <section className="w-3/5 skills">
        <h3 className="skills__title">Habilidades</h3>
        <Accordion data={SkillsData} />
      </section>
      <section></section>
    </main>
  );
};

export default Skills;
