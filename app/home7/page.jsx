"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import Banner from "../Component7/Banner/Banner";
import Feature from "../Component7/Feature/Feature";
import Collaboration from "../Component7/Collaboration/Collaboration";
import Benifits from "../Component7/Benifits/Benifits";
import Brand from "../Component7/Brand/Brand";
import Process from "../Component7/Process/Process";
import ContentSlider from "../Component7/ContentSlider/ContentSlider";
import AppScreen from "../Component7/AppScreen/AppScreen";
import Pricing from "../Component7/Pricing/Pricing";
import Testimonial from "../Component7/Testimonial/Testimonial";
import TeamMember from "../Component7/TeamMember/TeamMember";
import Faqs from "../Component7/Faqs/Faqs";
import Download from "../Component7/Download/Download";
import Blog from "../Component7/Blog/Blog";
import Support from "../Component7/Support/Support";

import Navbar7 from "../Shared/Navbar/Navbar7";
import Footer7 from "../Shared/Footer/Footer7";
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
        <Navbar7 />
        <Banner />
        <Feature />
        <Collaboration />
        <Benifits />
        <Brand />
        <Process />
        <ContentSlider />
        <AppScreen />
        <Pricing />
        <Testimonial />
        <TeamMember />
        <Faqs />
        <Download />
        <Blog />
        <Support />
        <Footer7 />
        <BackToTop />
      </div>
    </div>
  );
};
export default Page;
