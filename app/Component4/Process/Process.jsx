'use client';

import Link from 'next/link';
import processThumb from '../../../public/images/process-thumb.png';
import { PiStarFourFill } from 'react-icons/pi';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';

const Process = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className='bg-BodyBg-0 py-28'>
      <div className='Container'>
        <div className='grid lg:grid-cols-2 lg:items-center gap-10 xl:gap-20 2xl:gap-9'>
          <div className='relative'>
            <Image
              src={processThumb}
              draggable='false'
              alt='Porcess Image'
              className='w-full lg:w-[inherit]'
            />
            <div className='absolute top-1/2 right-[65px] sm:right-[155px] md:right-[230px] lg:right-[128px] xl:right-[154px] 2xl:right-[266px] -translate-y-1/2'>
              <button className='size-[100px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-xl relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[11px] before:left-[11px] before:size-[78px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational'>
                <span onClick={() => setToggler(!toggler)}>Play</span>
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                ]}
              />
            </div>
          </div>
          <div>
            <h5 className='font-Rajdhani text-lg font-medium text-PrimaryColor-0 flex items-center gap-2'>
              <PiStarFourFill size={'14'} />
              WORK PROCESSING
            </h5>
            <h1 className='font-Rajdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[42px] xl:leading-[52px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4'>
              Expert Consulting for Diverse
              <br /> Financial Services.
            </h1>
            <p className='font-Nunito text-TextColor2-0 text-lg pb-7'>
              Professionaly optimize interdependent intelectual services visuali
              design infoediaries main issue state icreative planing main best
              practices.
            </p>
            <p className='font-Nunito text-TextColor2-0 text-lg pb-6'>
              Our team of seasoned experts is here to you to unlock your provid
              business’s potential and achieve remar success.
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-7 mt-5'>
              <Link href={'/pages/about'}>
                <button className='primary-btn4'>{`Read More`}</button>
              </Link>
              <Link href={'/home4'}>
                <button className='font-Nunito font-medium text-TextColor2-0 flex items-center gap-2'>
                  {`CUSTOMER DETAILS`}
                  <HiOutlineArrowRight size={'20'} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
