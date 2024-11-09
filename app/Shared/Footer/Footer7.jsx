import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import logo from "../../../public/images/logo.png"
import Image from "next/image";
import Link from "next/link";

const Footer7 = () => {
  return (
    <footer className="bg-[url(/images/footer7-bg.jpg)] bg-cover bg-center bg-no-repeat relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 sm:mr-14 md:mr-28">
            <Link href={"/"}>
              <Image alt="Footer Logo" src={logo} draggable="false" />
            </Link>
            <h4 className="font-Rajdhani text-[28px] text-HeadingColor-0 font-semibold mt-6 mb-2">
              Newsletter
            </h4>
            <form action="#" method="post" className="relative">
              <label htmlFor="email" className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail*"
                  required
                  className="w-full h-[56px] font-Nunito outline-none focus:outline-none border-b-2 bg-transparent py-2 text-HeadingColor-0 placeholder:text-[#68686a] mb-4"
                />
                <FaRegEnvelope className="absolute right-0 top-2 text-TextColor2-0" />
              </label>
              <label
                htmlFor="checkbox"
                className="relative font-Nunito text-TextColor2-0 flex gap-2 cursor-pointer mb-6"
              >
                <input type="checkbox" name="checkbox" id="checkbox" required />
                I agree terms & conditions
              </label>
              <button
                type="submit"
                className="h-[40px] w-[100px] rounded-full bg-PrimaryColor-0 font-Nunito text-white transition-all duration-500 hover:text-white"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-HeadingColor-0 font-semibold mb-6">
              About Apps
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Why Choose Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Working Process
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    App Features
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Pricing Plans
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0">
                    Downloads
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-HeadingColor-0 font-semibold mb-6">
              Resource
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Demo
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Webnair
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    {`Doc's`}
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Supports
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0">
                    {`Faq's`}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-HeadingColor-0 font-semibold mb-6">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Services
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0 mb-4">
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Rajdhani text-[#68686a] text-lg font-semibold transition-all duration-500 hover:text-PrimaryColor-0">
                    Testimonials
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="bg-white border px-4 sm:px-7 py-4 mt-[102px] mb-10 flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center">
          <div>
            <p className="font-Nunito text-HeadingColor-0">
              TopTech © 2024 All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex gap-3">
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] border border-[#c8cdd3] flex items-center justify-center text-HeadingColor-0 overflow-hidden hover:text-white transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] border border-[#c8cdd3] flex items-center justify-center text-HeadingColor-0 overflow-hidden hover:text-white transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] border border-[#c8cdd3] flex items-center justify-center text-HeadingColor-0 overflow-hidden hover:text-white transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] border border-[#c8cdd3] flex items-center justify-center text-HeadingColor-0 overflow-hidden hover:text-white transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
