import {
  FaArrowRightLong,
} from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import TeamDetailsMain from "./TeamDetailsMain";


const TeamDetails = () => {
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

export default TeamDetails;


