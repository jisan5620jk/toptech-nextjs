import Image from "next/image";
import aboutThumb from "../../../public/images/about6-thumb.png";
import Link from "next/link";
import { FaSquareFull } from "react-icons/fa6";

const About = () => {
  return (
    <section className="py-[140px] relative">
      <div className="Container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative">
            <h5 className="font-Rajdhani font-semibold text-PrimaryColor-0 capitalize flex items-center gap-3 text-lg mb-5">
              <FaSquareFull size={"10"} /> About TOP-TECH
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[32px] lg:leading-[39px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-3">
              A Guide to Quick Business
              <br />
              Expansion through Applications
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-5">
              Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus
              branding <br className="hidden md:block lg:hidden 2xl:block" />{" "}
              metus futures phasellus magna consectetur nec faucibus
            </p>
            <div className="flex gap-4 mt-7 mb-10">
              <div className="text-[#fdb900]">
                <FaSquareFull size={"10"} />
              </div>
              <div className="flex-1 -mt-2">
                <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl">
                  Software Engineering
                </h5>
                <p className="font-Nunito text-TextColor2-0 pt-[10px]">
                  Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                  faucibus <br className="hidden md:block lg:hidden xl:block" />{" "}
                  metus futures phasellus magna consectetur nec faucibus
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-7 mb-[42px]">
              <div className="text-[#fb5a3e]">
                <FaSquareFull size={"10"} />
              </div>
              <div className="flex-1 -mt-2">
                <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl">
                  Engaging Group Discussion
                </h5>
                <p className="font-Nunito text-TextColor2-0 pt-[10px]">
                  Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                  faucibus <br className="hidden md:block lg:hidden xl:block" />{" "}
                  metus futures phasellus magna consectetur nec faucibus
                </p>
              </div>
            </div>
            <Link href={"/pages/about"}>
              <button className="primary-btn6">{`Discover More`}</button>
            </Link>
          </div>
          <div className="relative z-10">
            <Image
              src={aboutThumb}
              draggable="false"
              alt="About Thumb"
              className="2xl:max-w-[inherit]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
