import Link from 'next/link';
import bannerImg from '../../../public/images/mobile-app-banner-img.png';
import profileImg from '../../../public/images/mobil-app-banner-img.png';
import profileImg2 from '../../../public/images/mobil-app-banner-img3.png';
import profileImg3 from '../../../public/images/mobil-app-banner-shape3.png';
import icon from '../../../public/images/mobil-app-banner-title-shape1.png';
import playStore from '../../../public/images/mobil-app-banner-button-shape2.png';
import appStore from '../../../public/images/app-store.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="bg-[url('/images/mobile-app-banner-bg.jpg')] bg-cover bg-center bg-no-repeat h-[1100px] sm:h-[1300px] md:h-[1500px] lg:h-[760px] xl:h-[900px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center lg:gap-0'>
          <div className='relative'>
            <h5 className='font-Nunito text-HeadingColor-0 text-lg font-semibold flex items-center gap-5 mb-7'>
             <Image
                src={icon}
                draggable='false'
                alt='Banner Icon'
              />{' '}
              Think Best <br /> Be Happy
            </h5>
            <h1 className='font-Rajdhani font-extrabold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[66px] xl:leading-[68px] 2xl:text-[76px] 2xl:leading-[78px]'>
              Download Our Apps
              <br />
              Easy and Faster
            </h1>
            <p className='font-Nunito sm:text-xl text-HeadingColor-0 mb-9 mt-5'>
              Continually formulate B2C partnerships orthogonal apps{' '}
              <br className='hidden 2xl:block' />
              maintainable quality through low
            </p>
            <div className='flex flex-col sm:flex-row gap-6'>
              <Link href={'/'}>
               <Image
                  src={playStore}
                  draggable='false'
                  alt='Banner Icon'
                />
              </Link>
              <Link href={'/'}>
               <Image
                  src={appStore}
                  draggable='false'
                  alt='Banner Icon'
                />
              </Link>
            </div>
          </div>
          <div className='sm:flex justify-center lg:justify-end relative'>
           <Image
              src={bannerImg}
              draggable='false'
              alt='Banner Image'
              className='top-[150px] relative lg:top-32 2xl:top-16'
            />
            <div className='absolute top-[30rem] 2xl:top-[28rem] -left-4 sm:flex xl:flex items-center gap-3 pl-3 pr-9 py-3 rounded-l-full rounded-tr-full rounded-br bg-white bg-opacity-55 backdrop-filter backdrop-blur-lg border-2 border-white animate-wiggle hidden lg:hidden'>
              <div>
               <Image
                  src={profileImg}
                  draggable={false}
                  alt='Banner Image'
                />
              </div>
              <div>
                <h5 className='font-Nunito font-semibold text-lg text-HeadingColor-0'>
                  Do you have SEO Tools?
                </h5>
              </div>
            </div>
            <div className='absolute bottom-5 -right-20 md:right-0 lg:right-10 2xl:-right-10 2xl:bottom-[4.5rem] sm:flex xl:flex items-center gap-3 pl-3 pr-9 py-3 rounded-r-full rounded-bl-full rounded-tl bg-white bg-opacity-55 backdrop-filter backdrop-blur-lg border-2 border-white animate-movebtn hidden lg:hidden'>
              <div>
               <Image
                  src={profileImg2}
                  draggable={false}
                  alt='Banner Image'
                />
              </div>
              <div>
                <h5 className='font-Nunito font-semibold text-lg text-HeadingColor-0'>
                  Yeah! I have 10+ Tools.
                </h5>
              </div>
            </div>
            <div className='absolute top-[15rem] -right-[9rem] 2xl:top-[14rem] 2xl:-right-[10rem] 2xl:flex flex-col items-center gap-3 px-11 py-8 rounded-2xl bg-white bg-opacity-55 backdrop-filter backdrop-blur-lg border-2 border-white animate-dance3 hidden'>
              <div>
               <Image
                  src={profileImg3}
                  draggable={false}
                  alt='Profile Image'
                />
              </div>
              <div>
                <h5 className='font-Nunito font-semibold text-lg text-HeadingColor-0'>
                  60000+ Happy Users
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
