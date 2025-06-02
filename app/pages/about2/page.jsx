"use client";

import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import About from "./About";
import Contact from "@/app/Component2/Contact/Contact";
import Counter from "@/app/Component2/Counter/Counter";
import WhyChoose from "@/app/Component2/WhyChoose/WhyChoose";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <BreadCrumb
          breadCrumbTitle={"About Us 02"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"About Us 02"}
        />
        <About />
        <Contact />
        <Counter />
        <WhyChoose />
      </NoSSR>
    </>
  );
};

export default page;
