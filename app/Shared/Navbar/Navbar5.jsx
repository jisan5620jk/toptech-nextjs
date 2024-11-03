/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegCircle } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar5 = () => {
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
      <header
        className="header-section bg-transparent absolute w-full z-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className=" w-48 lg:w-52">
              <Link to="/">
                <img
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
                <Link to="/">
                  <img
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden "
                    alt="constre_website_logo"
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
            {/* All navLink are hear with active */}
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } bg-white bg-opacity-100 lg:bg-opacity-40 w-full rounded-md lg:rounded-full border lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row px-2 py-3 lg:py-0 font-Nunito font-medium sm:text-base text-HeadingColor-0 transition-all duration-500
                `}
            >
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group relative `}
                to="/about"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  Home
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/" className="py-2 block">
                          Home Page 01
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home2" className="py-2 block">
                          Home Page 02
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home3" className="py-2 block">
                          Home Page 03
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home4" className="py-2 block">
                          Home Page 04
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home5" className="py-2 block relative">
                          Home Page 05
                          <span className="absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0">
                            NEW
                          </span>
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home6" className="py-2 block relative">
                          Home Page 06
                          <span className="absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0">
                            NEW
                          </span>
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 group2">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/home7" className="py-2 block relative">
                          Home Page 07
                          <span className="absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0">
                            NEW
                          </span>
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 group2 cursor-not-allowed">
                      <li className="py-2 block relative">
                        {`Other's Home`}
                        <span className="absolute top-1/2 -translate-y-1/2 right-0 font-Rajdhani text-sm bg-PrimaryColor-0 text-white px-2 py-[2px] rounded border border-SecondaryColor-0">
                          Coming Soon
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group relative `}
                to="/about"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 group-hover:pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 scale-0 transition-all duration-300  group-hover:scale-100 absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  About
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/about" className="py-2 block">
                          About us 01
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/about2" className="py-2 block">
                          About Us 02
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 group-hover:pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 scale-0 transition-all duration-300  group-hover:scale-100 absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  Service
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/service" className="py-2 block">
                          Service
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0 ">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/service_details" className="py-2 block">
                          Service Details
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 group-hover:pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 scale-0 transition-all duration-300  group-hover:scale-100 absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  Pages
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0 ">
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/why_choose" className="py-2 block">
                          Why Choose Us
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/mission_inner" className="py-2 block">
                          Our Mission
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/team_inner" className="py-2 block">
                          Team Member
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/team_details" className="py-2 block">
                          Team Details
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/project" className="py-2 block">
                          Projects
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/project_details" className="py-2 block">
                          Project Details
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/pricing_inner" className="py-2 block">
                          Pricing Plan
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/location" className="py-2 block">
                          Our Location
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/career" className="py-2 block">
                          Careers
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/faq_inner" className="py-2 block">
                          Faq
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
              {/* blog sub menu link */}
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 group-hover:pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 scale-0 transition-all duration-300  group-hover:scale-100 absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  Blog
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/blog_grid" className="py-2 block">
                          Blog Grid
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/blog_left_sidebar" className="py-2 block">
                          Blog Left Sidebar
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/blog_right_sidebar" className="py-2 block">
                          Blog Right Sidebar
                        </Link>
                      </li>
                    </div>
                    <div className="px-5 group hover:bg-PrimaryColor-0">
                      <li className="hover:ml-3 duration-300">
                        <Link to="/blog_details" className="py-2 block">
                          Blog Details
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-HeadingColor-0 text-lg font-medium px-3 lg:px-2 xl:px-[22px] w-full block transition-all duration-300 group`}
                to="/contact"
              >
                <span className="flex items-center relative z-10 transition-all duration-300 group-hover:pl-3">
                  <FaRegCircle
                    size={"7"}
                    className="text-PrimaryColor-0 scale-0 transition-all duration-300  group-hover:scale-100 absolute left-0 top-1/2 -translate-y-1/2"
                  />{" "}
                  Contact
                </span>
              </NavLink>
            </ul>
            <div className="hidden lg:flex gap-8 items-center">
              <button className="text-[#7f93ab]">
                <BiSearch size={"22"} />
              </button>
              <button className="primary-btn5">
                {`Try For Free`}
                <MdOutlineFileDownload size={"20"} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar5;
