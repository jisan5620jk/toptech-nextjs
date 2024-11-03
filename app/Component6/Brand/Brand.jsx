/* eslint-disable no-unused-vars */
import brandThumb from "/images/brand-img.png";
import brandThumb2 from "/images/brand-img2.png";
import brandThumb3 from "/images/brand-img3.png";
import brandThumb4 from "/images/brand-img4.png";
import brandThumb5 from "/images/brand-img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    speed: 500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div>
      <div className="Container">
        <Swiper {...settings}>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb2} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb4} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb5} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <img src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
