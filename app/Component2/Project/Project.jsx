import { FaPlus } from "react-icons/fa6";
import projectThumb from "/images/portfolio2-1.png";
import projectThumb2 from "/images/portfolio2-2.png";
import projectThumb3 from "/images/portfolio2-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTilte: "Design",
    projectTitle: "Mobile UI/UX Design",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTilte: "Technology",
    projectTitle: "Cyber Security & Protect",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
  {
    id: 3,
    projectThumb: projectThumb3,
    projectSubTilte: "IT Solution",
    projectTitle: "Website Development",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
  {
    id: 4,
    projectThumb: projectThumb2,
    projectSubTilte: "Technology",
    projectTitle: "Cyber Security & Protect",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
];

const Project = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="project relative z-10 py-28 bg-white before:absolute before:top-0 before:left-0 before:h-[72%] before:w-full before:bg-SecondaryColor-0 before:-z-10 before:bg-center before:bg-cover before:bg-no-repeat -mb-[1px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            IT Support For Business
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-3">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
      </div>
      <div className="mt-[60px] 2xl:mx-[100px]">
        <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
          <div>
            {ProjectData.map(
              ({
                id,
                projectThumb,
                projectSubTilte,
                projectTitle,
                projectUrl,
                projectBtn,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-[140px]">
                      <ProjectCard
                        projectThumb={projectThumb}
                        projectSubTilte={projectSubTilte}
                        projectUrl={projectUrl}
                        projectTitle={projectTitle}
                        projectBtn={projectBtn}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
