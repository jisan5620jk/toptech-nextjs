"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import serviceIcon from "../../../public/images/service-icon1.png";
import serviceIcon2 from "../../../public/images/service-icon2.png";
import serviceIcon3 from "../../../public/images/service-icon3.png";
import serviceIcon4 from "../../../public/images/service-icon4.png";
import serviceIcon5 from "../../../public/images/service-icon5.png";
import serviceIcon6 from "../../../public/images/service-icon6.png";
import ServiceCard from "./ServiceCard";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Newsletter from "./Newsletter/Newsletter";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Cloud Services",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "IT Management",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: "Software Renew",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon3,
    serviceTitle: "Machine Learning",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: "Web Development",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 7,
    serviceIcon: serviceIcon6,
    serviceTitle: "Cyber Security",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 8,
    serviceIcon: serviceIcon6,
    serviceTitle: "Data Analytic",
    serviceDesc:
      "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/pages/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
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
          breadCrumbTitle={"Our Services"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Our Services"}
        />
        <section className="pt-28 pb-[120px] p relative z-10 bg-BodyBg-0">
          <div className="Container">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                IT Support For Business
              </h5>
              <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
                Ensuring Your Success Trusted <br />
                IT Services Source
              </h1>
            </div>
            <div className="mt-[88px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[68px]">
                {serviceData.map(
                  ({
                    id,
                    serviceImg,
                    serviceIcon,
                    serviceUrl,
                    serviceButton,
                    serviceButton2,
                    serviceTitle,
                    serviceDesc,
                    serviceShape,
                  }) => {
                    return (
                      <>
                        <div key={id}>
                          <ServiceCard
                            serviceImg={serviceImg}
                            serviceIcon={serviceIcon}
                            serviceUrl={serviceUrl}
                            serviceButton={serviceButton}
                            serviceButton2={serviceButton2}
                            serviceTitle={serviceTitle}
                            serviceDesc={serviceDesc}
                            serviceShape={serviceShape}
                          />
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;
