"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import TeamDetailsMain from "./TeamDetailsMain";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <BreadCrumb
          breadCrumbTitle={"Team Details"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Team Details"}
        />
        <TeamDetailsMain />
      </NoSSR>
    </>
  );
};

export default page;
