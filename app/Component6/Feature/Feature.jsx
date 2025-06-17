import featureIcon from "../../../public/images/feature6-icon1.png";
import featureIcon2 from "../../../public/images/feature6-icon2.png";
import featureIcon3 from "../../../public/images/feature6-icon3.png";
import featureIcon4 from "../../../public/images/feature6-icon4.png";
import featureStar from "../../../public/images/feature-star1.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "Innovative Thinking",
    featureDesc:
      "Nulla elefend lectus ipsum metus faucibus eros vitae metus toptech magna erat concept.",
    featureStar: featureStar,
    featureBtnLink: "/pages/service",
    featureBtnContent: "Read More",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: "Visual Interface",
    featureDesc:
      "Nulla elefend lectus ipsum metus faucibus eros vitae metus toptech magna erat concept.",
    featureStar: featureStar,
    featureBtnLink: "/pages/service",
    featureBtnContent: "Read More",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: "Team Brainstorming",
    featureDesc:
      "Nulla elefend lectus ipsum metus faucibus eros vitae metus toptech magna erat concept.",
    featureStar: featureStar,
    featureBtnLink: "/pages/service",
    featureBtnContent: "Read More",
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: "Content Strategy",
    featureDesc:
      "Nulla elefend lectus ipsum metus faucibus eros vitae metus toptech magna erat concept.",
    featureStar: featureStar,
    featureBtnLink: "/pages/service",
    featureBtnContent: "Read More",
  },
];

const Feature = () => {
  return (
    <section className="pt-24 relative z-10">
      <div className="Container">
        <div className="text-center">
          <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-4">
            Exploring Advanced App Features
          </h1>
          <p className="font-Nunito text-TextColor2-0 pb-1">
            Conviently optimize interdependent intellectual interoperable
            visuali design infoediaries <br className="hidden md:block" /> main
            issue state icreative planing main best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10 mt-14">
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureStar,
              featureBtnLink,
              featureBtnContent,
            }) => {
              return (
                <div key={id} className="feature-box">
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureStar={featureStar}
                    featureBtnLink={featureBtnLink}
                    featureBtnContent={featureBtnContent}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
