import whyChooseThumb from "/images/choose-us6-thumb.png";
import whyChooseShape from "/images/choose-shape.png";
import ProgressBar from "react-animated-progress-bar";
import { FaSquareFull } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <section className="py-[140px] relative why-choose">
      <div className="Container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0 items-center">
          <div className="relative z-10">
            <img
              src={whyChooseThumb}
              draggable="false"
              className="2xl:max-w-[inherit]"
            />
            <img
              src={whyChooseShape}
              draggable="false"
              className="absolute top-0 -left-16 animate-rotational -z-10"
            />
          </div>
          <div className="relative z-10">
            <h5 className="font-Rajdhani font-semibold text-PrimaryColor-0 uppercase flex items-center gap-3 text-lg mb-5">
              <FaSquareFull size={"10"} /> WHY CHOOSE US
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl leading-6 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[32px] lg:leading-[39px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-3">
              Smart and Clean UI Solutions for
              <br /> Our Engaged Clients
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-5">
              Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus
              branding <br className="hidden 2xl:block" /> metus futures
              phasellus magna consectetur nec faucibus
            </p>
            <div className="mb-[30px] mt-7">
              <h6 className="font-Nunito text-TextColor2-0 pb-2">
                Business Goal
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="10px"
                fontColor="#0c5adb"
                fontSize="18px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="500"
                percentage="70"
                defColor={{
                  excellent: "#0c59db",
                  good: "#0c59db",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#f4f9ff"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="mb-[30px]">
              <h6 className="font-Nunito text-TextColor2-0 pb-2">
                Business Growth
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="10px"
                fontColor="#0c5adb"
                fontSize="18px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="500"
                percentage="90"
                defColor={{
                  excellent: "#fdb801",
                  good: "#0c59db",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#f4f9ff"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div>
              <h6 className="font-Nunito text-TextColor2-0 pb-2">
                Competitor Research
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="10px"
                fontColor="#0c5adb"
                fontSize="18px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="500"
                percentage="80"
                defColor={{
                  excellent: "#fb5a3e",
                  good: "#0c59db",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#f4f9ff"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
