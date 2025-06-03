"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

const testiData = [
  {
    id: 1,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 2,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 3,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 4,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
  {
    id: 5,
    testiDesc: `Completely extend leveraged customer service rather than performance based imperatives.
                magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const paginationImages = [
    "/images/testi-5.png",
    "/images/testi-1.png",
    "/images/testi-2.png",
    "/images/testi-3.png",
    "/images/testi-4.png",
  ];

  const settings = {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    onSwiper: (swiper) => (swiperRef.current = swiper),
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
  };
  return (
    <section className="testimonial py-28 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Testimonial
          </h5>
          <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0e mt-[18px]">
            Customer’s Awesome Feedback <br />
            About Our Services
          </h1>
        </div>
        <div className="mt-[46px] relative z-10">
          <div className="flex items-center justify-center gap-5 z-10 mb-10">
            {paginationImages.map((img, i) => (
              <button
                key={i}
                onClick={() => handleBulletClick(i)}
                className={`relative size-[92px] transition-all duration-500 ${
                  activeIndex === i ? "!size-[110px]" : ""
                } ${i === 1 ? "" : ""}`}
              >
                <span
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat rounded-full transition-all duration-500"
                  style={{ backgroundImage: `url(${img})` }}
                ></span>
                {activeIndex === i && (
                  <span className="absolute -top-[4px] -left-[4px] size-[118px] border-4 border-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          <Swiper {...settings}>
            {testiData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
            <TestimonialNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
