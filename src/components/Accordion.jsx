import { useState } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={item.type}>
          <button
            className="skills__type--name"
            onClick={() => toggleAccordion(index)}
          >
            {item.type}{" "}
            {openIndex === index ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          {openIndex === index && (
            <div className="skills__type--list">
              {item.list.map((skill) => (
                <div key={skill.name} className="skills__skill">
                  <p className="skills__skill--icon">{skill.icon}</p>
                  <label className="skills__skill--name">{skill.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
