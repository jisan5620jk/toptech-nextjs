import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Video from "../../../Component1/Video/Video";
import ContactBox from "../ContactInner/ContactBox/ContactBox";
import Pricing from "./Pricing/Pricing";

const PricingInner = () => {
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

export default PricingInner;
