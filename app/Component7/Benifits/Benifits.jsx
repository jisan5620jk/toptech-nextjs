"use client"

import benifitsThumb from '../../../public/images/mobile-app-chart.png';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaCheck } from 'react-icons/fa6';
import Image from 'next/image';

const Benifits = () => {
  return (
    <section className='pb-[120px] relative'>
      <div className='Container relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center'>
          <div className='relative'>
            <h5 className='font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5'>
              Benifits
            </h5>
            <h1 className='font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-8'>
              People get benefits using
              <br /> our mobile Apps
            </h1>
            <Tabs>
              <TabList className='flex flex-col sm:flex-row gap-3 items-center mb-8'>
                <Tab className='cursor-pointer outline-none border font-Rajdhani font-semibold text-lg uppercase bg-BodyBg-0 px-7 py-[7px] rounded-full text-PrimaryColor-0 transition-all duration-500'>
                  Consumer
                </Tab>
                <Tab className='cursor-pointer outline-none font-Rajdhani font-semibold text-lg uppercase bg-white px-7 py-[7px] rounded-full border text-HeadingColor-0 transition-all duration-500 hover:bg-BodyBg-0 hover:text-PrimaryColor-0'>
                  Brand
                </Tab>
                <Tab className='cursor-pointer outline-none font-Rajdhani font-semibold text-lg uppercase bg-white px-7 py-[7px] rounded-full border text-HeadingColor-0 transition-all duration-500 hover:bg-BodyBg-0 hover:text-PrimaryColor-0'>
                  Advertise
                </Tab>
              </TabList>
              <TabPanel>
                <h3 className='font-Rajdhani font-semibold text-2xl'>
                  Download The Toptech Mobile Apps
                </h3>
                <p className='font-Nunito text-TextColor2-0 mt-3'>
                  Download network cutting-edge niche markets whereas
                  Assertively disseminate market. Conveniently provide access to
                  leading-edge imperatives whereas interfaces.
                </p>
              </TabPanel>
              <TabPanel>
                <h3 className='font-Rajdhani font-semibold text-2xl'>
                  Toptech is a World Best Brand
                </h3>
                <p className='font-Nunito text-TextColor2-0 mt-3'>
                  Toptech network cutting-edge niche markets whereas Assertively
                  disseminate market. Conveniently provide access to
                  leading-edge imperatives whereas interfaces.
                </p>
              </TabPanel>
              <TabPanel>
                <h3 className='font-Rajdhani font-semibold text-2xl'>
                  Advertise Your Business With Toptech
                </h3>
                <p className='font-Nunito text-TextColor2-0 mt-3'>
                  Advertise network cutting-edge niche markets whereas
                  Assertively disseminate market. Conveniently provide access to
                  leading-edge imperatives whereas interfaces.
                </p>
              </TabPanel>
            </Tabs>
            <div className='flex items-center gap-2 mt-7'>
              <div className='text-PrimaryColor-0'>
                <FaCheck size={'18'} />
              </div>
              <div className='flex-1'>
                <h5 className='font-Nunito font-medium text-HeadingColor-0 text-lg'>
                  {`Credibly leverage other's future`}
                </h5>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-2 mb-10'>
              <div className='text-PrimaryColor-0'>
                <FaCheck size={'18'} />
              </div>
              <div className='flex-1'>
                <h5 className='font-Nunito font-medium text-HeadingColor-0 text-lg'>
                  {`Monotonectally fashion world-class`}
                </h5>
              </div>
            </div>
            <Link href={'/about'}>
              <button className='primary-btn5 !bg-BodyBg-0 !text-HeadingColor-0 hover:!text-white'>
                {`Learn More`}
                <HiOutlineArrowRight size={'20'} />
              </button>
            </Link>
          </div>
          <div className='relative z-10'>
            <Image
              src={benifitsThumb}
              draggable='false'
              alt='Benifits Image'
              className='2xl:max-w-[inherit]'
            />
            <div className='hidden absolute bottom-14 -right-5 2xl:bottom-[5.5rem] 2xl:-right-[4.25rem] rotate-90 shadow-cases sm:flex gap-4 bg-PrimaryColor-0 border px-6 py-4 rounded-xl'>
              <div className='text-white'>
                <FaCheck size={'18'} />
              </div>
              <div>
                <p className='font-Nunito text-[15px] text-white'>
                  14 Days Free Trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
