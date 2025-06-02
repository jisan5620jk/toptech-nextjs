"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import dynamic from "next/dynamic";

const TeamDetailsMain = dynamic(() => import("./TeamDetailsMain"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Details"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Details"}
      />
      <TeamDetailsMain />
    </>
  );
};

export default page;
