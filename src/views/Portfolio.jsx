import {useState} from "react"
import Projects from "../components/Projects";
import { ProjectData } from "../data/ProjectsData";
import { SkillsData } from "../data/SkillsData";
import Tags from "../components/Tags";

const Portfolio = () => {
  const countTags = (projects) => {
    const tagCount = {}
  
    projects.forEach(project => {
      project.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return tagCount;
  };
  
  const tagsUsageCount = countTags(ProjectData);
  console.log(tagsUsageCount);


  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const filteredProjects = selectedSkill
    ? ProjectData.filter(project => project.tags.includes(selectedSkill))
    : ProjectData;

  return (
    <main className="main">
      <section className="w-2/5">
        <Tags data={SkillsData} tagCounts={tagsUsageCount} onSkillSelect={handleSkillSelect} selectedSkill={selectedSkill}/>
      </section>
      <section className="w-3/5 px-10">
        <h3 className="projects__title">Proyectos</h3>
        <Projects data={filteredProjects} />
      </section>
    </main>
  );
};

export default Portfolio;