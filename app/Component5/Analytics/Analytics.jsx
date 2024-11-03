import analyticsIcon from "/images/analytics-icon.png";
import analyticsIcon2 from "/images/analytics-icon2.png";
import CountUp from "react-countup";
import analyticsThumb from "/images/analytics-thumb.jpg";
import analyticsThumb2 from "/images/analytics-thumb2.jpg";
import analyticsThumb3 from "/images/analytics-thumb3.jpg";
import analyticsShape from "/images/analytics-shape.png";

const Analytics = () => {
  return (
    <section className="relative z-10 pt-8">
      <img
        src={analyticsShape}
        draggable="false"
        className="absolute -top-14 right-0 2xl:right-44 -z-10 animate-wiggle hidden lg:block"
      />
      <div className="Container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-0">
          <div>
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              Tracking
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
              Managed Digital Marketing
              <br /> Audience Analytics
            </h1>
            <div className="flex gap-5 mt-7 mb-6">
              <div className="size-[58px] rounded bg-BodyBg-0 flex items-center justify-center mt-2">
                <img src={analyticsIcon} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl">
                  Super Fast Speed
                </h5>
                <p className="font-Nunito text-TextColor2-0 pt-2">
                  Conveniently provide access to leading-edge <br className="hidden md:block"/> interfaces.
                  Uniquely network
                </p>
              </div>
            </div>
            <div className="flex gap-5 mb-8">
              <div className="size-[58px] rounded bg-BodyBg-0 flex items-center justify-center mt-2">
                <img src={analyticsIcon2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl">
                  Admin Dashboard
                </h5>
                <p className="font-Nunito text-TextColor2-0 pt-2">
                  Conveniently provide access to leading-edge <br className="hidden md:block"/> interfaces.
                  Uniquely network
                </p>
              </div>
            </div>
            <div className="pt-8 border-t flex items-center gap-5 md:w-8/12 lg:w-10/12 xl:w-8/12">
              <div className="border-r pr-5">
                <CountUp
                  start={-9}
                  end={98}
                  suffix="%"
                  className="text-3xl sm:text-[60px] sm:leading-[40px] font-Rajdhani font-semibold text-PrimaryColor-0"
                />
              </div>
              <div>
                <p className="font-Nunito text-TextColor2-0 -mt-1">
                  Conveniently provide access <br className="hidden sm:block"/> interfaces network
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <img
                  src={analyticsThumb}
                  draggable="false"
                  className="rounded-3xl shadow-shade"
                />
              </div>
              <div className="md:col-span-1">
                <img
                  src={analyticsThumb2}
                  draggable="false"
                  className="rounded-3xl"
                />
              </div>
              <div className="md:col-span-1">
                <img
                  src={analyticsThumb3}
                  draggable="false"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
