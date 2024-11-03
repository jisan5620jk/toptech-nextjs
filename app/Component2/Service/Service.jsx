import serviceIcon from "../../../public/images/service-icon-1.png";
import serviceIcon2 from "../../../public/images/service-icon-2.png";
import serviceIcon3 from "../../../public/images/service-icon-3.png";
import serviceIcon4 from "../../../public/images/service-icon-4.png";
import serviceIcon5 from "../../../public/images/service-icon-5.png";
import serviceIcon6 from "../../../public/images/service-icon-6.png";
import ServiceCard from "./ServiceCard";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "3D Animation Design",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Web Development",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: "VFX And Video Editing",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: "Video Editing",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: "Google Top Ranking",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries main issue state infrastructure done",
  },
];

const Service = () => {
  return (
    <section className="relative pt-28 pb-[120px] bg-BodyBg-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            What we Provides?
          </h5>
          <h1 className="font-Rajdhani font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
            Provide Interective IT Solution <br />
            Business Services
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceTitle,
              serviceDesc,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
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
