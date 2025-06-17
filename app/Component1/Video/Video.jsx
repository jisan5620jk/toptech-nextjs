"use client";

import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Section with background and play button */}
      <section className="bg-[url('/images/video-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[144px] pb-[150px] relative z-10">
        <div className="Container text-center">
          <h5 className="text-lg font-semibold text-PrimaryColor-0">
            Watch Now
          </h5>
          <h1 className="text-white text-3xl font-bold mt-4">
            Our Best Working Process System <br />
            with Team Expert Leaders
          </h1>
          <div className="flex justify-center mt-10">
            <button
              onClick={togglePopup}
              className="h-[80px] w-[80px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
            >
              <IoMdPlay size={30} className="text-white" />
            </button>
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

export default Video;
