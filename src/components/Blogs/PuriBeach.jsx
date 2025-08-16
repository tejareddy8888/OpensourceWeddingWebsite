import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const PuriBeach = () => {
  const blogData = getBlogData('puriBeach');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default PuriBeach;