"use client"

import CountUp from 'react-countup';
import Link from 'next/link';

const PricingCard = ({
  currency,
  mainPrice,
  pricingDateLine,
  pricingTitle,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingContent5,
  pricingUrl,
  pricingBtn,
  offerPrice,
  pricingSubTitle,
}) => {
  return (
    <div className='bg-white relative z-10 border-2 border-white !w-full'>
      <div className='bg-[url(/images/pricing-head-bg.png)] bg-no-repeat bg-cover bg-center px-7 2xl:px-9'>
        <h4 className='font-Rajdhani font-bold text-[32px] text-HeadingColor-0 inline-block transition-all duration-500 mt-6'>
          {pricingTitle}
        </h4>
        <p className='font-Nunito text-TextColor2-0 pb-8'>{pricingSubTitle}</p>
      </div>
      <div className='font-Nunito flex items-baseline gap-3 px-7 2xl:px-9 mt-5'>
        <div className='flex items-center gap-1'>
          <h6 className='font-Rajdhani font-bold text-[55px] text-HeadingColor-0'>
            {currency}
          </h6>
          <CountUp
            start={-11}
            end={offerPrice}
            suffix=''
            className='text-[55px] font-bold font-Rajdhani text-HeadingColor-0'
          />
        </div>
        <div className='line-through text-PrimaryColor-0 flex'>
          <h6 className='font-Rajdhani font-semibold text-[22px] text-PrimaryColor-0 pr-1'>
            {mainPrice}
          </h6>
          <p className='font-Rajdhani font-semibold text-[22px] text-PrimaryColor-0'>
            {pricingDateLine}
          </p>
        </div>
      </div>
      <ul className='px-7 xl:px-9 mt-4'>
        <li className='flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5'>
          {pricingContent1}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5'>
          {pricingContent2}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5'>
          {pricingContent3}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5'>
          {pricingContent4}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5'>
          {pricingContent4}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-TextColor-0 line-through'>
          {pricingContent5}
        </li>
      </ul>
      <div className='pb-12 pt-3 px-7 xl:px-9'>
        <Link href={pricingUrl}>
          <button className='primary-btn2 !py-4 mt-9'>{pricingBtn}</button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
