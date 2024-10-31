/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceUrl,
}) => {
  return (
    <div className="px-10 lg:px-7 xl:px-10 pt-9 pb-[34px] rounded-lg bg-white group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="relative pt-[6px] z-10">
        <img
          src={serviceIcon}
          draggable="false"
        />
      </div>
      <Link to={serviceUrl}>
        <button className="font-Rajdhani font-semibold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
          {serviceTitle}
        </button>
      </Link>
      <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-2">
        {serviceDesc}
      </p>
    </div>
  );
};

export default ServiceCard;
