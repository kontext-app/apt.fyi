import { usePathname } from 'next/navigation';
import CurationListPage from 'components/CurationListPage';

const CurationList = () => {
  const pathname = usePathname();

  const decodedPathname = pathname ? pathname.replace(/\+/g, '%20') : '';
  const nameCuration = decodedPathname ? decodeURIComponent(decodedPathname.split('/').pop() || '') : "";

  return <CurationListPage initialCurationList={nameCuration}/>;
};

export default CurationList;