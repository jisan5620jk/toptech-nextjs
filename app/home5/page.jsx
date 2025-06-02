"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import Testimonial from "../Component4/Testimonial/Testimonial";
import About from "../Component5/About/About";
import Achivement from "../Component5/Achivement/Achivement";
import Analytics from "../Component5/Analytics/Analytics";
import Banner from "../Component5/Banner/Banner";
import Brand from "../Component5/Brand/Brand";
import Integration from "../Component5/Integration/Integration";
import Pricing from "../Component5/Pricing/Pricing";
import Service from "../Component5/Service/Service";
import Footer5 from "../Shared/Footer/Footer5";
import Navbar5 from "../Shared/Navbar/Navbar5";

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
        <Navbar5 />
        <Banner />
        <Brand />
        <About />
        <Analytics />
        <Achivement />
        <Service />
        <Pricing />
        <Integration />
        <Testimonial />
        <Footer5 />
        <BackToTop />
      </div>
    </div>
  );
};
export default Page;
