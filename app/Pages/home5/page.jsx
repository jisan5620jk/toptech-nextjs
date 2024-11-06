import About from "@/app/Component5/About/About";
import Analytics from "@/app/Component5/Analytics/Analytics";
import Banner from "@/app/Component5/Banner/Banner";
import Brand from "@/app/Component5/Brand/Brand";
import Navbar5 from "@/app/Shared/Navbar/Navbar5";

const page = () => {
  return (
    <>
    <Navbar5/>
    <Banner />
    <Brand />
    <About />
    <Analytics />
    </>
  );
};
export default page;
