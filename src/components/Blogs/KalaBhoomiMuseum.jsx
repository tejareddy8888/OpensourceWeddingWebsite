import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const KalaBhoomiMuseum = () => {
  const blogData = getBlogData('kalaBhoomiMuseum');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default KalaBhoomiMuseum;