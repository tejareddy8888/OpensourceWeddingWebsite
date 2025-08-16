import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const LingarajTemple = () => {
  const blogData = getBlogData('lingarajTemple');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default LingarajTemple;