import { SkillsData } from "../data/SkillsData";
import Accordion from "../components/Accordion";

const Skills = () => {

  return (
    <main className="main">
      <section className="w-2/5 home__photo">
        <img src="./assets/img/skills.png" alt="Full Stack Developer" />
      </section>
      <section className="skills">
        <Accordion data={SkillsData} />
      </section>
      <section></section>
    </main>
  );
};

export default Skills;
