import FaqAccordion from "./Accordion/FaqAccordion";
import shape1 from "../../../public/images/mobile-app-faq-shape.png";
import shape2 from "../../../public/images/mobile-app-faq-shape2.png";
import shape3 from "../../../public/images/mobile-app-faq-img.png";
import Image from "next/image";

const Faqs = () => {
  //  All Faqs and  answers.
  const Faqs = [
    {
      title: "How to Download our Toptech apps?",
      text: "Uniquely transition business applications with wireless manufactured products. Appropriately products. Appropriately communicates progressive initiatives without transition business apply authoritatively procrastinate",
      active: true,
    },
    {
      title: "How to signup your applications?",
      text: "Uniquely transition business applications with wireless manufactured products. Appropriately products. Appropriately communicates progressive initiatives without transition business apply authoritatively procrastinate",
      active: false,
    },
    {
      title: "Do you support all currency?",
      text: "Uniquely transition business applications with wireless manufactured products. Appropriately products. Appropriately communicates progressive initiatives without transition business apply authoritatively procrastinate",
      active: false,
    },
    {
      title: "What is your purchaces policy?",
      text: "Uniquely transition business applications with wireless manufactured products. Appropriately products. Appropriately communicates progressive initiatives without transition business apply authoritatively procrastinate",
      active: false,
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden py-28">
     <Image alt="Faq Shape"
        src={shape1}
        draggable="false"
        className="animate-swing absolute top-28 left-[10%] hidden xl:block"
      />
     <Image alt="Faq Shape"
        src={shape2}
        draggable="false"
        className="animate-dance2 absolute top-3/4 left-[5%] hidden xl:block"
      />
     <Image alt="Faq Shape"
        src={shape3}
        draggable="false"
        className="animate-wiggle -z-10 absolute top-40 right-0 2xl:right-[5%] hidden xl:block"
      />
      <div className="text-center">
        <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
          {`Faq's`}
        </h5>
        <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
          {`Pre answered some question's`}
          <br /> what you want
        </h1>
      </div>
      <div className="flex justify-center items-center m-auto w-[90%] lg:w-[850px] mt-14">
        <div className="w-full mx-auto">
          {Faqs.map((faq, index) => (
            <div key={index} className="mb-5">
              <FaqAccordion
                faqIcon={faq.faqIcon}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </FaqAccordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
