"use client"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCard from "./PricingCard";
import pricingIcon from "../../../public/images/pricing-icon.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import pricingShape1 from "../../../public/images/pricing-shape.png";
import pricingShape2 from "../../../public/images/banner-shape.png";
import pricingShape from "../../../public/images/analytics-shape.png";
import Image from "next/image";

const pricingData = [
  {
    id: 1,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 120,
    pricingDateLine: "/ Per month",
    pricingTitle: "Basic Plan",
    pricingSubTitle: "Best Plan for Basic Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },  {
    id: 2,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 250,
    pricingDateLine: "/ Per month",
    pricingTitle: "Business Plan",
    pricingSubTitle: "Best Plan for Business Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },  {
    id: 3,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 389,
    pricingDateLine: "/ Per month",
    pricingTitle: "Premium Plan",
    pricingSubTitle: "Best Plan for Premium Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },
];

const pricingData2 = [
  {
    id: 1,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 720,
    pricingDateLine: "/ Per year",
    pricingTitle: "Basic Plan",
    pricingSubTitle: "Best Plan for Basic Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },  {
    id: 2,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 850,
    pricingDateLine: "/ Per year",
    pricingTitle: "Business Plan",
    pricingSubTitle: "Best Plan for Business Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },  {
    id: 3,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 989,
    pricingDateLine: "/ Per year",
    pricingTitle: "Premium Plan",
    pricingSubTitle: "Best Plan for Premium Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },
];

const Pricing = () => {
  return (
    <section className='py-28 relative z-10'>
      <Image
        src={pricingShape}
        draggable='false'
        alt='Pricing Shape'
        className='animate-wiggle absolute top-80 -right-32 2xl:right-20 hidden lg:block'
      />
      <div className='Container relative z-10'>
        <Image
          src={pricingShape1}
          draggable='false'
          alt='Pricing Shape'
          className='absolute top-20 -left-20 animate-rotational hidden lg:block'
        />
        <Image
          src={pricingShape2}
          draggable='false'
          alt='Pricing Shape'
          className='absolute top-40 -right-20 2xl:-right-10 animate-dance3 hidden lg:block'
        />
        <div className='text-center'>
          <h5 className='font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5'>
            Pricing Plan
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl sm:text-[34px] sm:leading-[42px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4'>
            Flexible Pricing Plans Designed To
            <br /> Fit Businesses of Sizes
          </h1>
          <p className='font-Nunito text-TextColor2-0'>
            Conveniently provide access to leading-edge imperatives whereas
            interfaces. <br className='hidden md:block' /> Uniquely network
            cutting-edge niche markets whereas
          </p>
        </div>
        <Tabs>
          <div className='flex justify-center'>
            <TabList className='flex items-center justify-center bg-BodyBg-0 mt-8 w-[270px] rounded-full overflow-hidden'>
              <Tab className='cursor-pointer outline-none font-Rajdhani font-semibold text-lg uppercase bg-PrimaryColor-0 px-10 py-[15px] text-white hover:text-HeadingColor-0 transition-all duration-500 hover:bg-transparent rounded-[40px] hover:rounded-none'>
                Monthly
              </Tab>
              <Tab className='cursor-pointer outline-none font-Rajdhani font-semibold text-lg uppercase bg-transparent px-10 py-[15px] text-HeadingColor-0 hover:text-white transition-all duration-500 hover:bg-PrimaryColor-0 hover:rounded-[40px]'>
                Yearly
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[60px]'>
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
                  pricingBtnIcon,
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
                        pricingBtnIcon={pricingBtnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[60px]'>
              {pricingData2.map(
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
                  pricingBtnIcon,
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
                        pricingBtnIcon={pricingBtnIcon}
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
