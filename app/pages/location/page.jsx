"use client";

import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import HelpCenter from "./HelpCenter";
import Map from "../contact/Map";
import ContactBox from "../contact/ContactBox/ContactBox";

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Location"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Location"}
      />
      <HelpCenter />
      <Map />
      <ContactBox />
    </>
  );
};

export default page;
