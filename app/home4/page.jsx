import About from "../Component4/About/About";
import Banner from "../Component4/Banner/Banner";
import Blog from "../Component4/Blog/Blog";
import Brand from "../Component4/Brand/Brand";
import Counter from "../Component4/Counter/Counter";
import Feature from "../Component4/Feature/Feature";
import Process from "../Component4/Process/Process";
import ProcessBox from "../Component4/Processbox/ProcessBox";
import Service from "../Component4/Service/Service";
import TeamMember from "../Component4/TeamMember/TeamMember";
import Testimonial from "../Component4/Testimonial/Testimonial";
import Work from "../Component4/Work/Work";
import Footer4 from "../Shared/Footer/Footer4";
import Navbar4 from "../Shared/Navbar/Navbar4";

const page = () => {
  return (
    <>
      <Navbar4 />
      <Banner />
      <Brand />
      <Feature />
      <About />
      <Counter />
      <Service />
      <Work />
      <Process />
      <ProcessBox />
      <TeamMember />
      <Testimonial />
      <Blog />
      <Footer4 />
    </>
  );
};
export default page;
