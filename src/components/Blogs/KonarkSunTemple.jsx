import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const KonarkSunTemple = () => {
  const blogData = getBlogData('konarkSunTemple');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default KonarkSunTemple;