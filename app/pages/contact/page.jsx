"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import ContactBox from "./ContactBox/ContactBox";
import Map from "./Map";
import ContactForm from "./ContactForm";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR />
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Contact Us"}
      />
      <ContactBox />
      <ContactForm />
      <Map />
    </>
  );
};

export default page;
