import BlogTemplate from './BlogTemplate';
import { getBlogData } from '../../data/blogData';

const NandankananZoo = () => {
  const blogData = getBlogData('nandankananZoo');
  
  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return <BlogTemplate blogData={blogData} />;
};

export default NandankananZoo;