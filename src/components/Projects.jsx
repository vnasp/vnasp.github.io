import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Projects = ({ data }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="w-full mt-10">
      {data.map((project, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full lg:w-3/4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full rounded-lg shadow-md object-cover"
              />
          </div>
          <h4 className="project__name my-4">{project.title}</h4>
          <div className="flex flex-row gap-4">
            {project.github && (
              <a href={project.github} className="project__button">
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="project__button">
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
