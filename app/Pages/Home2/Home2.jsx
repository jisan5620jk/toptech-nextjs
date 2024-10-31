import About from "@/app/Component2/About/About";
import Appionment from "@/app/Component2/Appionment/Appionment";
import Banner from "@/app/Component2/Banner/Banner";
import Blog from "@/app/Component2/Blog/Blog";
import Contact from "@/app/Component2/Contact/Contact";
import Counter from "@/app/Component2/Counter/Counter";
import Feature from "@/app/Component2/Feature/Feature";
import Newsletter from "@/app/Component2/Newsletter/Newsletter";
import Project from "@/app/Component2/Project/Project";
import Service from "@/app/Component2/Service/Service";
import Testimonial from "@/app/Component2/Testimonial/Testimonial";
import WhyChoose from "@/app/Component2/WhyChoose/WhyChoose";
import Footer2 from "@/app/Shared/Footer/Footer2";
import Navbar2 from "@/app/Shared/Navbar/Navbar2";

const Home2 = () => {
  return (
    <>
    <Navbar2 />
      <Banner />
      <Feature />
      <About />
      <Service />
      <Contact />
      <Counter />
      <WhyChoose />
      <Project />
      <Testimonial />
      <Newsletter />
      <Blog />
      <Appionment />
      <Footer2 />
    </>
  );
};

export default Home2;
