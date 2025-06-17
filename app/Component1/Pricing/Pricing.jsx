"use client";

import PricingAccordion from "./Accordion/PricingAccordion";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import { useEffect } from "react";
import Link from "next/link";

const Pricing = () => {
  //  All Faqs and  answers.
  const Faqs = [
    {
      title: "How to increase products sales 2025?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: true,
    },
    {
      title: "What kinds of web traffics?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
    {
      title: "How to generate organic audience?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
    {
      title: "Do you have any custom services?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
  ];

  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add("active");

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(".pricing-box");
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove("active");
          }
        });
      }
    };

    const elements = document.querySelectorAll(".pricing-box");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/pricing-bg.jpg')] bg-cover bg-no-repeat
     bg-center"
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 xl:gap-24 2xl:gap-[140px] lg:grid-cols-2 items-center">
          <div className="w-full mx-auto">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Pricing Plans
            </h5>
            <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[28px] lg:leading-[38px] xl:text-[32px] xl:leading-[42px] 2xl:text-[37px] 2xl:leading-[47px] text-white mt-[18px] mb-12">
              Our Best Affordable Pricing Plan <br />
              Choose Your Plans
            </h1>
            <div>
              {Faqs.map((faq, index) => (
                <PricingAccordion
                  key={index}
                  faqIcon={faq.faqIcon}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </PricingAccordion>
              ))}
            </div>
          </div>
          <div>
            <div className="pricing-box active group bg-white rounded-md px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500 mb-[50px]">
              <h6 className="pricing-quality px-[22px] py-[5px] text-lg bg-PrimaryColor-0 rounded font-Rajdhani text-white font-medium transition-all duration-500 absolute -top-[19px] right-7">
                Popular
              </h6>
              <div className="absolute top-6 sm:top-10 right-7 flex items-baseline gap-1">
                <CountUp
                  start={-9}
                  end={99}
                  prefix="$"
                  suffix="."
                  className="pricing-price text-[40px] font-Rajdhani font-semibold text-HeadingColor-0 transition-all duration-500"
                />
                <h6 className="pricing-price font-Rajdhani font-semibold text-lg transition-all duration-500">
                  99
                </h6>
              </div>
              <h6 className="pricing-limit font-Rajdhani font-semibold text-lg transition-all duration-500 mb-3">
                FOR 1 YEARS
              </h6>
              <div className="flex gap-5">
                <div className="pricing-icon w-[42px] h-[42px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center relative z-10 overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0 mt-3">
                  <FaCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="pricing-title font-Rajdhani font-semibold mt-2 sm:mt-2 text-2xl sm:text-[28px] text-HeadingColor-0 transition-all duration-500 mb-1">
                    19 Days For Free
                  </h5>
                  <p className="pricing-desc font-Nunito text-TextColor2-0 transition-all duration-500 mb-[26px]">
                    Multifunctional human capital after awesome{" "}
                    <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                    superior scenarios my coordinate
                  </p>
                  <Link href={"/"}>
                    <button className="pricing-btn font-Rajdhani font-medium text-lg text-HeadingColor-0 border border-PrimaryColor-0 rounded px-7 py-2 transition-all duration-500">
                      Purchaces
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pricing-box group bg-white rounded-md px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500">
              <h6 className="pricing-quality px-[22px] py-[5px] text-lg bg-PrimaryColor-0 rounded font-Rajdhani text-white font-medium transition-all duration-500 absolute -top-[19px] right-7">
                Business
              </h6>
              <div className="absolute top-6 sm:top-10 right-7 flex items-baseline gap-1">
                <CountUp
                  start={-9}
                  end={19}
                  prefix="$"
                  suffix="."
                  className="pricing-price text-[40px] font-Rajdhani font-semibold text-HeadingColor-0 transition-all duration-500"
                />
                <h6 className="pricing-price font-Rajdhani font-semibold text-lg transition-all duration-500">
                  99
                </h6>
              </div>
              <h6 className="pricing-limit font-Rajdhani font-semibold text-lg transition-all duration-500 mb-3">
                FOR 1 MONTH
              </h6>
              <div className="flex gap-5">
                <div className="pricing-icon w-[42px] h-[42px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center relative z-10 overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0 mt-3">
                  <FaCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="pricing-title font-Rajdhani font-semibold mt-2 sm:mt-2 text-2xl sm:text-[28px] text-HeadingColor-0 transition-all duration-500 mb-1">
                    09 Days For Free
                  </h5>
                  <p className="pricing-desc font-Nunito text-TextColor2-0 transition-all duration-500 mb-[26px]">
                    Multifunctional human capital after awesome{" "}
                    <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                    superior scenarios my coordinate
                  </p>
                  <Link href={"/"}>
                    <button className="pricing-btn font-Rajdhani font-medium text-lg text-HeadingColor-0 border border-PrimaryColor-0 rounded px-7 py-2 transition-all duration-500">
                      Purchaces
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
