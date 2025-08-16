import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const UdayagiriKhandagiri = () => {
  const blogData = getBlogData('udayagiriKhandagiri');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default UdayagiriKhandagiri;