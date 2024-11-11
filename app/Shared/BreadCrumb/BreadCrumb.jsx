import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  breadCrumbLink,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-20">
      <div className='Container'>
        <h1 className='font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize'>
          {breadCrumbTitle}
        </h1>
        <div className='border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2'>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start'>
            <li>
              <Link href={'/'}>
                <button className='font-Rajdhani font-medium text-lg text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'>
                  <IoHome className='text-PrimaryColor-0' />
                  Home
                </button>
              </Link>
            </li>
            <li>
              <div className='text-white hidden sm:block'>{breadCrumbIcon}</div>
            </li>
            <li>
                <button className='font-Rajdhani font-medium text-lg capitalize text-white'>
                  {breadCrumbLink}
                </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
