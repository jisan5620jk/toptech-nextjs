'use client';

import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const PricingAccordion = ({ children, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]); // Include 'active' in the dependency array

  return (
    <div className='rounded-md overflow-hidden'>
      <h2>
        <button
          className='faq-button flex items-center justify-between w-full text-left hover:bg-PrimaryColor-0 transition-all duration-500 group border-t border-x border-x-transparent border-BorderColor-0'
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-white font-semibold font-Rajdhani transition duration-400 group-hover:text-white text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl py-4 ${
              accordionOpen && '!text-white'
            }`}
          >
            <span>{title}</span>
          </span>
          <FaAngleDown
            className={`text-white bg-transparent -rotate-90 transition duration-400 group-hover:text-white ${
              accordionOpen && ' !text-white rotate-0'
            }`}
          />
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid  text-TextColor-0 bg-transparent overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>
          <p className='pt-6 pb-11 text-sm sm:text-base !leading-[28px] font-Nunito'>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;
