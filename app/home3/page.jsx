import About from "../Component3/About/About";
import Banner from "../Component3/Banner/Banner";
import Blog from "../Component3/Blog/Blog";
import Faq from "../Component3/Faq/Faq";
import Feature from "../Component3/Feature/Feature";
import Portfolio from "../Component3/Portfolio/Portfolio";
import Process from "../Component3/Process/Process";
import Service from "../Component3/Service/Service";
import TeamMember from "../Component3/TeamMember/TeamMember";
import Testimonial from "../Component3/Testimonial/Testimonial";
import Footer3 from "../Shared/Footer/Footer3";
import Navbar3 from "../Shared/Navbar/Navbar3";

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
