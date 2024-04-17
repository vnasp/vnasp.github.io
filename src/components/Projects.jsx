import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Projects = ({ data }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="">
      {data.map((project, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center"
        >
          <img src={project.image} alt={project.name} className="w-2/3 rounded-lg shadow-md" />
         
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
