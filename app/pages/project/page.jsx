import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Project from "@/app/Component2/Project/Project";
import Testimonial from "@/app/Component2/Testimonial/Testimonial";

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Projects"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Proejcts"}
      />
      <Project />
      <Testimonial />
    </>
  );
};

export default page;
