"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Project from "@/app/Component2/Project/Project";
import Testimonial from "@/app/Component2/Testimonial/Testimonial";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <BreadCrumb
          breadCrumbTitle={"Our Projects"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Our Proejcts"}
        />
        <Project />
        <Testimonial />
      </NoSSR>
    </>
  );
};

export default page;
