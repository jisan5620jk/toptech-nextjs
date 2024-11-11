import Testimonial from '../Component4/Testimonial/Testimonial';
import About from '../Component5/About/About';
import Achivement from '../Component5/Achivement/Achivement';
import Analytics from '../Component5/Analytics/Analytics';
import Banner from '../Component5/Banner/Banner';
import Brand from '../Component5/Brand/Brand';
import Integration from '../Component5/Integration/Integration';
import Pricing from '../Component5/Pricing/Pricing';
import Service from '../Component5/Service/Service';
import Footer5 from '../Shared/Footer/Footer5';
import Navbar5 from '../Shared/Navbar/Navbar5';

const page = () => {
  return (
    <>
      <Navbar5 />
      <Banner />
      <Brand />
      <About />
      <Analytics />
      <Achivement />
      <Service />
      <Pricing />
      <Integration />
      <Testimonial />
      <Footer5 />
    </>
  );
};
export default page;
