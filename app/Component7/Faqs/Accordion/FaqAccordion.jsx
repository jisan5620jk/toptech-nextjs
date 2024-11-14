"use client"

import { useState, useReducer } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const FaqAccordion = ({ children, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useReducer(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className="rounded-md overflow-hidden">
      <h2>
        <button
          className="faq-button7 flex items-center px-2 sm:px-[30px] py-5 rounded-t-lg rounded-b-lg justify-between w-full text-left transition-all duration-500 group border"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 font-semibold font-Rajdhani transition duration-400 text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl ${
              accordionOpen && "!text-HeadingColor-0"
            }`}
          >
            <span>{title}</span>
          </span>
          <span className="relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-7 before:h-7 md:before:w-[1px] before:bg-TextColor-0">
            <FaAngleDown
              className={`text-HeadingColor-0 bg-transparent -rotate-90 transition duration-400 group-hover:text-HeadingColor-0 ${
                accordionOpen && " !text-HeadingColor-0 rotate-0"
              }`}
            />
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-TextColor2-0 border-x border-b bg-[#f2f7fd] px-2 sm:px-[30px] overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="-mt-1 pb-8 text-sm sm:text-base !leading-[28px] font-Nunito">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
