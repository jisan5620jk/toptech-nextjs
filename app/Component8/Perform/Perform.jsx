import { FaSquareFull } from "react-icons/fa6";
import liveThumb from "/images/live-thumb.png";
import liveShape from "/images/live-shape.png";

const Perform = () => {
  return (
    <section className="bg-[#fff8f5] py-[140px]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0">
          <div>
            <h5 className="font-Rajdhani font-semibold text-PrimaryColor-0 capitalize flex items-center gap-3 text-lg mb-5">
              <FaSquareFull size={"10"} /> Perform Apps On Live
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-3">
              Watch Our Apps Shine in Action
              <br /> Post-Development!
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-5">
              Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus
              branding <br className="hidden 2xl:block" /> metus futures
              phasellus magna consectetur nec faucibus
            </p>
            <div className="flex flex-col sm:flex-row gap-7 items-center mt-9">
              <div className="space-y-7">
                <div className="flex items-center gap-3 bg-[#ffe1d9] rounded-lg 2xl:w-[270px] overflow-hidden group px-[34px] lg:px-4 xl:px-5 2xl:pl-[34px] py-[14px]">
                  <div className="size-[10px] bg-[#fb5a3e] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fb5a3e] before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[50] sm:group-hover:before:scale-[50] md:group-hover:before:scale-[60] 2xl:group-hover:before:scale-[70} after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100"></div>
                  <h5 className="relative z-10 font-Rajdhani text-xl font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                    Fast Downloading
                  </h5>
                </div>
                <div className="flex items-center gap-3 bg-[#e6d8f1] rounded-lg 2xl:w-[270px] overflow-hidden group px-[34px] lg:px-4 xl:px-5 2xl:pl-[34px] py-[14px]">
                  <div className="size-[10px] bg-[#5020d8] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#5020d8] before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[50] sm:group-hover:before:scale-[50] md:group-hover:before:scale-[60] 2xl:group-hover:before:scale-[70} after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100"></div>
                  <h5 className="relative z-10 font-Rajdhani text-xl font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                    On-Time Delivery
                  </h5>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex items-center gap-3 bg-[#ddf4e2] rounded-lg 2xl:w-[270px] overflow-hidden group px-[34px] lg:px-4 xl:px-5 2xl:pl-[34px] py-[14px]">
                  <div className="size-[10px] bg-[#1dda7c] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#1dda7c] before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[50] sm:group-hover:before:scale-[50] md:group-hover:before:scale-[60] 2xl:group-hover:before:scale-[70} after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100"></div>
                  <h5 className="relative z-10 font-Rajdhani text-xl font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                    Security Certified
                  </h5>
                </div>
                <div className="flex items-center gap-3 bg-[#ffeed0] rounded-lg 2xl:w-[270px] overflow-hidden group px-[34px] lg:px-4 xl:px-5 2xl:pl-[34px] py-[14px]">
                  <div className="size-[10px] bg-[#fdb900] flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fdb900] before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[50] sm:group-hover:before:scale-[50] md:group-hover:before:scale-[60] 2xl:group-hover:before:scale-[70} after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100"></div>
                  <h5 className="relative z-10 font-Rajdhani text-xl font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                    Cloud Compatibility
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end relative z-10 mt-16 lg:mt-0">
            <img
              src={liveThumb}
              draggable="false"
              className="w-11/12 2xl:w-[inherit] relative 2xl:left-12"
            />
            <img
              src={liveShape}
              draggable="false"
              className="w-11/12 2xl:w-[inherit] animate-wiggle absolute -z-10 -top-10 right-0 2xl:-right-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perform;
