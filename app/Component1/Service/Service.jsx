import serviceIcon from "../../../public/images/service-1.png";
import serviceIcon2 from "../../../public/images/service-2.png";
import serviceIcon3 from "../../../public/images/service-3.png";
import serviceIcon4 from "../../../public/images/service-4.png";
import serviceIcon5 from "../../../public/images/service-5.png";
import serviceIcon6 from "../../../public/images/service-6.png";
import ServiceCard from "./ServiceCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceNumber: "01",
    serviceTitle: "Graphic Design",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceNumber: "02",
    serviceTitle: "Cloud Solutions",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: "03",
    serviceTitle: "WP Development",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceNumber: "04",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceNumber: "05",
    serviceTitle: "3D Vector Illustration",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceNumber: "06",
    serviceTitle: "Hosting Services",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/pages/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
];

const Service = () => {
  return (
    <section className="relative pt-28 pb-[120px] bg-[url('/images/service-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            IT Support For Business
          </h5>
          <h1 className="font-Rajdhani font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceNumber,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceButton,
              serviceBtnIcon,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceNumber={serviceNumber}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceButton={serviceButton}
                      serviceBtnIcon={serviceBtnIcon}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
