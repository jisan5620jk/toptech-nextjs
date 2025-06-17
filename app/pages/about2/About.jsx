"use client";

import aboutThumb from "../../../public/images/about-inner-thumb.png";
import aboutIcon from "../../../public/images/about-icon.png";
import { IoMdPlay } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <section className="py-[120px] bg-[url(/images/about-bg.jpg)] bg-no-repeat bg-center bg-cover relative">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
            <div className="relative z-10">
              <Image src={aboutThumb} draggable="false" alt="About Image" />
              <div className="h-14 w-14 sm:h-[245px] sm:w-[295px] border-8 border-white rounded bg-PrimaryColor-0 flex justify-center items-center absolute bottom-10 right-0">
                <button className="h-14 w-14 sm:h-[100px] sm:w-[100px] border-white rounded-full bg-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:border before:border-white before:-z-10 before:rounded-full before:animate-ping">
                  <IoMdPlay
                    size={"35"}
                    className="text-PrimaryColor-0"
                    onClick={togglePopup}
                  />
                </button>
              </div>
            </div>
            <div className="relative">
              <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                IT Support for Business
              </h5>
              <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
                About is Over 291+ Company
                <br />
                Business Solution.
              </h1>
              <p className="font-Nunito text-TextColor2-0">
                Monotonectally synergize granular markets and front markets.
                Collaboratively visualize strategic infomediaries after
                multimedia based models. Synergistically task state of the art
                infrastructures for
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] mt-10 mb-7 border-b-2 border-PrimaryColor-0 relative before:absolute before:bottom-0 before:left-0 before:bg-[#d5d5d5] before:w-full before:h-1 pb-12">
                <div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <Image
                        src={aboutIcon}
                        draggable="false"
                        alt="About Icon"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                        IT Management
                      </h5>
                    </div>
                  </div>
                  <p className="font-Nunito text-TextColor2-0 pt-3">
                    Proved granular markets dream team more based models clean.
                  </p>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <Image
                        src={aboutIcon}
                        draggable="false"
                        alt="About Icon"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                        Award Ceremony
                      </h5>
                    </div>
                  </div>
                  <p className="font-Nunito text-TextColor2-0 pt-3">
                    Proved granular markets dream team more based models clean.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Link href={"/pages/mission"}>
                  <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-Nunito">
                    Mission
                  </button>
                </Link>
                <Link href={"/pages/mission"}>
                  <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-Nunito">
                    Vission
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

export default About;
