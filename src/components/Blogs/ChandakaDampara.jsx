import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const ChandakaDampara = () => {
  const blogData = getBlogData('chandakaDampara');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default ChandakaDampara;