import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({
  portfolioThumb,
  portfolioIcon,
  portfolioTitle,
  portfolioUrl,
  portfolioBtn,
}) => {
  return (
    <div>
      <div className="portfolio-box relative z-10 overflow-hidden group">
        <div className="portfolio-img rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:top-0 before:z-10 group-hover:before:opacity-20">
          <Image src={portfolioThumb} alt="Portfolio Image" draggable={false} className="w-full"/>
        </div>
        <div className="portfolio-content relative z-10 py-3 xl:-mt-[70px] rounded-l-lg rounded-r-lg xl:rounded-l-none xl:rounded-r-md bg-white xl:w-10/12 2xl:w-9/12 border-l-[7px] pl-7 border-PrimaryColor-0 transition-all duration-500 group-hover:rounded-se-none">
          <div className="flex items-center gap-6 lg:gap-4 xl:gap-6">
            <h1 className="portfolio-icon font-Rajdhani font-bold text-5xl sm:text-[76px] xl:text-5xl 2xl:text-[76px] text-transparent transition-all duration-500 my-1">
              {portfolioIcon}
            </h1>
            <Link href={portfolioUrl}>
              <button className="portfolio-title font-Rajdhani font-semibold text-xl lg:text-lg xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 text-left transition-all duration-500 group-hover:text-PrimaryColor-0">
                {portfolioTitle}
              </button>
            </Link>
          </div>
          <Link
            href={portfolioUrl}
            className="portfolio-btn -rotate-90 xl:rotate-0 transition-all duration-500 absolute -top-0 opacity-0 right-0 xl:-right-[50px] group-hover:-top-[50px] group-hover:opacity-100"
          >
            <button className="w-[50px] h-[50px] rounded-r-full rounded-t-full flex items-center justify-center text-white bg-PrimaryColor-0">
              {portfolioBtn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
