"use client";

import FaqAccordion from "./FaqAccordion";
import faqIcon from "../../../public/images/faqs-icon-s.png";
import faqIcon2 from "../../../public/images/faqs-icon1.png";
import faqImg from "../../../public/images/faqs-1.jpg";
import faqImg2 from "../../../public/images/faqs-2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Brand from "./Brand";
import Image from "next/image";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Newsletter from "./Newsletter/Newsletter";

//  All Faqs and  answers.
const faqs = [
  {
    faqIcon2: faqIcon2,
    title: "Project Horizon Redevelopment?",
    text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
    active: true,
  },
  {
    faqIcon2: faqIcon2,
    title: "What is your professional passion?",
    text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
    active: false,
  },
  {
    faqIcon2: faqIcon2,
    title: "Service Horizon Business low?",
    text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
    active: false,
  },
  {
    faqIcon2: faqIcon2,
    title: "Business Solution Redevelopment?",
    text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
    active: false,
  },
  {
    faqIcon2: faqIcon2,
    title: "Do you have any custom services?",
    text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
    active: false,
  },
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import TextReveal from "@/app/Shared/TextAnim/TextReveal";
import ContentReveal from "@/app/Shared/ContentReveal/ContentReveal";
import ImageReveal from "@/app/Shared/ImageReveal/ImageReveal";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const Page = () => {
  const smootherRef = useRef(null);

  // Run global image reveal animations
  ImageReveal();

  // Run global text reveal animations
  ContentReveal();

  // Run global heading text reveal animations
  TextReveal();

  // Initialize GSAP ScrollSmoother
  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetEl, offsetY: 0 },
          ease: "power2.inOut",
        });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <BreadCrumb
          breadCrumbTitle={"FAQ"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"FAQ"}
        />
        <section className="relative overflow-hidden py-28 bg-BodyBg-0">
          <div className="Container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
              <div className="relative">
                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                  IT Support For Business
                </h5>
                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
                  Ensuring Your Success Trusted <br />
                  IT Services Source
                </h1>
                <p className="font-Nunito text-TextColor2-0 pt-1 pb-10">
                  Business tailored it design, management & support services
                  needs to be business agency elit, sed do eiusmod tempor
                  proved.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-3 mb-10">
                  <div>
                    <Image alt="Faq Image" src={faqImg} draggable="false" />
                  </div>
                  <div>
                    <Image alt="Faq Image" src={faqImg2} draggable="false" />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div>
                    <Image src={faqIcon} draggable="false" alt="Faq Icon" />
                  </div>
                  <p className="font-Nunito text-TextColor2-0 flex-1">
                    Business tailored it design, management & support services
                    busines agency elit sed do eiusmod tempor proved business
                    task state of the art infrastructures for you.
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto">
                <div>
                  {faqs.map((faq, index) => (
                    <FaqAccordion
                      key={index}
                      faqIcon={faq.faqIcon2}
                      title={faq.title}
                      id={`faqs-${index}`}
                      active={faq.active}
                    >
                      {faq.text}
                    </FaqAccordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
        <Brand />
      </div>
    </div>
  );
};

export default Page;
