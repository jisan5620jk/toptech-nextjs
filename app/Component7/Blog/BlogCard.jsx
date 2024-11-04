/* eslint-disable react/prop-types */
import Link from 'next/link';

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
    <div className='group transition-all duration-500 bg-white rounded-md'>
      <div className='relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='relative z-20 bg-white transition-all duration-500 pt-7'>
        <div>
          <div className='flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 mb-2'>
            <p className='font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-[12px]'>
                {blogDateIcon}
              </span>
              {blogDate}
            </p>
            <p className='font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-[12px]'>
                {blogTagIcon}
              </span>
              {blogTag}
            </p>
          </div>
          <div className='border-b pb-4 mt-3 mb-4'>
            <Link href={blogUrl}>
              <button className='font-Rajdhani text-left font-semibold text-lg sm:text-2xl md:text-2xl lg:text-xl xl:text-[28px] xl:leading-9 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                {blogTitle}
              </button>
            </Link>
          </div>
          <Link
            href={blogUrl}
            className='inline-block'
          >
            <button className='flex items-center gap-2 uppercase text-HeadingColor-0 text-lg font-Rajdhani font-semibold transition-all duration-500 group-hover:text-PrimaryColor-0'>
              {blogBtn}
              <span className='text-2xl'>{blogBtnIcon}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
