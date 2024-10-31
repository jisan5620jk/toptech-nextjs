/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiQuote,
}) => {
  return (
    <div className="text-center relative group z-10 overflow-hidden">
      <div className="rounded overflow-hidden px-5 sm:px-8 lg:px-4 xl:px-8 pt-10 pb-[70px] bg-white relative z-10 before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0">
        <div className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]">
          <img src={testiQuote} draggable="false" className="m-auto"/>
        </div>
        <p className="font-Nunito text-lg text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-6">
          {testiDesc}
        </p>
        <ul className="flex gap-[6px] items-center justify-center mt-7">
          <li className="text-orange-400 text-xl">{testiRatingIcon}</li>
          <li className="text-orange-400 text-xl">{testiRatingIcon}</li>
          <li className="text-orange-400 text-xl">{testiRatingIcon}</li>
          <li className="text-orange-400 text-xl">{testiRatingIcon}</li>
          <li className="text-orange-400 text-xl">{testiRatingIcon}</li>
        </ul>
      </div>
      <div className="relative z-10 -mt-10">
        <img src={testiImg} draggable={false} className="m-auto" />
      </div>
      <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-[22px] mt-4">
        {testiName}
      </h5>
      <p className="font-Nunito text-TextColor2-0">{testiDesignation}</p>
    </div>
  );
};

export default TestimonialCard;
