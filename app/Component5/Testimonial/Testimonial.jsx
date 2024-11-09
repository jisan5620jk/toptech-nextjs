"use client"

import testiImg from "../../../public/images/testi1.png";
import testiImg2 from "../../../public/images/testi2.png";
import testiImg3 from "../../../public/images/testi3.png";
import testimonialLogo from "../../../public/images/testimonial-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { IoStar } from "react-icons/io5";
import { TfiQuoteLeft } from "react-icons/tfi";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const testiData = [
  {
    id: 1,
    testiIcon: <TfiQuoteLeft />,
    testiTitle: "Amazing Works!",
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
    testiDesc: `Conveniently provide access to leading-edge 
    interfaces. Uniquely network cutting edges
    assertively disseminate`,
  },
  {
    id: 2,
    testiIcon: <TfiQuoteLeft />,
    testiTitle: "Great Chatbot!",
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "UI/UX Designer",
    testiDesc: `Conveniently provide access to leading-edge 
    interfaces. Uniquely network cutting edges
    assertively disseminate`,
  },
  {
    id: 3,
    testiIcon: <TfiQuoteLeft />,
    testiTitle: "Very Impressive!",
    testiImg: testiImg3,
    testiRatingIcon: <IoStar />,
    testiName: "Al-Amin Islam",
    testiDesignation: "IT Specialist",
    testiDesc: `Conveniently provide access to leading-edge 
    interfaces. Uniquely network cutting edges
    assertively disseminate`,
  },
  {
    id: 4,
    testiIcon: <TfiQuoteLeft />,
    testiTitle: "Amazing Works!",
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Conveniently provide access to leading-edge 
    interfaces. Uniquely network cutting edges
    assertively disseminate`,
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="pt-28 pb-[120px] bg-white relative z-10 testimonial5">
      <div className="Container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 lg:items-center">
          <div>
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              Testimonial
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0">
              Trusted by Industry Leaders
              <br /> Customer Tesmonials
            </h1>
          </div>
          <div className="flex lg:justify-end"><Image alt="Testimonial Logo" src={testimonialLogo} draggable="false" /></div>
        </div>
        <div className="mt-[26px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
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
                      <div className="pb-[106px]">
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
