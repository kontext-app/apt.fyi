import { usePathname } from 'next/navigation';
import CurationListPage from 'components/CurationListPage';
// import TweetCommentsPage from 'components/TweetCommentsPage';

const CurationList = () => {
  
  return <CurationListPage initialCurationList={nameCuration}/>;
};

export default CurationList;