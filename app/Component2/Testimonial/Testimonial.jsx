/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-author-1.png";
import testiImg2 from "/images/testi-author-2.png";
import testiImg3 from "/images/testi-author-3.png";
import testiQuote from "/images/testi-quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";

const testiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Hemilton Masakajja",
    testiDesignation: "Web Developer",
    testiDesc: `Monotonectally synergize granular that visualize strategic infomediaries business task state of the art into infrastructures markets digital products`,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "UI/UX Designer",
    testiDesc: `Monotonectally synergize granular that visualize strategic infomediaries business task state of the art into infrastructures markets digital products`,
  },
  {
    id: 3,
    testiQuote: testiQuote,
    testiImg: testiImg3,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Monotonectally synergize granular that visualize strategic infomediaries business task state of the art into infrastructures markets digital products`,
  },
  {
    id: 4,
    testiQuote: testiQuote,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Monotonectally synergize granular that visualize strategic infomediaries business task state of the art into infrastructures markets digital products`,
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
    <section className="py-28 bg-BodyBg-0 relative z-10 overflow-hidden">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Testimonial
          </h5>
          <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0e mt-[18px]">
            What say our Valuable Clients
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiQuote,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                  testiShape,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-3">
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                          testiShape={testiShape}
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
