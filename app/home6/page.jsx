"use client";

import Banner from "../Component6/Banner/Banner";
import Experience from "../Component6/Experience/Experience";
import Perform from "../Component6/Perform/Perform";
import Service from "../Component6/Service/Service";
import WhyChoose from "../Component6/WhyChoose/WhyChoose";
import Footer6 from "../Shared/Footer/Footer6";
import Navbar6 from "../Shared/Navbar/Navbar6";

const page = () => {
  return (
    <>
      <Navbar6 />
      <Banner />
      <WhyChoose />
      <Service />
      <Experience />
      <Perform />
      <Footer6 />
    </>
  );
};
export default page;
