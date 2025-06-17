"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import Banner from "../Component6/Banner/Banner";
import Experience from "../Component6/Experience/Experience";
import Perform from "../Component6/Perform/Perform";
import Service from "../Component6/Service/Service";
import Footer6 from "../Shared/Footer/Footer6";
import Navbar6 from "../Shared/Navbar/Navbar6";

const WhyChoose = dynamic(() => import("../Component6/WhyChoose/WhyChoose"), {
  ssr: false,
});

import TextReveal from "../Shared/TextAnim/TextReveal";
import ContentReveal from "../Shared/ContentReveal/ContentReveal";
import ImageReveal from "../Shared/ImageReveal/ImageReveal";
import BackToTop from "../Shared/BackToTop/BackToTop";

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
        <Navbar6 />
        <Banner />
        <WhyChoose />
        <Service />
        <Experience />
        <Perform />
        <Footer6 />
        <BackToTop />
      </div>
    </div>
  );
};
export default Page;
