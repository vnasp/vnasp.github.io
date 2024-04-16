const Tags = ({ data, tagCounts, onSkillSelect, selectedSkill }) => {
  return (
    <>
      <p className="text-center mb-6">Selecciona una habilidad</p>
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
            <>
              {item.list.map((skill, skillIndex) => {
                const frequency = tagCounts[skill.name] || 0;
                const fontSize = frequency > 2 ? "text-lg" : "text-sm";

                return (
                  <label
                    key={skillIndex}
                    className={`projects__tags--bg ${fontSize} ${
                      selectedSkill === skill.name
                        ? "navigation__link--active"
                        : ""
                    }`}
                    onClick={() => onSkillSelect(skill.name)}
                  >
                    {skill.name}
                  </label>
                );
              })}
            </>
          );
        }
      })}
      </div>
    </>
  );
};

export default Tags;
