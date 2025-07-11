"use client";

import Link from "next/link";
import projectDetailsThumb from "../../../public/images/project-details-thumb.jpg";
import projectDetailsListThumb from "../../../public/images/project-details-item-images.jpg";
import wedgetIcon from "../../../public/images/widget-icon.png";
import { FaArrowRight, FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Project from "./Project/Project";
import Image from "next/image";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

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
          breadCrumbTitle={"Project Details"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Project Details"}
        />
        <section className="py-[120px]">
          <div className="Container">
            <Image
              src={projectDetailsThumb}
              draggable="false"
              alt="Project Details Image"
              className="w-full"
            />
            <div className="grid grid-cols-3 gap-[70px] mt-12">
              <div className="col-span-3 lg:col-span-2">
                <h2 className="font-Rajdhani font-bold text-3xl sm:text-4xl text-HeadingColor-0">
                  Intro of the project
                </h2>
                <p className="font-Nunito text-TextColor2-0 mt-6">
                  Alternative innovation to ethical network environmental
                  whiteboard pursue compelling results premier methods
                  empowerment. Dramatically architect go forward opportunities
                  before user-centric partner Credibly implement exceptional
                </p>
                <p className="font-Nunito text-TextColor2-0 mt-7 mb-9">
                  Continually fashion orthogonal leadership skills whereas
                  wireless metrics. Uniquely syndicate exceptio opportunities
                  with interdependent users. Globally enhance fully tested
                  meta-services rather than pan solutions. Proactively integrate
                  client-integrate go forward architectures and turnkey
                  meta-services. Interactively harness integrated ROI whereas
                  frictionless products.
                </p>
                <h2 className="font-Rajdhani font-bold text-3xl sm:text-4xl text-HeadingColor-0 mt-[52px]">
                  Challenge and solution
                </h2>
                <p className="font-Nunito text-TextColor2-0 mt-6">
                  Methods empowerment. Dramatically architect go forward
                  opportunities credibly revolutionize front-end initiatives for
                  interoperable outsourcing. Conveniently repurpose
                  market-driven deliverables without holistic potentialitiess
                  distinctively integrate
                </p>
                <div className="grid gap-7 grid-cols-1 lg:grid-cols-1 md:grid-cols-2 items-center xl:grid-cols-2 mt-12">
                  <div>
                    <Image
                      src={projectDetailsListThumb}
                      draggable="false"
                      alt="Project Details Image"
                    />
                  </div>
                  <div>
                    <h2 className="font-Rajdhani font-semibold text-[28px] text-HeadingColor-0">
                      Process & Result
                    </h2>
                    <ul className="flex flex-col gap-[14px] mt-7">
                      <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                        <FaCircleCheck
                          size={"20"}
                          className="text-PrimaryColor-0"
                        />
                        Innovate wireless market
                      </li>
                      <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                        <FaCircleCheck
                          size={"20"}
                          className="text-PrimaryColor-0"
                        />
                        Productivate resource sucking
                      </li>
                      <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                        <FaCircleCheck
                          size={"20"}
                          className="text-PrimaryColor-0"
                        />
                        Proactively unleash oriented communities
                      </li>
                      <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                        <FaCircleCheck
                          size={"20"}
                          className="text-PrimaryColor-0"
                        />
                        Credibly develop progressive archi
                      </li>
                      <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                        <FaCircleCheck
                          size={"20"}
                          className="text-PrimaryColor-0"
                        />
                        Phosfluorescently to customer
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 className="font-Rajdhani font-bold text-2xl md:text-[28px] text-PrimaryColor-0 mt-[44px]">
                  Competently architect intermandated deliverables client niches
                  continually underwhelm
                </h2>
                <p className="font-Nunito text-TextColor2-0 mt-5">
                  Appropriately communicate economically sound e-commerce after
                  enterprise services. Dramatically target cross-media solutions
                  and error-free platforms. Monotonectally pontificate 24/365
                  human capital and dynamic potentialities compellingly pursue
                </p>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <div className="rounded-lg overflow-hidden bg-BodyBg-0 mb-7">
                  <div className="mx-9 pt-9 border-b border-dashed border-[#D9DDEC] pb-4">
                    <p className="font-Nunito text-TextColor2-0">Clients :</p>
                    <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                      MR. Dolon Khan
                    </h5>
                  </div>
                  <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                    <p className="font-Nunito text-TextColor2-0">Category :</p>
                    <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                      IT Solution
                    </h5>
                  </div>
                  <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                    <p className="font-Nunito text-TextColor2-0">
                      Starting Date :
                    </p>
                    <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                      02 January, 2025
                    </h5>
                  </div>
                  <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                    <p className="font-Nunito text-TextColor2-0">
                      Ending Date :
                    </p>
                    <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                      05 June, 2025
                    </h5>
                  </div>
                  <div className="mx-9 pt-3">
                    <p className="font-Nunito text-TextColor2-0">
                      Project Value :
                    </p>
                    <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1 pb-8">
                      $5,000
                    </h5>
                  </div>
                </div>
                <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/sidber-contact.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                  <Image src={wedgetIcon} draggable="false" alt="Wedget Icon" />
                  <h6 className="font-Nunito font-medium text-lg text-white mt-5 mb-2">
                    Call Us Anytime
                  </h6>
                  <Link href={"/"}>
                    <button className="font-Nunito font-semibold text-2xl text-white">
                      +123 (4567) 890
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className="font-Nunito text-white flex gap-2 items-center mt-4 mb-[52px]">
                      <MdEmail className="text-xl text-PrimaryColor-0" />
                      example@gmail.com
                    </button>
                  </Link>
                  <Link href={"/pages/contact"}>
                    <button className="font-Nunito text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                      Contact Us
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
