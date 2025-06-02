"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Newsletter from "./Newsletter/Newsletter";
import WhyChooseUs from "./WhyChooseUs";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Why Choose Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Why Choose Us"}
      />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
};

export default page;
