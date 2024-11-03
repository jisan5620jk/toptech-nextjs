"use client"

import aboutThumb from "../../../public/images/about-thumb.png";
import aboutIcon from "../../../public/images/about-icon1.png";
import aboutIcon2 from "../../../public/images/about-icon2.png";
import aboutIcon3 from "../../../public/images/about-icon3.png";
import aboutIcon4 from "../../../public/images/about-icon4.png";
import aboutShape from "../../../public/images/about-shape.png";
import aboutShape2 from "../../../public/images/about-shape2.png";
import CountUp from "react-countup";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className='py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center'>
          <div className='relative z-10'>
            <Image
              src={aboutThumb}
              draggable='false'
              alt='About Image'
            />
            <div className='absolute top-0 left-0'>
              <div className='bg-PrimaryColor-0 pb-6 pt-5 flex flex-col justify-between overflow-hidden rounded-lg h-[117px] sm:h-[208px] lg:h-[180px] xl:h-[208px] w-[92px] sm:w-[170px] lg:w-[140px] xl:w-[170px] items-center text-center relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-0 sm:before:w-8 before:h-[2px] before:bg-white after:absolute after:-top-14 after:-left-[2px] after:w-0 sm:after:w-[174px] after:h-[170px] after:bg-[#1164ED] after:-z-10 after:rounded-full'>
                <CountUp
                  start={-9}
                  end={22}
                  suffix='+'
                  className='text-3xl sm:text-[56px] font-Rajdhani font-bold text-white'
                />
                <h6 className='font-Rajdhani text-sm leading-4 sm:text-lg sm:leading-5 font-semibold text-white'>
                  Years Of <br /> Experiences
                </h6>
              </div>
            </div>
            <Image
              src={aboutShape}
              draggable='false'
              className='absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block'
              alt='About Shape'
            />
          </div>
          <div className='relative'>
            <h5 className='font-Rajdhani text-lg font-semibold text-PrimaryColor-0'>
              IT Support For Business
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3'>
              Ensuring Your Success Trusted <br />
              IT Services Source
            </h1>
            <p className='font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-[1px] before:w-[50px] before:h-[1px] before:bg-PrimaryColor-0 before:animate-dance4'>
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] my-10'>
              <div className='flex gap-5 items-center'>
                <div className='w-[70px] h-[70px] rounded bg-white flex justify-center items-center'>
                  <Image
                    src={aboutIcon}
                    draggable='false'
                    alt='About Icon'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0'>
                    100% Money Back Gaurentee
                  </h5>
                </div>
              </div>
              <div className='flex gap-5 items-center'>
                <div className='w-[70px] h-[70px] rounded bg-white flex justify-center items-center'>
                  <Image
                    src={aboutIcon2}
                    draggable='false'
                    alt='About Icon'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0'>
                    Expert & Dedicated Team Members
                  </h5>
                </div>
              </div>
              <div className='flex gap-5 items-center'>
                <div className='w-[70px] h-[70px] rounded bg-white flex justify-center items-center'>
                  <Image
                    src={aboutIcon3}
                    draggable='false'
                    alt='About Icon'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0'>
                    24/7 Free Tehcnical Supports
                  </h5>
                </div>
              </div>
              <div className='flex gap-5 items-center'>
                <div className='w-[70px] h-[70px] rounded bg-white flex justify-center items-center'>
                  <Image
                    src={aboutIcon4}
                    draggable='false'
                    alt='About Icon'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0'>
                    100% Customers Satisfaction
                  </h5>
                </div>
              </div>
            </div>
            <Link href={'/about'}>
              <button className='primary-btn'>
                {`Discover More`}
                <GoArrowRight size={'22'} />
              </button>
            </Link>
            <Image
              src={aboutShape2}
              draggable='false'
              className='absolute -bottom-0 left-1/2 animate-swing hidden sm:block'
              alt='About Shape'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
