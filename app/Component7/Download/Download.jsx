import playStore from '/images/mobil-app-banner-button-shape2.png';
import appStore from '/images/app-store.png';
import downloadThumb from '/images/mobile-app-app-img.png';
import shape1 from '/images/mobile-app-app-notice.png';
import shape2 from '/images/mobile-app-app-mail.png';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';

const Download = () => {
  return (
    <section className='pt-[60px] pb-[60px] lg:pb-0 bg-[url(/images/mobile-app-app-bg.png)] bg-no-repeat bg-center bg-cover'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-end'>
          <div className='lg:pb-[160px]'>
            <h1 className='font-Rajdhani font-bold text-3xl sm:text-5xl md:text-[60px] text-HeadingColor-0'>
              Download Apps
            </h1>
            <h2 className='font-Rajdhani font-semibold text-[26px] leading-[32px] sm:text-[42px] lg:text-[40px] lg:leading-10 xl:text-[42px] text-HeadingColor-0 mt-2'>
              Easy super fast applications
            </h2>
            <div className='flex items-center gap-2 mt-5'>
              <div className='text-PrimaryColor-0'>
                <FaCheck size={'18'} />
              </div>
              <div className='flex-1'>
                <h5 className='font-Nunito font-medium text-HeadingColor-0 text-base sm:text-lg'>
                  {`Credibly leverage other's future`}
                </h5>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-2 mb-9'>
              <div className='text-PrimaryColor-0'>
                <FaCheck size={'18'} />
              </div>
              <div className='flex-1'>
                <h5 className='font-Nunito font-medium text-HeadingColor-0 text-base sm:text-lg'>
                  {`Monotonectally fashion world-class`}
                </h5>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-6'>
              <Link href={'/'}>
                <img
                  src={playStore}
                  draggable='false'
                />
              </Link>
              <Link href={'/'}>
                <img
                  src={appStore}
                  draggable='false'
                />
              </Link>
            </div>
          </div>
          <div className='relative hidden lg:block'>
            <img
              src={downloadThumb}
              draggable='false'
              className='max-w-[inherit]'
            />
            <img
              src={shape1}
              draggable='false'
              className='absolute bottom-20 left-0 animate-swing'
            />
            <img
              src={shape2}
              draggable='false'
              className='absolute top-20 -right-20 animate-wiggle'
            />
            <div className='absolute top-[18rem] -right-28 lg:hidden xl:flex items-center gap-3 px-7 py-5 rounded-2xl bg-white bg-opacity-45 backdrop-filter backdrop-blur-lg border-2 border-white animate-dance3'>
              <div>
                <h6 className='size-[60px] rounded-full bg-PrimaryColor-0 flex items-center justify-center text-white font-Rajdhani font-semibold text-2xl'>
                  6k
                </h6>
              </div>
              <div>
                <h5 className='font-Nunito font-semibold text-lg text-HeadingColor-0'>
                  All Downloads
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
