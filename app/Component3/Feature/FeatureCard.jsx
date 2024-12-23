import Image from 'next/image';
import Link from 'next/link';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureBtnLink,
  featureBtnContent,
  featureBtnIcon,
}) => {
  return (
    <div className='border border-BorderColor2-0 transition-all duration-500 hover:border-PrimaryColor-0 overflow-hidden group px-6 lg:px-4 xl:px-6 pt-8 pb-7 rounded-md bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0'>
      <div className='relativ z-10'>
        <Image
          src={featureIcon}
          draggable='false'
          alt='Feature Icon'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
        />
      </div>
      <h4 className='font-Rajdhani font-bold text-2xl sm:text-[22px] lg:text-xl xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-6 mb-2'>
        {featureTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-6'>
        {featureDesc}
      </p>
      <Link href={featureBtnLink}>
        <button className='flex items-center gap-2 text-HeadingColor-0 font-Rajdhani text-lg font-semibold transition-all duration-500 group-hover:text-white'>
          {featureBtnContent}
          <span className='text-xs'>{featureBtnIcon}</span>
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
