"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from "../../../public/images/brand-1.png";
import brandThumb2 from "../../../public/images/brand-2.png";
import brandThumb3 from "../../../public/images/brand-3.png";
import brandThumb4 from "../../../public/images/brand-4.png";
import brandThumb5 from "../../../public/images/brand-5.png";
import Image from "next/image";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
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
      1400: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="bg-[url('/images/brand-bg.jpg')] bg-no-repeat bg-center bg-cover pt-[120px] pb-28">
      <div className="Container relative z-10">
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <Image src={brandThumb} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={brandThumb2} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={brandThumb3} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={brandThumb4} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={brandThumb5} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={brandThumb} draggable="false" alt="Brand Image"className="m-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
