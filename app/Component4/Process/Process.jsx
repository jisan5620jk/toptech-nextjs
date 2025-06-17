"use client";

import Link from "next/link";
import processThumb from "../../../public/images/process-thumb.png";
import { PiStarFourFill } from "react-icons/pi";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const Process = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      {" "}
      <section className="bg-BodyBg-0 py-28 relative z-10">
        <div className="Container">
          <div className="grid lg:grid-cols-2 lg:items-center gap-10 xl:gap-20 2xl:gap-9">
            <div className="relative">
              <Image
                src={processThumb}
                draggable="false"
                alt="Porcess Image"
                className="w-full lg:w-[inherit]"
              />
              <div className="absolute top-1/2 right-[65px] sm:right-[155px] md:right-[230px] lg:right-[128px] xl:right-[154px] 2xl:right-[266px] -translate-y-1/2">
                <button className="size-[100px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-xl relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[11px] before:left-[11px] before:size-[78px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
                  <span onClick={togglePopup}>Play</span>
                </button>
              </div>
            </div>
            <div>
              <h5 className="font-Rajdhani text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
                <PiStarFourFill size={"14"} />
                WORK PROCESSING
              </h5>
              <h1 className="font-Rajdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[42px] xl:leading-[52px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4">
                Expert Consulting for Diverse
                <br />
                Financial Services.
              </h1>
              <p className="font-Nunito text-TextColor2-0 text-lg pb-7">
                Professionaly optimize interdependent intelectual services
                visuali design infoediaries main issue state icreative planing
                main best practices.
              </p>
              <p className="font-Nunito text-TextColor2-0 text-lg pb-6">
                Our team of seasoned experts is here to you to unlock your
                provid business’s potential and achieve remar success.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-7 mt-5">
                <Link href={"/pages/about"}>
                  <button className="primary-btn4">{`Read More`}</button>
                </Link>
                <Link href={"/home4"}>
                  <button className="font-Nunito font-medium text-TextColor2-0 flex items-center gap-2">
                    {`CUSTOMER DETAILS`}
                    <HiOutlineArrowRight size={"20"} />
                  </button>
                </Link>
              </div>
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

export default Process;
