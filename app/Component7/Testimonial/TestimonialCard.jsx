/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiIcon,
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="relative group text-center rounded-md z-10 pt-7">
      <div className="bg-white text-center bg-opacity-10 border border-BorderColor4-0 transition-all duration-500 px-4 sm:px-10 lg:px-5 xl:px-9 pt-10 pb-8 rounded-lg relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[22px] before:size-[40px] before:bg-white before:border-r before:border-b before:rotate-180 before:border-BorderColor5-0 before:rounded-lg before:bg-opacity-10 before:[clip-path:polygon(50%_0%,_0_55%,_100%_55%)]">
        <div className="text-[44px] text-white flex items-center justify-center">
          {testiIcon}
        </div>
        <p className="font-Nunito text-xl text-white pt-5">{testiDesc}</p>
        <ul className="flex items-center justify-center gap-[6px] mt-6">
          <li className="text-[#ffb50a] text-lg">{testiRatingIcon}</li>
          <li className="text-[#ffb50a] text-lg">{testiRatingIcon}</li>
          <li className="text-[#ffb50a] text-lg">{testiRatingIcon}</li>
          <li className="text-[#ffb50a] text-lg">{testiRatingIcon}</li>
          <li className="text-[#ffb50a] text-lg">{testiRatingIcon}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 md:gap-4 xl:gap-5 mt-10">
        <div>
          <img src={testiImg} draggable="false" className="m-auto" />
        </div>
        <div className="flex-1">
          <h5 className="font-Nunito font-semibold text-white text-[22px]">
            {testiName}
          </h5>
          <p className="font-Nunito text-TextColor-0 pt-1">{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
