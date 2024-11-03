import About from '@/app/Component2/About/About';
import Banner from '@/app/Component2/Banner/Banner';
import Feature from '@/app/Component2/Feature/Feature';
import Navbar2 from '@/app/Shared/Navbar/Navbar2';

const page = () => {
  return (
    <>
      <Navbar2 />
      <Banner />
      <Feature />
      <About />
    </>
  );
};

export default page;
