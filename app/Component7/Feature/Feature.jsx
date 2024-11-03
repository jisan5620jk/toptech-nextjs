/* eslint-disable no-unused-vars */
import FeatureCard from "./FeatureCard";
import { ImCheckmark } from "react-icons/im";

const processData = [
  {
    id: 1,
    featureIcon: <ImCheckmark />,
    featureTitle: "100% Visibility",
  },
  {
    id: 2,
    featureIcon: <ImCheckmark />,
    featureTitle: "Safe and Secure",
  },
  {
    id: 3,
    featureIcon: <ImCheckmark />,
    featureTitle: "Communications",
  },
  {
    id: 4,
    featureIcon: <ImCheckmark />,
    featureTitle: "Support Friendly",
  },
];

const Feature = () => {
  return (
    <section className="pt-[100px] relative z-10">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
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
