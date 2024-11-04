"use client"

import brandThumb from "../../../public/images/brand1.png";
import brandThumb2 from "../../../public/images/brand2.png";
import brandThumb3 from "../../../public/images/brand3.png";
import brandThumb4 from "../../../public/images/brand4.png";
import brandThumb5 from "../../../public/images/brand5.png";
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
    <div className="bg-SecondaryColor-0 pt-[38px] pb-[76px]">
      <div className="Container">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt="Brand Image" src={brandThumb3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
