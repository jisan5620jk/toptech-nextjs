"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import About from "./About/About";
import TeamMember from "@/app/Component1/TeamMember/TeamMember";
import Counter from "@/app/Component1/Counter/Counter";
import Testimonial from "@/app/Component1/Testimonial/Testimonial";
import Brand from "../faq/Brand";

import Footer from "@/app/Shared/Footer/Footer";

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
          breadCrumbTitle={"About Us 01"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"About Us 01"}
        />
        <Feature />
        <About />
        <TeamMember />
        <Counter />
        <Testimonial />
        <Brand />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
