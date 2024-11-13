'use client';

import { FaPlus } from 'react-icons/fa6';
import portfolioThumb from '../../../public/images/portfolio-1.png';
import portfolioThumb2 from '../../../public/images/portfolio-2.png';
import portfolioThumb3 from '../../../public/images/portfolio-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PortfolioCard from './PortfolioCard';

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioIcon: '01',
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/pages/project_details',
    portfolioBtn: <FaPlus />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioIcon: '02',
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/pages/project_details',
    portfolioBtn: <FaPlus />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioIcon: '03',
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/pages/project_details',
    portfolioBtn: <FaPlus />,
  },
  {
    id: 4,
    portfolioThumb: portfolioThumb,
    portfolioIcon: '04',
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/pages/project_details',
    portfolioBtn: <FaPlus />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
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
    <section className="portfolio relative z-10 py-28 bg-SecondaryColor-0 before:absolute before:top-0 before:left-0 before:h-[70%] before:w-full before:bg-[url('/images/portfolio-bg.jpg')] before:-z-10 before:bg-center before:bg-cover before:bg-no-repeat">
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-Rajdhani text-lg font-semibold text-PrimaryColor-0'>
            IT Support For Business
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3'>
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
      </div>
      <div className='mt-[60px] 2xl:mx-[100px]'>
        <Swiper
          {...settings}
          pagination={pagination}
          modules={[Pagination]}
        >
          <div>
            {PortfolioData.map(
              ({
                id,
                portfolioThumb,
                portfolioIcon,
                portfolioTitle,
                portfolioUrl,
                portfolioBtn,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className='pb-[90px]'>
                      <PortfolioCard
                        portfolioThumb={portfolioThumb}
                        portfolioIcon={portfolioIcon}
                        portfolioUrl={portfolioUrl}
                        portfolioTitle={portfolioTitle}
                        portfolioBtn={portfolioBtn}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
