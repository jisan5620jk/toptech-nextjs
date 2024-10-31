import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCard from "./PricingCard";
import pricingIcon from "/images/pricing-icon.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const pricingData = [
  {
    id: 1,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 29,
    pricingDateLine: "/ Per month",
    pricingTitle: "Basic Plans",
    pricingSubTitle: "Small Team",
    pricingCheck:<IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
  },
];

const Pricing = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
            Achivements
          </h5>
          <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
            Explore the Powerful Features
            <br /> Our Software Stand Out
          </h1>
          <p className="font-Nunito text-TextColor2-0">
            Conveniently provide access to leading-edge imperatives whereas
            interfaces. <br /> Uniquely network cutting-edge niche markets
            whereas
          </p>
        </div>
        <Tabs>
          <div className="flex justify-center">
            <TabList className="flex items-center justify-end mt-8 gap-x-2 w-[282px] sm:w-[361px] border border-BorderColor2-0 p-[6px] rounded-md overflow-hidden">
              <Tab className="cursor-pointer outline-none bg-SecondaryColor-0 px-4 sm:px-9 py-[14px] rounded-md font-Nunito text-white transition-all duration-500 hover:bg-PrimaryColor-0">
                Billed Monthly
              </Tab>
              <Tab className="cursor-pointer outline-none bg-PrimaryColor-0 px-4 sm:px-9 py-[14px] rounded-md font-Nunito text-white transition-all duration-500 hover:bg-SecondaryColor-0">
                Billed Yearly
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[56px]">
              {pricingData.map(
                ({
                  id,
                  pricingMark,
                  pricingIcon,
                  pricingFeature,
                  offerPrice,
                  pricingDateLine,
                  pricingTitle,
                  pricingSubTitle,
                  pricingCheck,
                  pricingContent1,
                  pricingContent2,
                  pricingContent3,
                  pricingContent4,
                  pricingUrl,
                  pricingBtn,
                }) => {
                  return (
                    <div key={id}>
                      <PricingCard
                        pricingIcon={pricingIcon}
                        pricingFeature={pricingFeature}
                        pricingMark={pricingMark}
                        offerPrice={offerPrice}
                        pricingDateLine={pricingDateLine}
                        pricingTitle={pricingTitle}
                        pricingCheck={pricingCheck}
                        pricingSubTitle={pricingSubTitle}
                        pricingContent1={pricingContent1}
                        pricingContent2={pricingContent2}
                        pricingContent3={pricingContent3}
                        pricingContent4={pricingContent4}
                        pricingUrl={pricingUrl}
                        pricingBtn={pricingBtn}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
