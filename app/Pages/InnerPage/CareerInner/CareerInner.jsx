import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import Career from "./Career";

const CareerInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Careers"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Careers"}
      />
      <Career />
      <Feature />
    </>
  );
};

export default CareerInner;