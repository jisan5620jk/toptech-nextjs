import { FaArrowRightLong } from 'react-icons/fa6';
import Feature from './Feature/Feature';
import Career from './Career';
import BreadCrumb from '@/app/Shared/BreadCrumb/BreadCrumb';

const page = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Careers'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Careers'}
      />
      <Career />
      <Feature />
    </>
  );
};

export default page;
