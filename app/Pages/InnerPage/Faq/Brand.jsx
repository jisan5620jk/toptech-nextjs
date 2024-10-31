import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from "/images/brand-1.png";
import brandThumb2 from "/images/brand-2.png";
import brandThumb3 from "/images/brand-3.png";
import brandThumb4 from "/images/brand-4.png";
import brandThumb5 from "/images/brand-5.png";

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
    <div className="bg-[url('/images/brand-bg.jpg')] pt-[120px] pb-28 mt-[120px]">
      <div className="Container relative z-10">
        <Swiper {...settings}>
          <SwiperSlide>
            <div>
              <img src={brandThumb} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb2} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb3} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb4} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb5} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={brandThumb} draggable="false" className="m-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
