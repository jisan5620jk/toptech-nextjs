"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import About from "../Component3/About/About";
import Banner from "../Component3/Banner/Banner";
import Blog from "../Component3/Blog/Blog";
import Faq from "../Component3/Faq/Faq";
import Feature from "../Component3/Feature/Feature";
import Portfolio from "../Component3/Portfolio/Portfolio";
import Process from "../Component3/Process/Process";
import Service from "../Component3/Service/Service";
import TeamMember from "../Component3/TeamMember/TeamMember";
import Testimonial from "../Component3/Testimonial/Testimonial";
import Footer3 from "../Shared/Footer/Footer3";
import Navbar3 from "../Shared/Navbar/Navbar3"

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
        <Navbar3 />
        <Banner />
        <Feature />
        <About />
        <Service />
        <Process />
        <Faq />
        <Portfolio />
        <TeamMember />
        <Testimonial />
        <Blog />
        <Footer3 />
        <BackToTop />
      </div>
    </div>
  );
};

export default Page;
