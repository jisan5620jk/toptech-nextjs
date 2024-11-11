import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import About from "./About/About";
import TeamMember from "@/app/Component1/TeamMember/TeamMember";
import Counter from "@/app/Component1/Counter/Counter";
import Testimonial from "@/app/Component1/Testimonial/Testimonial";
import Brand from "../faq/Brand";

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us 01"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us 01"}
      />
      <Feature />
      <About />
      <TeamMember />
      <Counter />
      <Testimonial />
      <Brand />
    </>
  );
};

export default page;
