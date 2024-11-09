'use client';

import appScreenThumb from '../../../public/images/mobile-app-img-1.png';
import appScreenThumb2 from '../../../public/images/mobile-app-img-2.png';
import appScreenThumb3 from '../../../public/images/mobile-app-img-3.png';
import appScreenThumb4 from '../../../public/images/mobile-app-img-4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const AppScreen = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
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
      1400: {
        slidesPerView: 4,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='py-[120px] relative bg-BodyBg-0 app-screen'>
      <div className='Container relative'>
        <div className='text-center'>
          <h5 className='font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5'>
            App Screen
          </h5>
          <h1 className='font-Rajdhani font-bold text-[21px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4'>
            Amazing design style and simple
            <br /> layout for comfort any user
          </h1>
        </div>
      </div>
      <div className='px-[4%] pt-10'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          <SwiperSlide className='pb-[100px]'>
            <div>
              <Image
                alt='App Screen Image'
                src={appScreenThumb}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pb-[100px]'>
            <div>
              <Image
                alt='App Screen Image'
                src={appScreenThumb2}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pb-[100px]'>
            <div>
              <Image
                alt='App Screen Image'
                src={appScreenThumb3}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pb-[100px]'>
            <div>
              <Image
                alt='App Screen Image'
                src={appScreenThumb4}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='pb-[100px]'>
            <div>
              <Image
                alt='App Screen Image'
                src={appScreenThumb3}
                draggable='false'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AppScreen;
