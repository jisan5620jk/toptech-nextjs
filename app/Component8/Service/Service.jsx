import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import serviceBoxShape from '/images/feat-icon1.png';

const Service = () => {
  return (
    <section className='relative py-[140px] bg-[#fff8f5]'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-4'>
            Navigating Our Future Course
          </h1>
          <p className='font-Nunito text-TextColor2-0 pb-1'>
            Conviently optimize interdependent intellectual interoperable
            visuali design infoediaries <br className='hidden md:block' /> main
            issue state icreative planing main best practices.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]'>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#5020d9] before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-[#5020d9] flex items-center justify-center transition-all duration-500 group-hover:text-[#5020d9] relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Business Collaboration
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-PrimaryColor-0 flex items-center justify-center transition-all duration-500 group-hover:text-PrimaryColor-0 relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Content Strategy
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#1dda7d] before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-[#1dda7d] flex items-center justify-center transition-all duration-500 group-hover:text-[#1dda7d] relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Engineering & Services
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fcb900] before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-[#fcb900] flex items-center justify-center transition-all duration-500 group-hover:text-[#fcb900] relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Software Engineering
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fc5a3e] before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-[#fc5a3e] flex items-center justify-center transition-all duration-500 group-hover:text-[#fc5a3e] relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Revenue Generation
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
          <div className='px-10 lg:px-7 xl:px-10 pt-8 pb-[30px] rounded-lg bg-white group relative z-10 overflow-hidden'>
            <div className='inline-block relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#2ad4ff] before:rounded-full before:transition-all before:duration-700 before:-z-20 before:scale-0 group-hover:before:scale-[15] sm:group-hover:before:scale-[22] md:group-hover:before:scale-[15] 2xl:group-hover:before:scale-[17]'>
              <Link href={'/service_details'}>
                <button className='size-[46px] rounded-full text-xl text-white bg-[#2ad4ff] flex items-center justify-center transition-all duration-500 group-hover:text-[#2ad4ff] relative z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rounded-full after:scale-0 after:transition-all after:duration-500 after:-z-10 group-hover:after:scale-100'>
                  <FaPlus />
                </button>
              </Link>
            </div>
            <div className='relative z-10'>
              <h5 className='font-Rajdhani font-semibold text-xl sm:text-[22px] pb-2 text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-5'>
                Network Protection
              </h5>
              <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
                Future name metus faucibus eros metus clean magna erat design
                pro course.
              </p>
            </div>
            <img
              src={serviceBoxShape}
              draggable='false'
              className='absolute z-10 top-5 right-7 animate-rotational transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
