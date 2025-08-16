import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const ChilikaLake = () => {
  const blogData = getBlogData('chilikaLake');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default ChilikaLake;