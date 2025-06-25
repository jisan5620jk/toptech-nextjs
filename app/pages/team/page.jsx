"use client";

import teamThumb from "../../../public/images/team-1.png";
import teamThumb2 from "../../../public/images/team-2.png";
import teamThumb3 from "../../../public/images/team-4.png";
import teamThumb4 from "../../../public/images/team-3.png";
import TeamInnerCard from "./TeamInnerCard";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 3,
    teamThumb: teamThumb4,
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "IT Expert",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 4,
    teamThumb: teamThumb3,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Hr. Maneger",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 5,
    teamThumb: teamThumb,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 6,
    teamThumb: teamThumb2,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 7,
    teamThumb: teamThumb4,
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "IT Expert",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 8,
    teamThumb: teamThumb3,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Hr. Maneger",
    teamShareIcon: <IoShareSocialOutline />,
  },
];

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
          breadCrumbTitle={"Team Member"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"Team Member"}
        />
        <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
          <div className="Container">
            <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
              <div>
                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                  Dedicated Team
                </h5>
                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                  Meet Our Dedicated Member <br />
                  For Any Enquery
                </h1>
              </div>
              <div className="flex lg:justify-end">
                <Link href={"/pages/about"}>
                  <button className="primary-btn">
                    {`All Member`}
                    <GoArrowRight size={"22"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
              {teamData.map(
                ({
                  id,
                  teamThumb,
                  teamTitle,
                  socialIcon,
                  socialIcon2,
                  socialIcon3,
                  socialIcon4,
                  teamDesc,
                  teamShareIcon,
                }) => {
                  return (
                    <div key={id}>
                      <TeamInnerCard
                        teamThumb={teamThumb}
                        teamTitle={teamTitle}
                        socialIcon={socialIcon}
                        socialIcon2={socialIcon2}
                        socialIcon3={socialIcon3}
                        socialIcon4={socialIcon4}
                        teamDesc={teamDesc}
                        teamShareIcon={teamShareIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
