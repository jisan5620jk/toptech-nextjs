import { Link } from "react-router-dom";
import bannerImg from "/images/hero6-thumb.png";
import bannerShape from "/images/ban-shape1.png";
import bannerShape2 from "/images/ban-shape2.png";
import bannerShape3 from "/images/ban-shape4.png";
import bannerShape4 from "/images/ban-star.png";
import bannerShape5 from "/images/ban-client.png";
import bannerShape6 from "/images/ban-skill.png";
import bannerShape7 from "/images/ban-shape3.png";
import { FaSquareFull } from "react-icons/fa6";
import Brand from "../Brand/Brand";
import Feature from "../Feature/Feature";
import About from "../About/About";

const Banner = () => {
  return (
    <div className="bg-[url('/images/banner-bg.png')] bg-cover bg-center bg-no-repeat">
      <section className="h-[600px] sm:h-[1400px] lg:h-[660px] xl:h-[865px] flex items-center relative z-10 overflow-hidden">
        <div className="Container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative">
              <img
                src={bannerShape}
                draggable={false}
                className="absolute bottom-0 right-10 animate-rotational hidden sm:block"
              />
              <img
                src={bannerShape2}
                draggable={false}
                className="absolute top-0 -left-24 animate-dance2 hidden sm:block"
              />

              <h5 className="font-Rajdhani text-PrimaryColor-0 text-xl font-semibold flex items-center gap-3 mb-4">
                <FaSquareFull size={"10"} />
                Bespoke Smart Solutions
              </h5>
              <h1 className="font-Rajdhani font-extrabold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[52px] sm:leading-[56px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[72px] 2xl:text-[60px] 2xl:leading-[74px]">
                Embrace Development
                <br />
                <span className="relative before:absolute before:left-2 before:-bottom-3 before:w-full before:h-8 before:bg-[#1dda7d] before:bg-opacity-30 before:[clip-path:polygon(0_-2%,_0%_100%,_100%_2%)] before:hidden md:before:block">
                  Tools Without
                </span>
                <br />a Single Line of Code
              </h1>
              <p className="font-Nunito sm:text-[17px] text-TextColor2-0 mb-10 mt-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br className="hidden 2xl:block" />
                has been single line of code industry’s standard dummy text.
              </p>
              <Link to={"/contact"}>
                <button className="primary-btn6">{`Start A Project`}</button>
              </Link>
            </div>
            <div className="sm:flex justify-center lg:justify-end -mb-[132px] lg:-mb-12 relative hidden">
              <img src={bannerImg} draggable="false" className="" />
              <img
                src={bannerShape7}
                draggable={false}
                className="absolute top-20 left-10 animate-swing hidden sm:block"
              />
              <img
                src={bannerShape3}
                draggable={false}
                className="absolute top-0 -right-20 animate-swing hidden sm:block"
              />
              <img
                src={bannerShape4}
                draggable={false}
                className="absolute bottom-0 -right-20 animate-rotational hidden sm:block"
              />
              <img
                src={bannerShape5}
                draggable={false}
                className="absolute bottom-20 left-20 animate-dance3 hidden sm:block"
              />
              <img
                src={bannerShape6}
                draggable={false}
                className="absolute top-1/2 -translate-y-1/2 -right-24 2xl:-right-36 animate-wiggle hidden sm:block"
              />
            </div>
          </div>
        </div>
      </section>
      <Brand />
      <Feature />
      <About />
    </div>
  );
};

export default Banner;
