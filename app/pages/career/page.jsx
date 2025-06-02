"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Feature from "./Feature/Feature";
import Career from "./Career";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <BreadCrumb
          breadCrumbTitle={"Careers"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Careers"}
        />
        <Career />
        <Feature />
      </NoSSR>
    </>
  );
};

export default page;
