import { FaRegUser } from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlineMailOpen } from "react-icons/hi";
import supportThumb from "../../../public/images/support-screen.png";
import supportShape from "../../../public/images/support-shape.png";
import Image from "next/image";

const Support = () => {
  return (
    <section className="bg-[url(/images/mobile-app-contact-bg.png)] bg-cover bg-center bg-no-repeat py-28">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[92px] items-center relative z-10">
          <div className="relative z-10 flex justify-end">
            <Image alt="Support Image" src={supportThumb} draggable="false" />
            <Image
              src={supportShape}
              draggable="false"
              alt="Support Shape"
              className="absolute -z-10 left-0 top-28 animate-wiggle hidden sm:block"
            />
          </div>
          <div>
            <h5 className="font-Rajdhani font-semibold inline-block px-7 py-[6px] rounded-full border border-white border-opacity-25 text-white text-lg mb-5">
              Support
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-white mb-9">
              Let’s get connected with our
              <br />
              agency for any help
            </h1>
            <form action="#" method="post" className="flex flex-col gap-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name*"
                    required
                    className="font-Nunito text-white placeholder:text-white font-light bg-transparent rounded-full border border-white border-opacity-25 py-2 pl-14 pr-6 h-[56px] w-full focus:outline-PrimaryColor-0"
                  />
                  <FaRegUser
                    size={"14"}
                    className="absolute text-white top-[20px] left-8"
                  />
                </div>
                <div className="relative inline-block">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter E-Mail*"
                    required
                    className="font-Nunito text-white placeholder:text-white font-light bg-transparent rounded-full border border-white border-opacity-25 py-2 pl-14 pr-6 h-[56px] w-full focus:outline-PrimaryColor-0"
                  />
                  <HiOutlineMailOpen
                    size={"16"}
                    className="absolute text-white top-[20px] left-8"
                  />
                </div>
              </div>
              <div>
                <select
                  name="select"
                  id="select"
                  className="font-Nunito text-white placeholder:text-white font-light bg-transparent rounded-full border border-white border-opacity-25 py-2 pl-8 pr-6 h-[56px] w-full focus:outline-PrimaryColor-0"
                >
                  <option value="subject" className="text-HeadingColor-0">
                    Your Subject
                  </option>
                  <option value="subject2" className="text-HeadingColor-0">
                    Bangla
                  </option>
                  <option value="subject3" className="text-HeadingColor-0">
                    Arabic
                  </option>
                  <option value="subject4" className="text-HeadingColor-0">
                    China
                  </option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="font-Nunito text-white placeholder:text-white font-light bg-transparent rounded-[30px] border border-white border-opacity-25 py-4 pl-8 pr-6 h-[130px] w-full focus:outline-PrimaryColor-0 resize-none"
              ></textarea>
              <div className="inline-block mt-3">
                <button type="submit" className="primary-btn5">
                  {`Send Message`}
                  <HiOutlineArrowRight size={"20"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
