"use client";

import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "../../../public/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GrAlarm } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
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
      {/* top Navbar */}
      <header className="bg-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:-left-[5%] before:w-[55%] before:h-full before:skew-x-[26deg] before:bg-PrimaryColor-0 before:-z-10 overflow-hidden md:block">
        <div className="Container flex items-center justify-between h-[50px]">
          <div className="flex items-center gap-10">
            <p className="font-Nunito text-white sm:flex hidden items-center gap-1">
              <CiLocationOn className="text-xl relative bottom-[2px] text-white" />
              New market Sandigo - California
            </p>
            <Link
              href={"/"}
              className="font-Nunito text-white md:flex items-center gap-2 hidden"
            >
              <HiOutlineMailOpen size={"16"} className="text-white" />
              example@hotmail.com
            </Link>
          </div>
          <div className="flex items-center gap-16">
            <div className="lg:flex items-center gap-2 hidden">
              <span className="flex items-center gap-3 text-white">
                <GrAlarm />
              </span>
              <p className="font-Nunito font-medium text-white">
                9.10 am - 5.30 pm
              </p>
            </div>
            <ul className="flex gap-3 items-center">
              <li>
                <Link
                  href={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <header
        className="header-section bg-white"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className=" w-48 lg:w-52">
              <Link href="/">
                <Image
                  draggable="false"
                  src={Logo}
                  className="hidden lg:block"
                  alt="website_logo"
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className="w-full lg:hidden flex justify-between h-[70px] items-center p-3">
              <div className="w-28">
                <Link href="/">
                  <Image
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden "
                    alt="website_logo"
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-HeadingColor-0" />
                ) : (
                  <FaBars className="w-5 h-5 text-HeadingColor-0" />
                )}
              </button>
            </div>
            {/* All Link are hear with active */}
            <div className="flex gap-6 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-Nunito font-medium sm:text-base text-HeadingColor-0 transition-all duration-500
                `}
              >
                <div
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative`}
                >
                  <Link href="/" className="flex items-center">
                    Home
                    <BiChevronDown className="ml-1" />
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/" className="py-2 block">
                            Home Page 01
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home2" className="py-2 block">
                            Home Page 02
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home3" className="py-2 block">
                            Home Page 03
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home4" className="py-2 block">
                            Home Page 04
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home5" className="py-2 block relative">
                            Home Page 05
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home6" className="py-2 block relative">
                            Home Page 06
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/home7" className="py-2 block relative">
                            Home Page 07
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                >
                  <Link href="/pages/about" className="flex items-center">
                    About
                    <BiChevronDown className="ml-1" />
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/about" className="py-2 block">
                            About us 01
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/about2" className="py-2 block">
                            About Us 02
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                >
                  <Link href="#" className="flex items-center">
                    Service
                    <BiChevronDown className="ml-1" />
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/service" className="py-2 block">
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/service_details"
                            className="py-2 block"
                          >
                            Service Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                >
                  <Link href="#" className="flex items-center">
                    Pages
                    <BiChevronDown className="ml-1" />
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0 ">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/why_choose" className="py-2 block">
                            Why Choose Us
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/mission" className="py-2 block">
                            Our Mission
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/team" className="py-2 block">
                            Team Member
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/team_details"
                            className="py-2 block"
                          >
                            Team Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/project" className="py-2 block">
                            Projects
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/project_details"
                            className="py-2 block"
                          >
                            Project Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/pricing" className="py-2 block">
                            Pricing Plan
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/location" className="py-2 block">
                            Our Location
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/career" className="py-2 block">
                            Careers
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/faq" className="py-2 block">
                            Faq
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                {/* blog sub menu link */}
                <div
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                >
                  <Link href="#" className="flex items-center">
                    Blog
                    <BiChevronDown className="ml-1" />
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link href="/pages/blog_grid" className="py-2 block">
                            Blog Grid
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/blog_list_left"
                            className="py-2 block"
                          >
                            Blog Left Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/blog_list_right"
                            className="py-2 block"
                          >
                            Blog Right Sidebar
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link
                            href="/pages/blog_details"
                            className="py-2 block"
                          >
                            Blog Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <Link
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  href="/pages/contact"
                >
                  Contact
                </Link>
              </ul>
              <div className="hidden lg:flex items-center">
                <button>
                  <IoSearch className="text-2xl ml-2 mr-10 text-HeadingColor-0" />
                </button>
                <Link href={"/pages/contact"} className="header-btn">
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

export default Navbar;
