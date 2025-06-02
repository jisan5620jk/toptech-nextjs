"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Video from "@/app/Component1/Video/Video";
import Pricing from "./Pricing/Pricing";
import ContactBox from "../contact/ContactBox/ContactBox";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <BreadCrumb
          breadCrumbTitle={"Affordable Price"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Pricing Plan"}
        />
        <Pricing />
        <Video />
        <ContactBox />
      </NoSSR>
    </>
  );
};

export default page;
