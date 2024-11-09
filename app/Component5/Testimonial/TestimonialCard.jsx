import Image from "next/image";

const TestimonialCard = ({
  testiIcon,
  testiTitle,
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="relative group rounded-md z-10 pt-7">
      <div className="bg-white border border-BorderColor2-0 transition-all duration-500 group-hover:bg-BodyBg-0 px-4 sm:px-10 lg:px-5 xl:px-9 pt-12 pb-8 rounded-lg relative before:absolute before:left-5 before:-bottom-[13px] before:size-[26px] before:bg-white before:border-r before:border-b before:rotate-45 before:border-BorderColor2-0 before:rounded-md before:transition-all before:duration-500 group-hover:before:bg-BodyBg-0 group-hover:border-transparent group-hover:before:border-transparent">
        <div className="absolute -top-[28px] left-9 bg-white size-[56px] rounded-full border border-BorderColor2-0 flex items-center justify-center text-3xl text-PrimaryColor-0 transition-all duration-500 group-hover:bg-BodyBg-0 group-hover:border-PrimaryColor-0">
          {testiIcon}
        </div>
        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl">
          {testiTitle}
        </h5>
        <p className="font-Nunito text-TextColor2-0 pt-3">{testiDesc}</p>
        <ul className="flex items-center gap-[6px] mt-6">
          <li className="text-[#ffb50a]">{testiRatingIcon}</li>
          <li className="text-[#ffb50a]">{testiRatingIcon}</li>
          <li className="text-[#ffb50a]">{testiRatingIcon}</li>
          <li className="text-[#ffb50a]">{testiRatingIcon}</li>
          <li className="text-[#ffb50a]">{testiRatingIcon}</li>
        </ul>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-5 md:gap-4 xl:gap-5 mt-9">
        <div>
          <Image alt="Testimonial Image" src={testiImg} draggable="false" />
        </div>
        <div className="flex-1">
          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-[22px]">
            {testiName}
          </h5>
          <p className="font-Nunito text-TextColor2-0">{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
