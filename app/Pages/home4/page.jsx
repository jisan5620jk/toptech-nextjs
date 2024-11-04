import Navbar4 from "@/app/Shared/Navbar/Navbar4";
import Banner from "../../Component4/Banner/Banner";
import Brand from "@/app/Component4/Brand/Brand";
import Feature from "@/app/Component4/Feature/Feature";
import About from "@/app/Component4/About/About";
import Counter from "@/app/Component4/Counter/Counter";
import Service from "@/app/Component4/Service/Service";
import Work from "@/app/Component4/Work/Work";
import Process from "@/app/Component4/Process/Process";
import ProcessBox from "@/app/Component4/Processbox/ProcessBox";
import TeamMember from "@/app/Component4/TeamMember/TeamMember";
import Testimonial from "@/app/Component4/Testimonial/Testimonial";
import Blog from "@/app/Component4/Blog/Blog";
import Footer4 from "@/app/Shared/Footer/Footer4";

const page = () => {
  return (
    <>
    <Navbar4 />
      <Banner />
      <Brand/>
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
