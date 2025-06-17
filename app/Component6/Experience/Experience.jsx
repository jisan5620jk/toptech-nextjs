import { FaApple, FaGooglePlay } from "react-icons/fa6";
import Link from "next/link";
import experienceThumb from "../../../public/images/call-thumb.png";
import experienceThumb2 from "../../../public/images/call-thumb2.png";
import experienceShape from "../../../public/images/ball1.png";
import experienceShape2 from "../../../public/images/ball2.png";
import experienceShape3 from "../../../public/images/call-shape1.png";
import experienceShape4 from "../../../public/images/call-shape2.png";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="py-[140px]">
      <div className="Container">
        <div className="grid gap-10 lg:gap-0 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="relative">
              <Image
                src={experienceThumb}
                draggable="false"
                alt="Experience Image"
                className="animate-wiggle relative top-8 left-0 2xl:-left-24 max-w-full 2xl:max-w-[inherit]"
              />
              <Image
                src={experienceShape}
                draggable="false"
                alt="Experience Shape"
                className="animate-dance2 absolute top-8 left-0"
              />
              <Image
                src={experienceShape2}
                draggable="false"
                alt="Experience Shape"
                className="animate-bounce absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <Image
                src={experienceShape3}
                draggable="false"
                alt="Experience Shape"
                className="animate-dance3 absolute bottom-8 left-0 2xl:-left-20 w-4/12 md:w-2/12 2xl:w-[inherit] hidden sm:block"
              />
              <Image
                src={experienceShape4}
                draggable="false"
                alt="Experience Shape"
                className="animate-rotational absolute top-8 right-0 md:right-40 lg:right-0"
              />
            </div>
          </div>
          <div className="lg:col-span-6 text-center">
            <h5 className="font-Rajdhani font-semibold text-PrimaryColor-0 capitalize text-lg mb-5">
              Experience On Top-Tech
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-3">
              Innovative App Design for Your
              <br />
              Unique Designes
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-5">
              Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus
              branding metus{" "}
              <br className="hidden md:block lg:hidden 2xl:block" />
              futures phasellus magna consectetur nec faucibus
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
              <Link href={"/"}>
                <button className="primary-btn6">
                  <FaGooglePlay size={"28"} />
                  {`Google Play`}
                </button>
              </Link>
              <Link href={"/"}>
                <button className="primary-btn6">
                  <FaApple size={"28"} />
                  {`App Store`}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="relative">
              <Image
                src={experienceThumb2}
                draggable="false"
                alt="Experience Image"
                className="animate-wiggle relative top-8 left-0 max-w-full 2xl:left-8 2xl:max-w-[inherit]"
              />
              <Image
                src={experienceShape2}
                draggable="false"
                alt="Experience Shape"
                className="animate-bounce absolute top-20 right-20"
              />
              <div className="absolute top-8 -right-20 md:right-20 lg:right-0 xl:-right-20 size-[100px] rounded-full bg-BodyBg-0 flex justify-center items-center">
                <Image
                  src={experienceShape4}
                  draggable="false"
                  alt="Experience Shape"
                  className="animate-spin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
