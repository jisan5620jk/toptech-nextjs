import processImg from "../../../public/images/mobile-app-wrk-img1.png";
import processImg2 from "../../../public/images/mobile-app-wrk-img2.png";
import processImg3 from "../../../public/images/mobile-app-wrk-img3.png";
import processThumb from "../../../public/images/mobile-app-work-single-img.png";
import processShape from "../../../public/images/mobile-app-work-notice-icon.png";
import ProcessCard from "./ProcessCard";
import { RxDotsHorizontal } from "react-icons/rx";
import Image from "next/image";

const processData = [
  {
    id: 1,
    processImg: processImg,
    boxNumber: "01",
    processTitle: "Download Apps",
    processDesc: "Conveniently provide access to interfaces network",
    boxDot: <RxDotsHorizontal />,
  },
  {
    id: 2,
    processImg: processImg2,
    boxNumber: "02",
    processTitle: "Easy Setup",
    processDesc: "Conveniently provide access to interfaces network",
    boxDot: <RxDotsHorizontal />,
  },
  {
    id: 3,
    processImg: processImg3,
    boxNumber: "03",
    processTitle: "Conversation",
    processDesc: "Conveniently provide access to interfaces network",
    boxDot: <RxDotsHorizontal />,
  },
];

const Process = () => {
  return (
    <section className="pt-28 pb-[145px] relative z-10 bg-[url(/images/mobile-app-work-bg.png)] bg-no-repeat bg-center bg-cover">
      <div className="Container">
        <div className="relative">
          <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
            Work Process
          </h5>
          <h1 className="font-Rajdhani font-bold text-[21px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
            Start conversation just finished
            <br />3 simple easy steps
          </h1>
          <Image
            src={processShape}
            draggable="false"
            alt="Process Shape"
            className="absolute top-10  right-0 animate-swing hidden md:block"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[54px]">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
            {processData.map(
              ({
                id,
                processImg,
                boxNumber,
                processTitle,
                boxDot,
                processDesc,
              }) => {
                return (
                  <div key={id}>
                    <ProcessCard
                      processImg={processImg}
                      boxNumber={boxNumber}
                      boxDot={boxDot}
                      processTitle={processTitle}
                      processDesc={processDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
          <div className="md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1">
            <Image
              src={processThumb}
              draggable="false"
              alt="Process Iamge"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
