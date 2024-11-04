"use client"

import brandThumb from "../../../public/images/brand-logo.png";
import brandThumb2 from "../../../public/images/brand-logo2.png";
import brandThumb3 from "../../../public/images/brand-logo3.png";
import brandThumb4 from "../../../public/images/brand-logo4.png";
import brandThumb5 from "../../../public/images/brand-logo5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
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
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb2} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb4} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb5} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[94px] pb-[40px]">
            <div className="flex justify-center items-center rounded-md h-[108px] w-full bg-transparent border transition-all duration-500 hover:bg-white hover:shadow-shade hover:border-transparent">
              <Image alt="Brand Image" src={brandThumb3} draggable="false" className="h-[inheirit] w-[Inherit}"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
