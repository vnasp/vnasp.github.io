import { SkillsData } from "../components/SkillsData";
import { Accordion } from "flowbite-react";

const Skills = () => {
  const data = SkillsData;

  return (
    <main className="main">
      <section className="w-2/5 home__photo">
        <img src="./assets/img/home.png" alt="Desarrolladora Web" />
      </section>
      <section className="w-3/5 skills">
        <h3 className="about__title text-center">Mis Habilidades</h3>
        <Accordion collapseAll>
          {data.map((item) => {
            return (
              <Accordion.Panel key={item.type}>
                <Accordion.Title className="skills__type--name">{item.type}</Accordion.Title>
                <Accordion.Content>
                  <div className="skills__type--list">
                    {item.list.map((skill) => {
                      return (
                        <div key={skill.name} className="skills__skill">
                          <p className="skills__skill--icon">{skill.icon}</p>
                          <label className="skills__skill--name">
                            {skill.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </section>
      <section></section>
    </main>
  );
};

export default Skills;
