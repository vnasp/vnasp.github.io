import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = ({ data }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      pagination={pagination}
      modules={[Pagination]}
      className="px-14"
    >
      {data.map((project, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center">
          <img src={project.image} alt={project.name} className="w-3/4" />
          <h4 className="project__name">{project.title}</h4>
          <div>
            <p className="project__desc">{project.about}</p>
            {project.tags.map((tag, tagIndex) => {
              return (
                <label key={tagIndex} className="project__tags--bg">
                  {tag}
                </label>
              );
            })}
          </div>
          <div className="inline-block">
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
