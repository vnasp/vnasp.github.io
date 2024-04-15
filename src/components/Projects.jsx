import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = ({ data }) => {
  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((project, index) => (
        <SwiperSlide key={index} className="">
          <h4 className="skills__type--name">{project.title}</h4>
          <div className="flex flex-row">
            <a href={project.github} className="home__button">
              GitHub
            </a>
            <a href={project.demo} className="home__button">
              Deploy
            </a>
          </div>
          <div>
            <img src={project.image} alt={project.about} />
          </div>
          <div>{project.about}</div>
          <div>{project.tags}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
