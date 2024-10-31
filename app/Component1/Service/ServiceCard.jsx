/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceNumber,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceButton,
  serviceBtnIcon,
}) => {
  return (
    <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
        <img
          src={serviceIcon}
          draggable="false"
          className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <div className="absolute top-8 right-0">
        <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end text-PrimaryColor-0 bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
          {serviceNumber}
        </h5>
      </div>
      <Link to={serviceUrl}>
        <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
          {serviceTitle}
        </button>
      </Link>
      <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
        {serviceDesc}
      </p>
      <Link to={serviceUrl}>
        <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
          <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
            {serviceButton}
          </span>
          <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
            {serviceBtnIcon}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
