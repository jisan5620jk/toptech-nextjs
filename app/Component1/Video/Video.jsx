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
        <div className="container mx-auto text-center">
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
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl px-4">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute -top-6 -right-6 bg-white text-black rounded-full p-2 hover:bg-gray-200 z-50"
            >
              <FaTimes />
            </button>

            {/* YouTube Video */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
