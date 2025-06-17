import Image from "next/image";
import serviceImg from "../../../public/images/service5-icon.png";
import serviceImg2 from "../../../public/images/service5-icon2.png";
import serviceImg3 from "../../../public/images/service5-icon3.png";
import serviceImg4 from "../../../public/images/service5-icon4.png";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RxDotsHorizontal } from "react-icons/rx";

const Service = () => {
  return (
    <section className="py-[120px] bg-[url(/images/service5-bg.jpg)] bg-cover bg-center bg-no-repeat relative z-10">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
            Services
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
            Advanced Security and Compliance
            <br />
            to Protect Your Data
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[66px]">
          <div className="flex flex-col sm:flex-row gap-[30px] group border-r border-BorderColor2-0 pt-8 pb-6">
            <div className="size-[90px] rounded-md flex items-center justify-center bg-white shadow-cases transition-all duration-500 group-hover:rounded-[50%]">
              <Image src={serviceImg} draggable="false" alt="Service Image" />
            </div>
            <div className="flex-1">
              <h5 className="font-Rajdhani font-semibold text-2xl sm:text-[28px] text-HeadingColor-0 -mt-1">
                User & Customer Support
              </h5>
              <p className="font-Nunito text-TextColor2-0 mt-2 md:w-9/12 lg:w-full mb-4 2xl:w-10/12">
                Conveniently provide access leading-edge impossibles interfaces.
                Uniquely network cutting-edge niche target assertively
                disseminate
              </p>
              <Link href={"/pages/service_details"} className="inline-block">
                <button className="flex items-center overflow-hidden relative">
                  <RxDotsHorizontal
                    size={"45"}
                    className="text-TextColor-0 transition-all duration-500 group-hover:-ml-11"
                  />
                  <span className="flex items-center gap-2 font-Rajdhani text-lg font-semibold -mr-[120px] transition-all duration-500 group-hover:mr-0">
                    LEARN MORE
                    <HiOutlineArrowRight size={"20"} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] group pt-8 lg:pl-10 pb-6">
            <div className="size-[90px] rounded-md flex items-center justify-center bg-white shadow-cases transition-all duration-500 group-hover:rounded-[50%]">
              <Image src={serviceImg2} draggable="false" alt="Service Image" />
            </div>
            <div className="flex-1">
              <h5 className="font-Rajdhani font-semibold text-2xl sm:text-[28px] text-HeadingColor-0 -mt-1">
                Targeted Data Analytics
              </h5>
              <p className="font-Nunito text-TextColor2-0 mt-2 md:w-9/12 lg:w-full mb-4 2xl:w-10/12">
                Conveniently provide access leading-edge impossibles interfaces.
                Uniquely network cutting-edge niche target assertively
                disseminate
              </p>
              <Link href={"/pages/service_details"} className="inline-block">
                <button className="flex items-center overflow-hidden relative">
                  <RxDotsHorizontal
                    size={"45"}
                    className="text-TextColor-0 transition-all duration-500 group-hover:-ml-11"
                  />
                  <span className="flex items-center gap-2 font-Rajdhani text-lg font-semibold -mr-[120px] transition-all duration-500 group-hover:mr-0">
                    LEARN MORE
                    <HiOutlineArrowRight size={"20"} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] group border-t border-r border-BorderColor2-0 pt-12">
            <div className="size-[90px] rounded-md flex items-center justify-center bg-white shadow-cases transition-all duration-500 group-hover:rounded-[50%]">
              <Image src={serviceImg3} draggable="false" alt="Service Image" />
            </div>
            <div className="flex-1">
              <h5 className="font-Rajdhani font-semibold text-2xl sm:text-[28px] text-HeadingColor-0 -mt-1">
                Get any Notifications
              </h5>
              <p className="font-Nunito text-TextColor2-0 mt-2 md:w-9/12 lg:w-full mb-4 2xl:w-10/12">
                Conveniently provide access leading-edge impossibles interfaces.
                Uniquely network cutting-edge niche target assertively
                disseminate
              </p>
              <Link href={"/pages/service_details"} className="inline-block">
                <button className="flex items-center overflow-hidden relative">
                  <RxDotsHorizontal
                    size={"45"}
                    className="text-TextColor-0 transition-all duration-500 group-hover:-ml-11"
                  />
                  <span className="flex items-center gap-2 font-Rajdhani text-lg font-semibold -mr-[120px] transition-all duration-500 group-hover:mr-0">
                    LEARN MORE
                    <HiOutlineArrowRight size={"20"} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] group border-t border-BorderColor2-0 pt-12 lg:pl-10">
            <div className="size-[90px] rounded-md flex items-center justify-center bg-white shadow-cases transition-all duration-500 group-hover:rounded-[50%]">
              <Image src={serviceImg4} draggable="false" alt="Service Image" />
            </div>
            <div className="flex-1">
              <h5 className="font-Rajdhani font-semibold text-2xl sm:text-[28px] text-HeadingColor-0 -mt-1">
                Cyber Security Protected
              </h5>
              <p className="font-Nunito text-TextColor2-0 mt-2 md:w-9/12 lg:w-full mb-4 2xl:w-10/12">
                Conveniently provide access leading-edge impossibles interfaces.
                Uniquely network cutting-edge niche target assertively
                disseminate
              </p>
              <Link href={"/pages/service_details"} className="inline-block">
                <button className="flex items-center overflow-hidden relative">
                  <RxDotsHorizontal
                    size={"45"}
                    className="text-TextColor-0 transition-all duration-500 group-hover:-ml-11"
                  />
                  <span className="flex items-center gap-2 font-Rajdhani text-lg font-semibold -mr-[120px] transition-all duration-500 group-hover:mr-0">
                    LEARN MORE
                    <HiOutlineArrowRight size={"20"} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
