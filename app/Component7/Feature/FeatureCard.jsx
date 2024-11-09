const FeatureCard = ({ featureIcon, featureTitle }) => {
  return (
    <div className="overflow-hidden group px-6 lg:px-4 xl:px-5 2xl:px-7 py-6 rounded-2xl border bg-[#edf3ff] flex items-center gap-4 relative z-10">
      <div className="relative z-10">
        <h5 className="size-[54px] lg:size-10 xl:size-[54px] text-xl text-PrimaryColor-0 bg-[#d5e4fb] rounded-md border border-BorderColor2-0 flex justify-center items-center transition-all duration-500 group-hover:text-white group-hover:bg-PrimaryColor-0 group-hover:rounded-[50%]">
          {featureIcon}
        </h5>
      </div>
      <h4 className="font-Rajdhani font-semibold text-xl sm:text-[22px] lg:text-[17px] xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
        {featureTitle}
      </h4>
    </div>
  );
};

export default FeatureCard;
