import Navbar3 from "@/app/Shared/Navbar/Navbar3";
import Banner from "../../Component3/Banner/Banner";
import About from "@/app/Component3/About/About";
import Service from "@/app/Component3/Service/Service";
import Process from "@/app/Component3/Process/Process";
import Faq from "@/app/Component3/Faq/Faq";
import Portfolio from "@/app/Component3/Portfolio/Portfolio";
import TeamMember from "@/app/Component3/TeamMember/TeamMember";
import Testimonial from "@/app/Component3/Testimonial/Testimonial";
import Blog from "@/app/Component3/Blog/Blog";
import Footer3 from "@/app/Shared/Footer/Footer3";
import Feature from "@/app/Component3/Feature/Feature";

const Home3 = () => {
  return (
    <>
    <Navbar3 />
      <Banner />
      <Feature />
      <About />
      <Service />
      <Process />
      <Faq />
      <Portfolio />
      <TeamMember />
      <Testimonial />
      <Blog />
      <Footer3 />
    </>
  );
};

export default Home3;
