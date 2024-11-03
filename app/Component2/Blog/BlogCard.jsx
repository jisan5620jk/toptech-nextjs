import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogTagIcon,
  blogTag,
  blogUrl,
  blogTitle,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className="group p-5 transition-all duration-500 bg-white rounded-md">
      <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
        <Image
        alt="Blog Image"
          src={blogThumb}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
      </div>
      <div className="rounded-md relative z-20 flex justify-center bg-white transition-all duration-500 sm:px-3 lg:px-3 2xl:px-3 pt-7">
        <div>
          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 mb-2">
            <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0">{blogDateIcon}</span>
              {blogDate}
            </p>
            <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0 text-xl">{blogTagIcon}</span>
              {blogTag}
            </p>
          </div>
          <Link href={blogUrl}>
            <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-2 mb-5">
              {blogTitle}
            </button>
          </Link>
          <Link href={blogUrl} className="inline-block">
            <button className="flex items-center gap-2 text-HeadingColor-0 text-lg font-Rajdhani font-medium transition-all duration-500 group-hover:text-PrimaryColor-0">
              {blogBtn}
              {blogBtnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
