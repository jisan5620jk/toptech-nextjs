import collaborationThumb from "/images/mobil-app-colaboration-img-1.png";
import icon from "/images/mobil-app-download.png";
import { Link } from "react-router-dom";
import { HiBadgeCheck, HiOutlineArrowRight } from "react-icons/hi";

const Collaboration = () => {
  return (
    <section className="py-[120px] relative">
      <div className="Container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10 2xl:-ml-[92px]">
            <img
              src={collaborationThumb}
              draggable="false"
              className="2xl:max-w-[inherit]"
            />
            <div className="hidden absolute top-0 right-0 shadow-cases sm:flex gap-4 2xl:w-[294px] 2xl:right-2 bg-white rounded-3xl border px-9 pt-10 pb-7">
              <div>
                <img src={icon} draggable="false" />
              </div>
              <div>
                <h2 className="font-Rajdhani font-semibold text-HeadingColor-0 text-[38px] leading-9">
                  1.6 M
                </h2>
                <p className="font-Nunito text-[15px] text-TextColor2-0">
                  All Downloads
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              Collaborations
            </h5>
            <h1 className="font-Rajdhani font-bold text-[21px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[32px] lg:leading-[38px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
              Quickly drive interoperable apps
              <br /> amazing Components
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-10">
              Monotonically synergize grants to business convergence main
              <br className="hidden md:block lg:hidden xl:block" /> visualize
              strategic infomediaries parallel high
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 border-b  pb-6 mb-7">
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <HiBadgeCheck size={"24"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:text-[17px] xl:text-xl 2xl:text-[22px]">
                    Safe and Secure Browsing
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <HiBadgeCheck size={"24"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:text-[17px] xl:text-xl 2xl:text-[22px]">
                    100% Best Visibility
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <HiBadgeCheck size={"24"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:text-[17px] xl:text-xl 2xl:text-[22px]">
                    Secure Browsing System
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-PrimaryColor-0">
                  <HiBadgeCheck size={"24"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:text-[17px] xl:text-xl 2xl:text-[22px]">
                    Super Fast Conversation
                  </h5>
                </div>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn5">
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

export default Collaboration;
