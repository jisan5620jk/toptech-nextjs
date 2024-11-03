/* eslint-disable react/prop-types */
const ProcessCard = ({
  processImg,
  boxNumber,
  processTitle,
  boxDot,
  processDesc,
}) => {
  return (
    <div className="text-center group relative bg-white pt-[50px] pb-20 rounded-3xl">
      <div className="inline-block m-auto relative z-10">
        <img
          src={processImg}
          draggable="false"
          className="transition-all duration-500 group-hover:rotate-[360deg]"
        />
      </div>
      <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-[26px] mt-6 mb-4">
        {processTitle}
      </h5>
      <p className="font-Nunito text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-PrimaryColor-0 text-4xl">
        {boxDot}
      </div>
      <h6 className="size-[50px] rounded-full bg-BodyBg-0 text-HeadingColor-0 transition-all duration-500 group-hover:bg-PrimaryColor-0 group-hover:text-white font-Rajdhani text-xl font-medium flex justify-center items-center absolute -bottom-[25px] left-1/2 -translate-x-1/2">
        {boxNumber}
      </h6>
    </div>
  );
};

export default ProcessCard;
