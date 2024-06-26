import { useState } from "react";
import Projects from "../components/Projects";
import { ProjectData } from "../data/ProjectsData";
import { SkillsData } from "../data/SkillsData";
import Tags from "../components/Tags";

const Portfolio = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const countTags = (projects) => {
    const tagCount = {};
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return tagCount;
  };

  const tagsUsageCount = countTags(ProjectData);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const filteredProjects = selectedSkill
    ? ProjectData.filter((project) => project.tags.includes(selectedSkill))
    : ProjectData;

  return (
    <main className="main">
        <section className="w-screen lg:w-2/5">
          <Tags
            data={SkillsData}
            tagCounts={tagsUsageCount}
            onSkillSelect={handleSkillSelect}
            selectedSkill={selectedSkill}
          />
        </section>
        <section className="projects">
          <Projects data={filteredProjects} />
        </section>
    </main>
  );
};

export default Portfolio;
