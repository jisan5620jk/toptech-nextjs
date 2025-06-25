'use client'

import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogGridImg from "../../../public/images/blog-1.png";
import blogGridImg2 from "../../../public/images/blog-2.png";
import blogGridImg3 from "../../../public/images/blog-3.png";
import blogGridImg4 from "../../../public/images/blog-4.png";
import blogGridImg5 from "../../../public/images/blog-5.png";
import blogGridImg6 from "../../../public/images/blog-6.png";
import { LuArrowUpRight } from "react-icons/lu";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import BlogGridCard from "./BlogGridCard";

const blogData = [
  {
    id: 1,
    blogGridImg: blogGridImg,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "Solution This Business For is Marketing Blog",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 2,
    blogGridImg: blogGridImg2,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "Easy and Most Powerful Server and Platform.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 3,
    blogGridImg: blogGridImg3,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "In eu fringilla, accumsan purusvel sollicitudin.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 4,
    blogGridImg: blogGridImg4,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "Vivamus vehicula nl purus at eros interdum.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 5,
    blogGridImg: blogGridImg5,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "Optimizing IT Infrastructure for Cost Efficiency.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
  {
    id: 6,
    blogGridImg: blogGridImg6,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "/pages/blog_details",
    blogGridTitle: "Business Rules of Running to Web Solution.",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "Monotonectaly granular to front markets task data semper maecenas ferform",
  },
];

import TextReveal from "../Shared/TextAnim/TextReveal";
import ContentReveal from "../Shared/ContentReveal/ContentReveal";
import ImageReveal from "../Shared/ImageReveal/ImageReveal";
import { useEffect } from "react";

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
        breadCrumbTitle={"Blog Grid"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog Grid"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogGridImg,
                thumbContent,
                thumbBtn,
                blogGridTitle,
                postBy,
                comments,
                blogGridDesc,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridImg={blogGridImg}
                      thumbContent={thumbContent}
                      thumbBtn={thumbBtn}
                      blogGridTitle={blogGridTitle}
                      postBy={postBy}
                      comments={comments}
                      blogGridDesc={blogGridDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
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
      </div>
      </div>
  );
};

export default Page;
