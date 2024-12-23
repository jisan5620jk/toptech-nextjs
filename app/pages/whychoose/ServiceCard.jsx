import Image from "next/image";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
}) => {
  return (
    <div className="relative z-10 text-center">
      <div>
        <Image alt="Service Icon" src={serviceIcon} draggable="false" className="m-auto" />
      </div>
      <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
        {serviceTitle}
      </h5>
      <p className="font-Nunito text-TextColor2-0 pt-4">{serviceDesc}</p>
    </div>
  );
};

export default ServiceCard;
