import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const OdishaStateMuseum = () => {
  const blogData = getBlogData('odishaStateMuseum');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default OdishaStateMuseum;