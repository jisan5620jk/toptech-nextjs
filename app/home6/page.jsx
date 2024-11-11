import Navbar6 from '@/app/Shared/Navbar/Navbar6';
import Banner from '../../Component6/Banner/Banner';
import WhyChoose from '@/app/Component6/WhyChoose/WhyChoose';
import Service from '@/app/Component6/Service/Service';
import Experience from '@/app/Component6/Experience/Experience';
import Perform from '@/app/Component6/Perform/Perform';
import Footer6 from '@/app/Shared/Footer/Footer6';

const page = () => {
  return (
    <>
      <Navbar6 />
      <Banner />
      <WhyChoose/>
      <Service />
      <Experience />
      <Perform />
      <Footer6 />
    </>
  );
};
export default page;
