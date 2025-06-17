"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <section className="bg-[url('/images/hero3-bg.jpg')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[900px] lg:h-[660px] xl:h-[900px] flex items-center relative z-10 overflow-hidden">
        <div className="Container">
          <div className="grid gap-16 lg:gap-0 lg:grid-cols-12 items-center">
            <div className="col-span-9 relative">
              <h5 className="font-Rajdhani text-white text-xl sm:text-2xl uppercase font-medium flex items-center gap-2 mb-5">
                Welcome to Toptech
              </h5>
              <h1 className="font-Rajdhani font-extrabold text-white text-[26px] leading-[30px] sm:text-[48px] sm:leading-[50px] md:text-[62px] md:leading-[62px] lg:text-[50px] lg:leading-[50px] xl:text-[74px] xl:leading-[74px]">
                TOP IT SOLUTIONS AGENCY
                <br />
                IN THE WORLD
              </h1>
              <p className="font-Nunito sm:text-[17px] text-white mb-[50px] mt-6 w-full">
                Play In Order To Make A Business, Brand
                <br className="sm:hidden" /> Advertising And Marketing Plays An
                <br className="block sm:hidden md:block" /> Important Role.
                Similarly, In Making <br className="sm:hidden" /> Cultivation
                Business
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href={"/pages/about"}>
                  <button className="primary-btn3 !py-4 !px-10 !rounded-none">
                    {`How IT Works`}
                  </button>
                </Link>
                <Link href={"/pages/service"}>
                  <button className="primary-btn3 !py-4 !px-10 !rounded-none !border-white hover:!border-PrimaryColor-0 !bg-transparent before:!bg-PrimaryColor-0">{`It Services`}</button>
                </Link>
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <button className="size-[120px] border-2 border-white rounded-full bg-transparent flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                <span
                  className="text-white uppercase font-Nunito text-2xl"
                  onClick={togglePopup}
                >
                  Play
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Video Popup — placed OUTSIDE the section */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
          <div className="relative z-50 w-full max-w-3xl p-4">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute z-10 top-0 right-0 size-10 flex items-center justify-center text-HeadingColor-0 text-2xl rounded-full bg-white hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Embedded YouTube Video */}
            <div className="relative pt-[56.25%]">
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/NKJ-6zCSk2E"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div
            onClick={togglePopup}
            className="absolute top-0 left-0 inline-block w-full h-full bg-SecondaryColor-0 bg-opacity-60 z-40"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Banner;
