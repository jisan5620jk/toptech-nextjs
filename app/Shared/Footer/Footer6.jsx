

import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Footer6 = () => {
  return (
    <footer className="bg-[url(/images/footer6-bg.png)] bg-cover bg-center bg-no-repeat relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-white mb-3">
              Find the Ultimate App
              <br /> with Top Features
            </h1>
            <p className="font-Nunito text-white mt-6 mb-8 w-10/12">
              Metus faucibus branding metus futures phaselss{" "}
              <br className="hidden xl:block" /> magna consectetur nec faucibus.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-9">
              Links
            </h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-4">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-4">
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-4">
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white">
                    Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-9">
              Get In Touch
            </h4>
            <div className="flex items-center gap-3">
              <div>
                <LiaPhoneVolumeSolid className="text-xl text-white" />
              </div>
              <p className="font-Nunito text-white">+258 (549) 2158 3215</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <div>
                <HiOutlineMail className="text-2xl text-white" />
              </div>
              <p className="font-Nunito text-white">support@example.com</p>
            </div>
            <ul className="flex gap-3 mt-10">
              <li>
                <button className="size-9 rounded-full text-sm bg-transparent border border-dashed border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-solid relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-transparent border border-dashed border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-solid relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-transparent border border-dashed border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 hover:border-solid relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-10">
              Download
            </h4>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>
                <button className="primary-btn6 lg:px-3 lg:py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-[14px] border border-white">
                  <FaGooglePlay size={"28"} />
                  {`Google Play`}
                </button>
              </Link>
              <Link href={"/"}>
                <button className="primary-btn6 lg:px-3 lg:py-2 xl:px-7 xl:py-3 2xl:px-10 2xl:py-[14px] border border-white">
                  <FaApple size={"28"} />
                  {`App Store`}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-5 py-6 mt-28 mb-10">
        <div className="Container flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center">
          <div>
            <p className="font-Nunito text-white">
              TopTech © 2024 All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <Link href={"/home6"}>
                  <button className="font-Nunito text-white">
                    Privacy & Terms
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/home6"}>
                  <button className="font-Nunito text-white">FAQ</button>
                </Link>
              </li>
              <li>
                <Link href={"/home6"}>
                  <button className="font-Nunito text-white">Contact Us</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
