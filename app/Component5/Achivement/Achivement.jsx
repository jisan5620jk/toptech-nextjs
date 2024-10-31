import CountUp from "react-countup";
import achivementShape from "/images/banner-shape2.png";
import achivementShape2 from "/images/about-main-shape.png";

const Achivement = () => {
  return (
    <section className="py-[120px]">
      <div className="Container relative z-10">
        <img
          src={achivementShape}
          draggable="false"
          className="animate-bounce absolute top-20 -left-5"
        />
        <img
          src={achivementShape2}
          draggable="false"
          className="animate-rotational absolute top-0 -right-20"
        />
        <div className="text-center">
          <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
            Achivements
          </h5>
          <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
            Explore the Powerful Features
            <br /> Our Software Stand Out
          </h1>
          <p className="font-Nunito text-TextColor2-0">
            Conveniently provide access to leading-edge imperatives whereas
            interfaces. <br /> Uniquely network cutting-edge niche markets
            whereas
          </p>
        </div>
        <div className="border-t mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center border-r pt-14">
            <CountUp
              start={-9}
              end={36}
              suffix="M"
              className="text-3xl sm:text-[70px] sm:leading-[40px] font-Rajdhani font-semibold text-HeadingColor-0"
            />
            <p className="font-Nunito text-TextColor2-0 mt-4">
              Conveniently provide access <br /> interfaces network
            </p>
          </div>
          <div className="text-center border-r pt-14">
            <CountUp
              start={-9}
              end={68}
              suffix="K+"
              className="text-3xl sm:text-[70px] sm:leading-[40px] font-Rajdhani font-semibold text-HeadingColor-0"
            />
            <p className="font-Nunito text-TextColor2-0 mt-4">
              Conveniently provide access <br /> interfaces network
            </p>
          </div>
          <div className="text-center border-r pt-14">
            <CountUp
              start={-9}
              end={12}
              suffix="K"
              className="text-3xl sm:text-[70px] sm:leading-[40px] font-Rajdhani font-semibold text-HeadingColor-0"
            />
            <p className="font-Nunito text-TextColor2-0 mt-4">
              Conveniently provide access <br /> interfaces network
            </p>
          </div>
          <div className="text-center pt-14">
            <CountUp
              start={-9}
              end={93}
              suffix="%"
              className="text-3xl sm:text-[70px] sm:leading-[40px] font-Rajdhani font-semibold text-HeadingColor-0"
            />
            <p className="font-Nunito text-TextColor2-0 mt-4">
              Conveniently provide access <br /> interfaces network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
