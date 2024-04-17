import {Fragment} from "react"

const Tags = ({ data, tagCounts, onSkillSelect, selectedSkill }) => {

  const getFontSize = (frequency) => {
    if (frequency >= 4) return "text-lg";
    if (frequency >= 2) return "text-base";
    return "text-sm";
  };

  return (
    <>
      <p className="text-center mb-6">Filtra por una habilidad</p>
      <div className="projects__tags"
>
      <label
        className={`projects__tags--bg text-lg ${
          selectedSkill === null ? "navigation__link--active" : ""
        }`}
        onClick={() => onSkillSelect(null)}
      >
        Todos
      </label>
      {data.map((item, index) => {
        
        if (item.type === "Frontend" || item.type === "Backend") {
          return (
            <Fragment key={index}>
              {item.list.map((skill, skillIndex) => {
                const frequency = tagCounts[skill.name] || 0;
                const fontSize = getFontSize(frequency);

                return (
                  <label
                    key={skillIndex}
                    className={`projects__tags--bg ${fontSize} ${
                      selectedSkill === skill.name
                        ? "navigation__link--active"
                        : ""
                    }`}
                    onClick={() => {
                      onSkillSelect(skill.name);
                      if (window.innerWidth < 768) {
                        document.getElementById('swiperProjects').scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {skill.name} ({frequency})
                  </label>
                );
              })}
            </Fragment>
          );
        }
      })}
      </div>
    </>
  );
};

export default Tags;
