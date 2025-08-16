import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const PuriTemple = () => {
  const blogData = getBlogData('puriTemple');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default PuriTemple;