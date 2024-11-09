"use client"

import brandThumb from "../../../public/images/brand-img.png";
import brandThumb2 from "../../../public/images/brand-img2.png";
import brandThumb3 from "../../../public/images/brand-img3.png";
import brandThumb4 from "../../../public/images/brand-img4.png";
import brandThumb5 from "../../../public/images/brand-img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

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
              <Image alt="Brand Logo" src={brandThumb} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <Image alt="Brand Logo" src={brandThumb2} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <Image alt="Brand Logo" src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <Image alt="Brand Logo" src={brandThumb4} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <Image alt="Brand Logo" src={brandThumb5} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-[40px]">
            <div className="flex justify-center items-center">
              <Image alt="Brand Logo" src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
