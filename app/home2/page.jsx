"use client";

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
import WhyChoose from "../Component2/WhyChoose/WhyChoose";
import Footer2 from "../Shared/Footer/Footer2";
import Navbar2 from "../Shared/Navbar/Navbar2";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
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
      </NoSSR>
    </>
  );
};

export default page;
