"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import TeamDetailsMain from "./TeamDetailsMain";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

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
