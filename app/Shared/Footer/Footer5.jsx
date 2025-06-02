import footerLogo from "../../../public/images/logo-2.png";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaStar,
  FaXTwitter,
} from "react-icons/fa6";
import { VscArrowRight } from "react-icons/vsc";
import { TiStarHalfOutline } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

const Footer5 = () => {
  return (
    <footer className="bg-HeadingColor-0 relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link href={"/"}>
              <Image alt="Footer Logo" src={footerLogo} draggable={false} />
            </Link>
            <p className="font-Nunito text-TextColor-0 mt-6 mb-8 w-10/12">
              Monotonectally synergize granular top{" "}
              <br className="hidden xl:block" /> visualize strategic
              infomediaries afters <br className="hidden xl:block" /> task state
              of the art infrastruc
            </p>
            <div className="bg-[#0f1f2f] pl-9 py-6 flex gap-7 items-center sm:w-10/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12">
              <div className="border-r border-TextColor2-0 pr-7">
                <h3 className="font-Rajdhani font-bold text-[42px] leading-[40px] text-white">
                  4.9
                </h3>
              </div>
              <div>
                <ul className="flex items-center gap-2">
                  <li className="text-[#ffb50a]">
                    <FaStar />
                  </li>
                  <li className="text-[#ffb50a]">
                    <FaStar />
                  </li>
                  <li className="text-[#ffb50a]">
                    <FaStar />
                  </li>
                  <li className="text-[#ffb50a]">
                    <FaStar />
                  </li>
                  <li className="text-[#ffb50a]">
                    <TiStarHalfOutline size={"19"} />
                  </li>
                </ul>
                <p className="font-Nunito text-TextColor2-0 pt-2">
                  <span className="text-white">(5k+)</span> All Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-6">
              Company
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-6">
              Our Services
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white mb-5">
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[26px]">
              Newsletter
            </h4>
            <p className="font-Nunito text-TextColor-0 font-medium mb-5">
              Subscribe Our Newsletter for Get{" "}
              <br className="hidden xl:block" /> Any Latest Update
            </p>
            <form action="#" method="post" className="relative">
              <label htmlFor="email" className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail*"
                  required
                  className="w-full h-[56px] rounded-lg font-Nunito outline-none focus:outline-none border border-BorderColor-0 bg-transparent px-6 py-2 text-white placeholder:text-white placeholder:opacity-50 mb-4"
                />
              </label>
              <button
                type="submit"
                className="absolute top-4 right-5 text-2xl font-Nunito text-TextColor-0 transition-all duration-500 hover:text-white"
              >
                <VscArrowRight />
              </button>
              <label
                htmlFor="checkbox"
                className="relative font-Nunito text-TextColor-0 flex gap-2 cursor-pointer"
              >
                <input type="checkbox" name="checkbox" id="checkbox" required />
                Protecting your privacy
              </label>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-6 mt-[108px] border-t border-BorderColor-0">
          <div>
            <p className="font-Nunito text-TextColor-0" data-no-animate>
              Copyright © 2024. Designed By Dream IT Solution
            </p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li data-no-animate>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaFacebookF />
                </button>
              </li>
              <li data-no-animate>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaXTwitter />
                </button>
              </li>
              <li data-no-animate>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaLinkedinIn />
                </button>
              </li>
              <li data-no-animate>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaPinterestP />
                </button>
              </li>
              <li data-no-animate>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaBehance size={"18"} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
