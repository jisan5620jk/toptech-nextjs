"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Video from "@/app/Component1/Video/Video";
import Pricing from "./Pricing/Pricing";
import ContactBox from "../contact/ContactBox/ContactBox";

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Pricing Plan"}
      />
      <Pricing />
      <Video />
      <ContactBox />
    </>
  );
};

export default page;
