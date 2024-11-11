"use client"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    currency: "$",
    offerPrice: 29,
    mainPrice: "$39",
    pricingDateLine: "/Monthly",
    pricingTitle: "Basic Plans",
    pricingSubTitle: "Small Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
  {
    id: 2,
    currency: "$",
    offerPrice: 59,
    mainPrice: "$69",
    pricingDateLine: "/Monthly",
    pricingTitle: "Standard Plans",
    pricingSubTitle: "Medium Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
  {
    id: 3,
    currency: "$",
    offerPrice: 89,
    mainPrice: "$99",
    pricingDateLine: "/Monthly",
    pricingTitle: "Premium Plans",
    pricingSubTitle: "Large Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
];

const pricingData2 = [
  {
    id: 1,
    currency: "$",
    offerPrice: 129,
    mainPrice: "$139",
    pricingDateLine: "/Yearly",
    pricingTitle: "Basic Plans",
    pricingSubTitle: "Small Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
  {
    id: 2,
    currency: "$",
    offerPrice: 159,
    mainPrice: "$169",
    pricingDateLine: "/Yearly",
    pricingTitle: "Standard Plans",
    pricingSubTitle: "Medium Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
  {
    id: 3,
    currency: "$",
    offerPrice: 189,
    mainPrice: "$199",
    pricingDateLine: "/Yearly",
    pricingTitle: "Premium Plans",
    pricingSubTitle: "Large Team",
    pricingContent1: "Email & Communication Services",
    pricingContent2: "Implementing measures encryption.",
    pricingContent3: "Standard Security Measuresimg",
    pricingContent4: "Network and security management",
    pricingContent5: "Helps understand past performance.",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Get Started",
  },
];

const Pricing = () => {
  return (
    <section className="py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[28px] lg:leading-[38px] xl:text-[37px] xl:leading-[47px] 2xl:text-[37px] 2xl:leading-[47px] text-HeadingColor-0">
              Choose Your Best Plan
            </h1>
            <p className="font-Nunito text-TextColor2-0 mt-3">
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services can
              range from your services.
            </p>
          </div>
          <div></div>
        </div>
        <Tabs>
          <div className="flex lg:items-end lg:justify-end">
            <TabList className="flex items-center justify-end mt-8 lg:-mt-20 gap-x-2 w-[282px] sm:w-[361px] border border-BorderColor2-0 p-[6px] rounded-md overflow-hidden">
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
                  currency,
                  offerPrice,
                  mainPrice,
                  pricingDateLine,
                  pricingTitle,
                  pricingSubTitle,
                  pricingContent1,
                  pricingContent2,
                  pricingContent3,
                  pricingContent4,
                  pricingContent5,
                  pricingUrl,
                  pricingBtn,
                }) => {
                  return (
                    <div key={id}>
                      <PricingCard
                        currency={currency}
                        offerPrice={offerPrice}
                        mainPrice={mainPrice}
                        pricingDateLine={pricingDateLine}
                        pricingTitle={pricingTitle}
                        pricingSubTitle={pricingSubTitle}
                        pricingContent1={pricingContent1}
                        pricingContent2={pricingContent2}
                        pricingContent3={pricingContent3}
                        pricingContent4={pricingContent4}
                        pricingContent5={pricingContent5}
                        pricingUrl={pricingUrl}
                        pricingBtn={pricingBtn}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[56px]">
              {pricingData2.map(
                ({
                  id,
                  currency,
                  offerPrice,
                  mainPrice,
                  pricingDateLine,
                  pricingTitle,
                  pricingSubTitle,
                  pricingContent1,
                  pricingContent2,
                  pricingContent3,
                  pricingContent4,
                  pricingContent5,
                  pricingUrl,
                  pricingBtn,
                }) => {
                  return (
                    <div key={id}>
                      <PricingCard
                        currency={currency}
                        offerPrice={offerPrice}
                        mainPrice={mainPrice}
                        pricingDateLine={pricingDateLine}
                        pricingTitle={pricingTitle}
                        pricingSubTitle={pricingSubTitle}
                        pricingContent1={pricingContent1}
                        pricingContent2={pricingContent2}
                        pricingContent3={pricingContent3}
                        pricingContent4={pricingContent4}
                        pricingContent5={pricingContent5}
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
