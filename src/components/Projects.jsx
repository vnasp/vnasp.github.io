import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = ({ data }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="projects__swiper" id="swiperProjects">
      {data.map((project, index) => (
        <SwiperSlide
          key={index}
        >
          <div className="w-full lg:w-3/4">
            <img
              src={project.image}
              alt={project.name}
              className="project__image"
              />
          </div>
          <h4 className="project__name">{project.title}</h4>
          <div className="project__share">
            {project.github && (
              <a href={project.github} className="project__share--btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="project__share--btn" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
          <div>
            <p className="project__desc">{project.about}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
