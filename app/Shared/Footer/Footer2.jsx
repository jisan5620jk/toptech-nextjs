import { Link } from "react-router-dom";
import footerLogo from "/images/logo-2.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { LuArrowRightCircle } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer2 = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative pt-[278px] -mt-[158px] overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-Nunito text-white opacity-80 mt-6 mb-8 w-10/12">
              Monotonectally synergize granular top{" "}
              <br className="hidden xl:block" /> visualize strategic
              infomediaries afters <br className="hidden xl:block" /> task state
              of the art infrastructures <br className="hidden xl:block" />{" "}
              digital agency in north
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="size-9 rounded-full bg-[#333280] flex items-center text-sm justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#333280] flex items-center text-sm justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#333280] flex items-center text-sm justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full bg-[#333280] flex items-center text-sm justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <LuArrowRightCircle className="text-base text-PrimaryColor-0" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <LuArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <LuArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <LuArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <LuArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
              Contacts
            </h4>
            <ul className="mr-9 2xl:mr-[90px]">
              <li className="flex gap-2 items-center font-Nunito text-white border-b border-BorderColor-0 border-dashed pb-5">
                <RiPhoneFill size={"18"} className="text-PrimaryColor-0" />
                +980 123 (4567) 890
              </li>
              <li className="flex gap-2 items-center font-Nunito text-white border-b border-BorderColor-0 border-dashed pb-5 mt-5">
                <MdOutlineMail size={"18"} className="text-PrimaryColor-0" />
                example@gmail.com
              </li>
              <li className="flex gap-2 items-start font-Nunito text-white mt-6">
                <IoLocationSharp size={"18"} className="text-PrimaryColor-0" />
                <span className="flex-1 -mt-1">
                  102/B New market 2nd floor Sandigo - California
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[30px]">
              Newsletter
            </h4>
            <p className="font-Nunito text-white opacity-80 font-medium mb-[26px]">
              Subscribe Our Latest Newsletter
            </p>
            <form action="#" method="post">
              <label htmlFor="email" className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail*"
                  required
                  className="w-full h-[56px] font-Nunito outline-none focus:outline-none border border-BorderColor-0 bg-transparent px-6 py-2 text-white placeholder:text-white placeholder:opacity-50 mb-4"
                />
                <HiOutlineMail className="absolute top-1/2 -translate-y-1/2 right-6 text-white opacity-50 text-xl" />
              </label>
              <button
                type="submit"
                className="h-[50px] rounded border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-[30px] py-2 text-white font-Nunito flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:bg-SecondaryColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-center md:items-center py-6 mt-[108px] border-t border-BorderColor-0">
          <div>
            <p className="font-Nunito text-white">
              © 2024 All Right Reserved. Design & Developed By Dream IT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
