import { GiCheckMark } from 'react-icons/gi';
import integrationThumb from '../../../public/images/integration-thumb.png';
import integrationShape from '../../../public/images/integration-thumb-shape.png';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';

const Integration = () => {
  return (
    <section className='pt-20 pb-[70px] 2xl:pb-6 bg-[url(/images/integration-bg.jpg)] bg-cover bg-no-repeat bg-center'>
      <div className='Container'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-0'>
          <div>
            <h5 className='font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5'>
              Integrations
            </h5>
            <h1 className='font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4'>
              Get Raeltime Visibility Digital
              <br /> Sass Software{`'`}s
            </h1>
            <p className='font-Nunito text-TextColor2-0'>
              Conveniently provide access to leading-edge imperatives whereas{' '}
              <br className='hidden md:block lg:hidden xl:block' />
              interfaces. Uniquely network cutting-edge niche markets whereas{' '}
              <br className='hidden md:block lg:hidden xl:block' />
              Assertively disseminate market
            </p>
            <ul className='flex flex-col sm:flex-row sm:items-center gap-[50px] mt-[30px] mb-11'>
              <li className='flex items-center gap-2 font-Nunito text-HeadingColor-0 text-lg'>
                <GiCheckMark
                  size={'20'}
                  className='text-[#42c090]'
                />
                Easy & Fast Download
              </li>
              <li className='flex items-center gap-2 font-Nunito text-HeadingColor-0 text-lg'>
                <GiCheckMark
                  size={'20'}
                  className='text-[#42c090]'
                />
                Unlimited Users
              </li>
            </ul>
            <Link href={'/about'}>
              <button className='primary-btn5'>
                {`Learn More`}
                <HiOutlineArrowRight size={'20'} />
              </button>
            </Link>
          </div>
          <div className='relative z-10'>
            <Image
              src={integrationThumb}
              draggable='false'
              alt='Integration Image'
              className='2xl:max-w-[inherit] 2xl:-ml-8'
            />
            <Image
              src={integrationShape}
              draggable='false'
              alt='Integration Shape'
              className='absolute top-0 left-0 lg:-left-10 -z-10 2xl:-left-20 hidden md:block'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
