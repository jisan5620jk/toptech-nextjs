/* eslint-disable react/prop-types */
import Link from 'next/link';

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className='group rounded-t-md relative z-10'>
      <div className='relative overflow-hidden rounded-t-md rounded-b-full z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:rounded-t-md before:transition-all before:duration-500 before:-z-20 after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:bg-PrimaryColor-0 after:transition-all after:rounded-t-md after:duration-500 after:-z-10 group-hover:after:h-full transition-all duration-500 text-center pt-[30px] pb-[200px]'>
        <h5 className='font-Rajdhani font-semibold text-[28px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]'>
          {teamTitle}
        </h5>
        <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white'>
          {teamDesc}
        </p>
        <ul className='absolute left-1/2 bottom-0 group-hover:bottom-[150px] opacity-0 group-hover:opacity-100 -translate-x-1/2 flex gap-3 justify-center transition-all duration-500 '>
          <li>
            <Link href={'/'}>
              <button className='size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100'>
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <button className='size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100'>
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <button className='size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100'>
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className='absolute z-10 -bottom-14 left-0 right-0 group-hover:-bottom-[96px] text-center inline-block overflow-hidden transition-all duration-500 -mt-32 group-hover:-mt-24'>
        <div>
          <img
            src={teamThumb}
            className='w-[inherit] m-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
