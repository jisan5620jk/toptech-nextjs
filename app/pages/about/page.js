const About = () => {
  return (
    <div>
      <div className='group px-4 sm:px-10 lg:px-5 xl:px-8 2xl:px-10 pt-10 pb-11 bg-white bg-opacity-30 text-center rounded-3xl border-2 border-white relative z-10 overflow-hidden transition-all duration-500 hover:border-blue-400'>
        <span className='absolute bg-blue-400 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
        <span className='absolute bg-blue-400 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
        <span className='absolute bg-blue-400 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
        <span className='absolute bg-blue-400 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
        <div className='flex justify-between items-center border-b-2 border-white pb-[30px] mb-10'>
          <h5 className=' font-semibold text-[22px] 2xl:text-[25px] text-white transition-all duration-500 group-hover:text-white'>
            Our Professionals
          </h5>
        </div>
        <h4 className=' font-semibold text-[30px] text-white mt-7 flex items-center gap-2 justify-center transition-all duration-500 group-hover:text-white'>
          180+{' '}
          <span className=' font-semibold text-lg text-blue-400 transition-all duration-500 group-hover:text-white'>
            Doctors
          </span>
        </h4>
        <p className=' text-TextColor-0 transition-all duration-500 group-hover:text-white mt-2'>
          Rapidiously reinvent long-term impact collaboration
        </p>
      </div>
    </div>
  );
};
export default About;