"use client";

import About from "../Component1/About/About";
import Banner from "../Component1/Banner/Banner";
import Blog from "../Component1/Blog/Blog";
import Brand from "../Component1/Brand/Brand";
import Contact from "../Component1/Contact/Contact";
import Counter from "../Component1/Counter/Counter";
import Feature from "../Component1/Feature/Feature";
import Portfolio from "../Component1/Portfolio/Portfolio";
import Pricing from "../Component1/Pricing/Pricing";
import Process from "../Component1/Process/Process";
import Service from "../Component1/Service/Service";
import TeamMember from "../Component1/TeamMember/TeamMember";
import Testimonial from "../Component1/Testimonial/Testimonial";
import Video from "../Component1/Video/Video";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <Navbar />
        <Banner />
        <Feature />
        <About />
        <Service />
        <TeamMember />
        <Counter />
        <Portfolio />
        <Process />
        <Testimonial />
        <Video />
        <Contact />
        <Pricing />
        <Blog />
        <Brand />
        <Footer />
      </NoSSR>
    </>
  );
};

export default page;
