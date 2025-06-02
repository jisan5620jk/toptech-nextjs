"use client";

import Banner from "../Component7/Banner/Banner";
import Feature from "../Component7/Feature/Feature";
import Collaboration from "../Component7/Collaboration/Collaboration";
import Benifits from "../Component7/Benifits/Benifits";
import Brand from "../Component7/Brand/Brand";
import Process from "../Component7/Process/Process";
import ContentSlider from "../Component7/ContentSlider/ContentSlider";
import AppScreen from "../Component7/AppScreen/AppScreen";
import Pricing from "../Component7/Pricing/Pricing";
import Testimonial from "../Component7/Testimonial/Testimonial";
import TeamMember from "../Component7/TeamMember/TeamMember";
import Faqs from "../Component7/Faqs/Faqs";
import Download from "../Component7/Download/Download";
import Blog from "../Component7/Blog/Blog";
import Support from "../Component7/Support/Support";
import Navbar7 from "../Shared/Navbar/Navbar7";
import Footer7 from "../Shared/Footer/Footer7";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/Shared/NoSSR"), { ssr: false });

const page = () => {
  return (
    <>
      <NoSSR>
        <Navbar7 />
        <Banner />
        <Feature />
        <Collaboration />
        <Benifits />
        <Brand />
        <Process />
        <ContentSlider />
        <AppScreen />
        <Pricing />
        <Testimonial />
        <TeamMember />
        <Faqs />
        <Download />
        <Blog />
        <Support />
        <Footer7 />
      </NoSSR>
    </>
  );
};
export default page;
