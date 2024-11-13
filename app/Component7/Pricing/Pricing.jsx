'use client';

import PricingCard from './PricingCard';
import pricingIcon from '../../../public/images/mobile-app-price-icon.png';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import CountUp from 'react-countup';
import { GiCheckMark } from 'react-icons/gi';

const pricingData = [
  {
    id: 1,
    pricingIcon: pricingIcon,
    offerPrice: 59,
    pricingDateLine: '/ M',
    pricingPrefix: '$',
    pricingFreeDate: '30',
    pricingFreeTitle: 'Days Free Trail',
    pricingTitle: 'Basic Plan',
    pricingCheck: <GiCheckMark />,
    pricingContent1: 'Easy to Downloads',
    pricingContent2: 'Simple signup system',
    pricingContent3: 'Customizations all information',
    pricingContent4: 'Support Any Mobile Apps',
    pricingUrl: '/pages/pricing_inner',
    pricingBtn: 'LEARN MORE',
    pricingBtnIcon: <HiOutlineArrowRight />,
  },
  {
    id: 2,
    pricingIcon: pricingIcon,
    offerPrice: 99,
    pricingDateLine: '/ M',
    pricingPrefix: '$',
    pricingFreeDate: '30',
    pricingFreeTitle: 'Days Free Trail',
    pricingTitle: 'Premium Plan',
    pricingCheck: <GiCheckMark />,
    pricingContent1: 'Easy to Downloads',
    pricingContent2: 'Simple signup system',
    pricingContent3: 'Customizations all information',
    pricingContent4: 'Support Any Mobile Apps',
    pricingUrl: '/pages/pricing_inner',
    pricingBtn: 'LEARN MORE',
    pricingBtnIcon: <HiOutlineArrowRight />,
  },
];

const Pricing = () => {
  return (
    <section className='pb-28 bg-BodyBg-0 relative z-10'>
      <div className='Container relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 lg:gap-x-7'>
          <div>
            <h5 className='font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5'>
              Pricing Plan
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl sm:text-[34px] sm:leading-[42px] md:text-[39px] md:leading-[47px] lg:text-[32px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-6'>
              Quickly interoperable
              <br />
              Colaborating Cheaf
              <br />
              Pricing Plans
            </h1>
            <div className='relative flex items-center gap-2 sm:gap-5 lg:gap-3 xl:gap-5 border-t border-BorderColor2-0 pt-8 mb-11'>
              <div className='border-r border-BorderColor2-0 pr-2 sm:pr-5 lg:pr-3 xl:pr-5'>
                <CountUp
                  start={-11}
                  end={98}
                  suffix={'%'}
                  className='font-Rajdhani text-3xl sm:text-5xl leading-[26px] md:text-[60px] md:leading-10 lg:text-4xl lg:leading-8 text-PrimaryColor-0 font-semibold'
                />
              </div>
              <div>
                <p className='font-FiraSans text-TextColor2-0'>
                  Conveniently provide access <br /> interfaces network
                </p>
              </div>
            </div>
            <Link href={'/pages/contact'}>
              <button className='primary-btn5 !bg-BodyBg-0 !text-HeadingColor-0 hover:!text-white'>
                {`Contact Us`}
                <HiOutlineArrowRight size={'20'} />
              </button>
            </Link>
          </div>
          <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-7'>
            {pricingData.map(
              ({
                id,
                pricingIcon,
                offerPrice,
                pricingDateLine,
                pricingTitle,
                pricingPrefix,
                pricingFreeDate,
                pricingFreeTitle,
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
                      pricingPrefix={pricingPrefix}
                      pricingFreeDate={pricingFreeDate}
                      pricingFreeTitle={pricingFreeTitle}
                      offerPrice={offerPrice}
                      pricingDateLine={pricingDateLine}
                      pricingTitle={pricingTitle}
                      pricingCheck={pricingCheck}
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;
