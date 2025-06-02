"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import About from "../Component2/About/About";
import Appionment from "../Component2/Appionment/Appionment";
import Banner from "../Component2/Banner/Banner";
import Blog from "../Component2/Blog/Blog";
import Contact from "../Component2/Contact/Contact";
import Counter from "../Component2/Counter/Counter";
import Feature from "../Component2/Feature/Feature";
import Newsletter from "../Component2/Newsletter/Newsletter";
import Project from "../Component2/Project/Project";
import Service from "../Component2/Service/Service";
import Testimonial from "../Component2/Testimonial/Testimonial";
import Footer2 from "../Shared/Footer/Footer2";
import Navbar2 from "../Shared/Navbar/Navbar2";
import dynamic from "next/dynamic";

const WhyChoose = dynamic(() => import("../Component2/WhyChoose/WhyChoose"), {
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
        <Navbar2 />
        <Banner />
        <Feature />
        <About />
        <Service />
        <Contact />
        <Counter />
        <WhyChoose />
        <Project />
        <Testimonial />
        <Newsletter />
        <Blog />
        <Appionment />
        <Footer2 />
        <BackToTop />
      </div>
    </div>
  );
};

export default Page;
