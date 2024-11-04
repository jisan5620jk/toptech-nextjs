/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureStar,
  featureBtnLink,
  featureBtnContent,
}) => {
  return (
    <div className='overflow-hidden group px-6 lg:px-4 xl:px-7 pt-10 pb-9 rounded-md bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0'>
      <div className='relativ z-10'>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
        />
      </div>
      <h4 className='font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-7 mb-[14px]'>
        {featureTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-5'>
        {featureDesc}
      </p>
      <div className='flex items-center justify-between'>
        <div>
          <img
            src={featureStar}
            draggable='false'
            className='animate-spin transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
          />
        </div>
        <Link href={featureBtnLink}>
          <button className='flex items-center border-b border-PrimaryColor-0 gap-2 text-PrimaryColor-0 font-Nunito font-semibold transition-all duration-500 group-hover:text-white group-hover:border-white'>
            {featureBtnContent}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
