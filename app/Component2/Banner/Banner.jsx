import bannerImg from "../../../public/images/hero-thumb.png";
import bannerShape from "../../../public/images/hero-shape2.png";
import { BiRightTopArrowCircle } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-[650px] sm:h-[1200px] lg:h-[660px] xl:h-[800px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 pt-[70px] lg:pt-[100px]">
          <div className="relative">
            <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
              IT SOLUTION AGENCY IN USA
            </h5>
            <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[69px] 2xl:leading-[79px]">
              Unlocking Innovation
              <br />
              With IT Expertise
            </h1>
            <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1">
              Professionally optimize interdependent intellectual interoperable{" "}
              <br className="hidden 2xl:block" /> connect best practices.
              Progressively fabricate done
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={"/contact"}>
                <button className="primary-btn2">
                  {`Let's Talk`}
                  <BiRightTopArrowCircle size={"20"} />
                </button>
              </Link>
              <Link href={"/about"}>
                <button className="primary-btn2 !border-[#262664] hover:!border-PrimaryColor-0 !bg-[#262664] before:!bg-PrimaryColor-0">{`Read More`}</button>
              </Link>
            </div>
          </div>
          <div className="sm:flex justify-center lg:justify-end -mb-[132px] lg:-mb-12 relative z-10 hidden">
            <Image alt="Banner Image" src={bannerImg} draggable="false" className="w-[inherit]" />
            <Image alt="Banner Shape"
              src={bannerShape}
              draggable={false}
              className="absolute -z-10 top-40 right-0 md:right-10 lg:-right-10 2xl:-right-[4rem] animate-dance3 hidden 2xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
