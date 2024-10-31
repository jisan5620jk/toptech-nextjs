import aboutThumb from "/images/about5-thumb.png";
import aboutShape from "/images/about5-shape.png";
import aboutShape2 from "/images/about5-shape2.png";
import aboutCounter from "/images/about-counter.jpg";
import aboutMainShape from "/images/about-main-shape.png";
import { Link } from "react-router-dom";
import { LuCheck } from "react-icons/lu";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="pt-[80px] pb-[120px] bg-no-repeat bg-center bg-cover relative">
      <div className="Container relative">
        <img
          src={aboutMainShape}
          draggable="false"
          className="animate-rotational absolute top-0 -right-20"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10 flex justify-between">
            <img
              src={aboutThumb}
              draggable="false"
              className="2xl:max-w-[inherit] 2xl:-ml-36"
            />
            <div className="absolute top-20 left-24 animate-rotational">
              <img src={aboutShape} draggable="false" />
            </div>
            <div className="absolute -z-10 top-0 left-10 animate-wiggle">
              <img src={aboutShape2} draggable="false" />
            </div>
            <div className="absolute -z-10 bottom-16 right-10 animate-dance3">
              <img src={aboutCounter} draggable="false" />
            </div>
          </div>
          <div className="relative">
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              About Saas
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
              Get Realtime Visibility Digital
              <br /> Saas Software{`'`}s
            </h1>
            <p className="font-Nunito text-TextColor2-0 text-lg pb-6">
              Conviently optimize interdependent intellectual interoperable
              visuali design infoediaries main issue state icreative planing
              main best practices.
            </p>
            <ul className="space-y-[15px] mb-12">
              <li className="font-Nunito text-lg text-HeadingColor-0 font-medium flex items-center gap-3">
                <span className="size-[32px] rounded-3xl bg-[#ebf1fc] flex justify-center items-center">
                  <LuCheck size={"18"} className="text-PrimaryColor-0" />
                </span>
                Credibly leverage other{`'`}s future
              </li>
              <li className="font-Nunito text-lg text-HeadingColor-0 font-medium flex items-center gap-3">
                <span className="size-[32px] rounded-3xl bg-[#ebf1fc] flex justify-center items-center">
                  <LuCheck size={"18"} className="text-PrimaryColor-0" />
                </span>
                Dynamically seize cross functional web
              </li>
              <li className="font-Nunito text-lg text-HeadingColor-0 font-medium flex items-center gap-3">
                <span className="size-[32px] rounded-3xl bg-[#ebf1fc] flex justify-center items-center">
                  <LuCheck size={"18"} className="text-PrimaryColor-0" />
                </span>
                Quickly engineer client-centric metric
              </li>
            </ul>
            <Link to={"/about"}>
              <button className="primary-btn5 !bg-[#ecf2fe] border-none !text-HeadingColor-0 hover:!text-white hover:!bg-PrimaryColor-0">
                {`Learn More`}
                <HiOutlineArrowRight size={"20"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
