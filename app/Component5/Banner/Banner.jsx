import { Link } from "react-router-dom";
import portfolioThumb from "/images/portfolio-thumb.png";
import portfolioThumb2 from "/images/portfolio-thumb2.png";
import portfolioThumb3 from "/images/portfolio-thumb3.png";
import bannerShape2 from "/images/banner-shape.png";
import bannerShape from "/images/banner-shape2.png";
import bannerShape3 from "/images/banner-shape3.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { PiPlay } from "react-icons/pi";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="bg-[url(/images/banner5-bg.jpg)] bg-no-repeat bg-cover bg-center">
      <section className="bg-transparent pt-[190px] pb-[82px] relative z-10 overflow-hidden">
        <div className="Container relative">
          <img
            src={bannerShape2}
            draggable="false"
            className="absolute -left-10 top-28 animate-dance3 hidden lg:block"
          />
          <img
            src={bannerShape}
            draggable="false"
            className="absolute right-10 top-28 animate-swing hidden lg:block"
          />
          <div className="text-center">
            <div className="relative">
              <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
                IT SOLUTION AGENCY IN USA
              </h5>
              <h1 className="font-Rajdhani font-extrabold text-HeadingColor-0 text-2xl sm:text-[46px] sm:leading-[54px] md:text-[68x] lg:text-[50px] xl:text-[70px] xl:leading-[77px] 2xl:text-[76px] 2xl:leading-[83px]">
                Unlock Growth Potential
                <br />
                Innovative Saas
              </h1>
              <p className="font-Nunito sm:text-xl text-HeadingColor-0 mb-9 mt-4">
                Continually formulate B2C partnerships orthogonal saas tools
                using <br className="hidden md:block" /> maintainable quality
                through low business
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link to={"/contact"}>
                  <button className="primary-btn5">
                    {`Try It Now`}
                    <HiOutlineArrowRight size={"20"} />
                  </button>
                </Link>
                <div>
                  <button className="flex items-center gap-4 font-Rajdhani text-lg text-HeadingColor-0 font-semibold uppercase">
                    <span className="size-[56px] rounded-full bg-transparent border border-HeadingColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                      <PiPlay
                        size={"24"}
                        onClick={() => setToggler(!toggler)}
                      />
                    </span>
                    How it works
                  </button>
                  <FsLightbox
                    toggler={toggler}
                    sources={[
                      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[120px]">
        <div className="Container relative z-10">
          <img
            src={bannerShape3}
            draggable="false"
            className="absolute -left-24 -top-20 animate-wiggle -z-10 hidden md:block"
          />
          <div className="grid md:col-span-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:row-span-2">
              <img
                src={portfolioThumb}
                draggable="false"
                className="rounded-3xl"
              />
            </div>
            <div className="md:col-span-1 md:row-span-1">
              <img
                src={portfolioThumb2}
                draggable="false"
                className="rounded-3xl"
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-1">
              <img
                src={portfolioThumb3}
                draggable="false"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
