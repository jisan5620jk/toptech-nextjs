/* eslint-disable react/prop-types */
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const PricingCard = ({
  pricingMark,
  pricingIcon,
  pricingDateLine,
  pricingTitle,
  pricingCheck,
  pricingBtnIcon,
  pricingFeature,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingUrl,
  pricingBtn,
  offerPrice,
  pricingSubTitle,
}) => {
  return (
    <div className='bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg px-5 sm:px-10 lg:px-5 xl:px-10 py-9 relative z-10 overflow-hidden group border border-BorderColor5-0 rounded-2xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#edf3ff] before:transition-all before:duration-500 before:-z-10 hover:before:top-0 hover:before:h-full'>
      <h6 className='px-[22px] py-1 rounded-full bg-white border absolute font-Nunito text-sm text-HeadingColor-0 top-8 -right-32 transition-all duration-500 group-hover:right-8'>
        {pricingMark}
      </h6>
      <div className='size-[72px] rounded-lg shadow-cases bg-white border border-BorderColor5-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100'>
        <img
          src={pricingIcon}
          draggable='false'
        />
      </div>
      <h4 className='font-Rajdhani font-semibold text-2xl text-HeadingColor-0 inline-block transition-all duration-500 mt-[18px]'>
        {pricingTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 pb-4 pt-1'>
        {pricingSubTitle}
      </p>
      <div className='font-Nunito flex items-baseline gap-3'>
        <div className='flex items-center gap-1'>
          <CountUp
            start={-11}
            end={offerPrice}
            prefix='$'
            suffix=''
            className='text-[40px] font-bold font-Rajdhani text-HeadingColor-0'
          />
        </div>
        <p className='text-TextColor2-0 font-Nunito'>{pricingDateLine}</p>
      </div>
      <div className='pb-7 pt-5'>
        <Link href={pricingUrl}>
          <button className='primary-btn5 !bg-transparent before:bg-PrimaryColor-0 !border-BorderColor5-0 !text-HeadingColor-0 group-hover:!text-white w-full text-center group-hover:before:left-0 group-hover:before:w-full'>
            {pricingBtn}
            {pricingBtnIcon}
          </button>
        </Link>
      </div>
      <h5 className='font-Rajdhani font-semibold text-2xl text-HeadingColor-0 border-t border-BorderColor5-0 pt-5'>
        {pricingFeature}
      </h5>
      <ul className='mt-4'>
        <li className='flex gap-2 items-center font-Nunito text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0 text-xl'>{pricingCheck}</span>
          {pricingContent1}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0 text-xl'>{pricingCheck}</span>
          {pricingContent2}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-HeadingColor-0 mb-3'>
          <span className='text-PrimaryColor-0 text-xl'>{pricingCheck}</span>
          {pricingContent3}
        </li>
        <li className='flex gap-2 items-center font-Nunito text-HeadingColor-0'>
          <span className='text-PrimaryColor-0 text-xl'>{pricingCheck}</span>
          {pricingContent4}
        </li>
      </ul>
    </div>
  );
};

export default PricingCard;
