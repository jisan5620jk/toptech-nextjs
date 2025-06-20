"use client";

import Link from "next/link";
import portfolioThumb from "../../../public/images/portfolio-thumb.png";
import portfolioThumb2 from "../../../public/images/portfolio-thumb2.png";
import portfolioThumb3 from "../../../public/images/portfolio-thumb3.png";
import bannerShape2 from "../../../public/images/banner-shape.png";
import bannerShape from "../../../public/images/banner-shape2.png";
import bannerShape3 from "../../../public/images/banner-shape3.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useState } from "react";
import { PiPlay } from "react-icons/pi";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <div className="bg-[url(/images/banner5-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10">
      <section className="bg-transparent pt-[190px] pb-[82px] relative z-10 overflow-hidden">
        <div className="Container relative">
          <Image
            src={bannerShape2}
            draggable="false"
            alt="Banner Shape"
            className="absolute -left-10 top-28 animate-dance3 hidden lg:block"
          />
          <Image
            src={bannerShape}
            draggable="false"
            alt="Banner Shape"
            className="absolute right-10 top-28 animate-swing hidden lg:block"
          />
          <div className="text-center">
            <div className="relative">
              <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
                IT SOLUTION AGENCY IN USA
              </h5>
              <h1 className="font-Rajdhani font-extrabold text-HeadingColor-0 text-2xl sm:text-[46px] sm:leading-[54px] md:text-[68x] lg:text-[50px] xl:text-[70px] xl:leading-[77px] 2xl:text-[76px] 2xl:leading-[83px]">
                Unlock Growth Potential
                <br />
                Innovative Saas
              </h1>
              <p className="font-Nunito sm:text-xl text-HeadingColor-0 mb-9 mt-4">
                Continually formulate B2C partnerships orthogonal saas tools
                using <br className="hidden md:block" /> maintainable quality
                through low business
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link href={"/pages/contact"}>
                  <button className="primary-btn5">
                    {`Try It Now`}
                    <HiOutlineArrowRight size={"20"} />
                  </button>
                </Link>
                <div>
                  <button className="flex items-center gap-4 font-Rajdhani text-lg text-HeadingColor-0 font-semibold uppercase">
                    <span className="size-[56px] rounded-full bg-transparent border border-HeadingColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                      <PiPlay size={"24"} onClick={togglePopup} />
                    </span>
                    How it works
                  </button>
                </div>
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
      <section className="pb-[120px]">
        <div className="Container relative z-10">
          <Image
            src={bannerShape3}
            draggable="false"
            alt="Banner Shape"
            className="absolute -left-24 -top-20 animate-wiggle -z-10 hidden md:block"
          />
          <div className="grid md:col-span-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:row-span-2">
              <Image
                src={portfolioThumb}
                draggable="false"
                alt="Portfolio Image"
                className="rounded-3xl"
              />
            </div>
            <div className="md:col-span-1 md:row-span-1">
              <Image
                src={portfolioThumb2}
                draggable="false"
                alt="Portfolio Image"
                className="rounded-3xl"
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-1">
              <Image
                src={portfolioThumb3}
                draggable="false"
                alt="Portfolio Image"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
