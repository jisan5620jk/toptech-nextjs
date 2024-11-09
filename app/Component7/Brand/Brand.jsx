'use client';

import brandThumb from '../../../public/images/brand-logo.png';
import brandThumb2 from '../../../public/images/brand-logo2.png';
import brandThumb3 from '../../../public/images/brand-logo3.png';
import brandThumb4 from '../../../public/images/brand-logo4.png';
import brandThumb5 from '../../../public/images/brand-logo5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 26,
    speed: 500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className='mb-28'>
      <div className='Container'>
        <div className='flex items-center gap-5'>
          <h5 className='font-Rajdhani font-semibold text-lg text-HeadingColor-0 uppercase'>
            see our happy customers
          </h5>
          <p className='border-t w-full flex-1'></p>
        </div>
        <Swiper {...settings}>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb2}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb3}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb4}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb5}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pt-[54px] pb-[40px]'>
            <div className='flex justify-center items-center'>
              <Image
                src={brandThumb3}
                draggable='false'
                alt='Brand Logo'
                className='h-[inheirit] w-[Inherit}'
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='flex items-center gap-5'>
          <p className='border-t w-full flex-1'></p>
          <h5 className='font-Rajdhani font-semibold text-lg text-HeadingColor-0 uppercase'>
            About <span className='text-PrimaryColor-0'>10k+</span> customers
            worldwide
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Brand;
