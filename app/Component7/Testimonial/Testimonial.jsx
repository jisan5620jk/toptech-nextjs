"use client"

import testiImg from "../../../public/images/mobile-app-testi-img1.png";
import testiImg2 from "../../../public/images/mobile-app-testi-img2.png";
import testiImg3 from "../../../public/images/mobile-app-testi-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { IoStar } from "react-icons/io5";
import { TfiQuoteLeft } from "react-icons/tfi";

const testiData = [
  {
    id: 1,
    testiIcon: <TfiQuoteLeft />,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "App Developer",
    testiDesc: `“Competently enable equity invested 
matrix alternative catalysts for change
vertical web fully test"`,
  },
  {
    id: 2,
    testiIcon: <TfiQuoteLeft />,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "UI Designer",
    testiDesc: `“Competently enable equity invested 
matrix alternative catalysts for change
vertical web fully test"`,
  },
  {
    id: 3,
    testiIcon: <TfiQuoteLeft />,
    testiImg: testiImg3,
    testiRatingIcon: <IoStar />,
    testiName: "Noor Islam",
    testiDesignation: "Team Leader",
    testiDesc: `“Competently enable equity invested 
matrix alternative catalysts for change
vertical web fully test"`,
  },
  {
    id: 4,
    testiIcon: <TfiQuoteLeft />,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "UI Designer",
    testiDesc: `“Competently enable equity invested 
matrix alternative catalysts for change
vertical web fully test"`,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
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
  return (
    <section className="pt-28 pb-[120px] bg-[url(/images/mobile-app-testimonial-bg.png)] bg-cover bg-no-repeat bg-center relative z-10 testimonial5">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani font-semibold inline-block px-7 py-[6px] rounded-full border border-BorderColor4-0 text-white text-lg mb-5">
            Testimonial
          </h5>
          <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-white">
            Important customer’s feedback
            <br /> 3k+ trusted app users
          </h1>
        </div>
        <div className="mt-2">
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiIcon,
                  testiTitle,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div>
                        <TestimonialCard
                          testiIcon={testiIcon}
                          testiTitle={testiTitle}
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
