import About from '@/app/Component5/About/About';
import Achivement from '@/app/Component5/Achivement/Achivement';
import Analytics from '@/app/Component5/Analytics/Analytics';
import Banner from '@/app/Component5/Banner/Banner';
import Brand from '@/app/Component5/Brand/Brand';
import Integration from '@/app/Component5/Integration/Integration';
import Pricing from '@/app/Component5/Pricing/Pricing';
import Service from '@/app/Component5/Service/Service';
import Testimonial from '@/app/Component5/Testimonial/Testimonial';
import Footer5 from '@/app/Shared/Footer/Footer5';
import Navbar5 from '@/app/Shared/Navbar/Navbar5';

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
