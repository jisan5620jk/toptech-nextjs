"use client"

import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image';

const PricingCard = ({
  pricingIcon,
  pricingDateLine,
  pricingTitle,
  pricingPrefix,
  pricingFreeDate,
  pricingFreeTitle,
  pricingCheck,
  pricingBtnIcon,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingUrl,
  pricingBtn,
  offerPrice,
}) => {
  return (
    <div className='shadow-cases bg-white px-5 sm:px-10 lg:px-5 xl:px-7 2xl:px-10 py-10 relative z-10 overflow-hidden group border border-BorderColor2-0 rounded-2xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#edf3ff] before:transition-all before:duration-500 before:-z-10 hover:before:top-0 hover:before:h-full'>
      <div>
        <Image
          src={pricingIcon}
          draggable='false'
          alt='Pricing Icon'
        />
      </div>
      <div className='absolute top-10 right-10 flex items-end gap-2'>
        <div className='flex items-start gap-1'>
          <h6 className='font-Rajdhani text-2xl font-semibold text-HeadingColor-0 -mt-1'>
            {pricingPrefix}
          </h6>
          <CountUp
            start={-11}
            end={offerPrice}
            suffix=''
            className='text-[50px] leading-10 font-semibold font-Rajdhani text-HeadingColor-0'
          />
        </div>
        <p className='font-Rajdhani text-2xl font-semibold text-HeadingColor-0'>
          {pricingDateLine}
        </p>
      </div>
      <h4 className='font-Rajdhani font-semibold text-[34px] text-HeadingColor-0 inline-block transition-all duration-500 mt-[18px]'>
        {pricingTitle}
      </h4>
      <div className='flex items-center gap-4 border-t mt-4 pt-5'>
        <h5 className='size-[50px] rounded-full border-PrimaryColor-0 border font-Rajdhani font-semibold text-PrimaryColor-0 text-xl flex items-center justify-center'>
          {pricingFreeDate}
        </h5>
        <h6 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
          {pricingFreeTitle}
        </h6>
      </div>
      <ul className='mt-6'>
        <li className='flex gap-2 items-center font-Nunito text-base sm:text-lg lg:text-base xl:text-lg text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0'>{pricingCheck}</span>
          {pricingContent1}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-base sm:text-lg lg:text-base xl:text-lg text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0'>{pricingCheck}</span>
          {pricingContent2}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-base sm:text-lg lg:text-base xl:text-lg text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0'>{pricingCheck}</span>
          {pricingContent3}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-base sm:text-lg lg:text-base xl:text-lg text-HeadingColor-0'>
          <span className='text-PrimaryColor-0'>{pricingCheck}</span>
          {pricingContent4}
        </li>
      </ul>
      <div className='pt-9'>
        <Link href={pricingUrl}>
          <button className='primary-btn5 !bg-BodyBg-0 !text-HeadingColor-0 hover:!text-white'>
            {pricingBtn}
            <span className='text-xl'>{pricingBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
