'use client';

import { FaBars } from 'react-icons/fa6';
import { BiChevronDown } from 'react-icons/bi';
import Logo from '../../../public/images/logo-2.png';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';

const Navbar3 = () => {
  //sticky

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relative z-[99999]`}
    >
      <header
        className='header-section navbar2 bg-transparent absolute w-full z-10'
        data-aos='zoom-in'
        data-aos-duration='1000'
      >
        <div className='Container'>
          {/* main Navbar */}
          <div className='flex flex-col lg:flex-row items-center justify-between lg:h-[100px] '>
            {/* website Logo */}
            <div className=' w-48 lg:w-52'>
              <Link href='/'>
                <Image
                  draggable='false'
                  src={Logo}
                  className='hidden lg:block'
                  alt='website_logo'
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className='w-full lg:hidden flex justify-between h-[70px] items-center p-3'>
              <div className='w-28'>
                <Link href='/'>
                  <Image
                    draggable='false'
                    src={Logo}
                    className='block lg:hidden '
                    alt='website_logo'
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className='lg:hidden block focus:outline-none '
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className='w-6 h-6 text-white' />
                ) : (
                  <FaBars className='w-5 h-5 text-white' />
                )}
              </button>
            </div>
            {/* All Link are hear with active */}
            <div className='flex gap-8 items-center'>
              <ul
                className={`${
                  isOpen ? 'block' : 'hidden'
                } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-Nunito font-medium sm:text-base text-HeadingColor-0 transition-all duration-500
                `}
              >
                <Link
                  href='/'
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative`}
                >
                  <span className='flex items-center'>
                    Home
                    <BiChevronDown className='ml-1' />
                  </span>
                  <div className='absolute pt-5 lg:pt-8 z-20'>
                    <ul className='shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0'>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/'
                            className='py-2 block'
                          >
                            Home Page 01
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home2'
                            className='py-2 block'
                          >
                            Home Page 02
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home3'
                            className='py-2 block'
                          >
                            Home Page 03
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home4'
                            className='py-2 block'
                          >
                            Home Page 04
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 group2'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home5'
                            className='py-2 block relative'
                          >
                            Home Page 05
                            <span className='absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0'>
                              NEW
                            </span>
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 group2'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home6'
                            className='py-2 block relative'
                          >
                            Home Page 06
                            <span className='absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0'>
                              NEW
                            </span>
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 group2'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/home7'
                            className='py-2 block relative'
                          >
                            Home Page 07
                            <span className='absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0'>
                              NEW
                            </span>
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 group2 cursor-not-allowed'>
                        <li className='py-2 block relative'>
                          {`Other's Home`}
                          <span className='absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0'>
                            Coming Soon
                          </span>
                        </li>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  href='#'
                >
                  <span className='flex items-center'>
                    About
                    <BiChevronDown className='ml-1' />
                  </span>
                  <div className='absolute pt-5 lg:pt-8 z-20'>
                    <ul className='shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0'>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/about'
                            className='py-2 block'
                          >
                            About us 01
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/about2'
                            className='py-2 block'
                          >
                            About Us 02
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  href='#'
                >
                  <span className='flex items-center'>
                    Service
                    <BiChevronDown className='ml-1' />
                  </span>
                  <div className='absolute pt-5 lg:pt-8 z-20'>
                    <ul className='shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0'>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/service'
                            className='py-2 block'
                          >
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0 '>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/service_details'
                            className='py-2 block'
                          >
                            Service Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  href='#'
                >
                  <span className='flex items-center'>
                    Pages
                    <BiChevronDown className='ml-1' />
                  </span>
                  <div className='absolute pt-5 lg:pt-8 z-20'>
                    <ul className='shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0 '>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/why_choose'
                            className='py-2 block'
                          >
                            Why Choose Us
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/mission_inner'
                            className='py-2 block'
                          >
                            Our Mission
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/team_inner'
                            className='py-2 block'
                          >
                            Team Member
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/team_details'
                            className='py-2 block'
                          >
                            Team Details
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/project'
                            className='py-2 block'
                          >
                            Projects
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/project_details'
                            className='py-2 block'
                          >
                            Project Details
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/pricing_inner'
                            className='py-2 block'
                          >
                            Pricing Plan
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/location'
                            className='py-2 block'
                          >
                            Our Location
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/career'
                            className='py-2 block'
                          >
                            Careers
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/faq_inner'
                            className='py-2 block'
                          >
                            Faq
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </Link>
                {/* blog sub menu link */}
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300 group relative `}
                  href='#'
                >
                  <span className='flex items-center'>
                    Blog
                    <BiChevronDown className='ml-1' />
                  </span>
                  <div className='absolute pt-5 lg:pt-8 z-20'>
                    <ul className='shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0'>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/blog_grid'
                            className='py-2 block'
                          >
                            Blog Grid
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/blog_left_sidebar'
                            className='py-2 block'
                          >
                            Blog Left Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/blog_right_sidebar'
                            className='py-2 block'
                          >
                            Blog Right Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className='px-5 group hover:bg-PrimaryColor-0'>
                        <li className='hover:ml-3 duration-300'>
                          <Link
                            href='/blog_details'
                            className='py-2 block'
                          >
                            Blog Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </Link>
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'active'
                      : ''} text-white text-left lg:border-b-0 px-3 lg:px-2 xl:px-5 w-full block transition-all duration-300`}
                  href='/contact'
                >
                  Contact
                </Link>
              </ul>
              <div className='hidden lg:flex items-center'>
                <button>
                  <IoSearch className='text-xl ml-2 mr-5 xl:mr-10 text-white' />
                </button>
                <Link
                  href={'/contact'}
                  className='header-btn'
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar3;
