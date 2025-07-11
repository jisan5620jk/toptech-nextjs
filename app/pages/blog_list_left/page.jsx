"use client";

import Link from "next/link";
import blogListImg from "../../../public/images/blog-1.png";
import blogListImg2 from "../../../public/images/blog-2.png";
import blogListImg3 from "../../../public/images/blog-3.png";
import blogListImg4 from "../../../public/images/blog-4.png";
import itemthumb from "../../../public/images/recent-post-1.png";
import itemthumb2 from "../../../public/images/recent-post-2.png";
import itemthumb3 from "../../../public/images/recent-post-3.png";
import { IoSearch } from "react-icons/io5";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaRegFolderOpen,
} from "react-icons/fa6";
import BlogListCard from "./BlogListCard";
import Image from "next/image";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

const blogListData = [
  {
    id: 1,
    blogListImg: blogListImg,
    thumbContent: "IT Solution",
    blogListTilte: "Newest Comments (04) Equipment for House 2025",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
  },
  {
    id: 2,
    blogListImg: blogListImg2,
    thumbContent: "IT Solution",
    blogListTilte: "Newest Comments (04) Equipment for House 2025",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
  },
  {
    id: 3,
    blogListImg: blogListImg3,
    thumbContent: "IT Solution",
    blogListTilte: "Newest Comments (04) Equipment for House 2025",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
  },
  {
    id: 4,
    blogListImg: blogListImg4,
    thumbContent: "IT Solution",
    blogListTilte: "Newest Comments (04) Equipment for House 2025",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
  },
];

import Footer from "@/app/Shared/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import TextReveal from "@/app/Shared/TextAnim/TextReveal";
import ContentReveal from "@/app/Shared/ContentReveal/ContentReveal";
import ImageReveal from "@/app/Shared/ImageReveal/ImageReveal";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const Page = () => {
  const smootherRef = useRef(null);

  // Run global image reveal animations
  ImageReveal();

  // Run global text reveal animations
  ContentReveal();

  // Run global heading text reveal animations
  TextReveal();

  // Initialize GSAP ScrollSmoother
  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetEl, offsetY: 0 },
          ease: "power2.inOut",
        });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <BreadCrumb
          breadCrumbTitle={"Blog left Sidebar"}
          url={"/blog"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbIcon2={<FaArrowRightLong />}
          breadCrumbLink={"Blog"}
          breadCrumbContent={"Blog left Sidebar"}
        />
        <section className="pt-[120px]">
          <div className="Container">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    required
                    className="w-full h-[56px] p-6 rounded font-Nunito"
                  />
                  <button
                    type="submit"
                    className=" text-xl text-white rounded h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                  >
                    <IoSearch />
                  </button>
                </div>
                <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                  <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                    Categories
                  </h4>
                  <ul className="mt-8">
                    <li>
                      <Link href={"/pages/service_details"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            Web Development
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/service_details2"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            Digital Marketing
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/service_details3"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            IT Solution
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/service_details4"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            App Development
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/service_details5"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            Web Design
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/service_details6"}>
                        <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                          <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                            <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                            UI/UX Design
                          </span>
                          <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                  <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                    Popular Post
                  </h4>
                  <Link href={"/blog-details"}>
                    <button className="group flex gap-4 mb-6">
                      <div className="rounded overflow-hidden">
                        <Image
                          draggable="false"
                          src={itemthumb}
                          alt="Item Image"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                          Digital Marketing Strategy Action P…
                        </h6>
                        <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                          01 Jan, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                  <Link href={"/pages/blog_details"}>
                    <button className="group flex gap-4 my-6">
                      <div className="rounded overflow-hidden">
                        <Image
                          draggable="false"
                          src={itemthumb2}
                          alt="Item Image"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                          6 Things You Must Know Before Hirin…
                        </h6>
                        <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                          16 Jan, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                  <Link href={"/pages/blog_details"}>
                    <button className="group flex gap-4 my-6">
                      <div className="rounded overflow-hidden">
                        <Image
                          draggable="false"
                          src={itemthumb3}
                          alt="Item Image"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                          IT Solution And IT Related Services
                        </h6>
                        <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                          27 Jan, 2025
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                  <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                    Tags
                  </h4>
                  <ul className="inline-block">
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          Cyber Security
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          Learning
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          Web Drvelopment
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          IT Solution
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          Marketing
                        </button>
                      </Link>
                    </li>
                    <li className="inline-block mr-[10px] mb-[10px]">
                      <Link href={"/"}>
                        <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                          Technology
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2">
                {blogListData.map(
                  ({
                    id,
                    blogListImg,
                    thumbContent,
                    blogListTilte,
                    postBy,
                    comments,
                    blogListDesc,
                  }) => {
                    return (
                      <div key={id} className="mb-7">
                        <BlogListCard
                          blogListImg={blogListImg}
                          thumbContent={thumbContent}
                          blogListTitle={blogListTilte}
                          postBy={postBy}
                          comments={comments}
                          blogListDesc={blogListDesc}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
        <div>
          <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[50px]">
            <li>
              <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                01
              </button>
            </li>
            <li>
              <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                02
              </button>
            </li>
            <li>
              <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                03
              </button>
            </li>
            <li>
              <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                <FaAngleRight />
              </button>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
