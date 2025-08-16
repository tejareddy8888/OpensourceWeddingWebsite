import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBlogPosts, getRouteFromId } from '../data/blogData';

const Blog = ({ visible }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  // Get all blog posts from data file and format them for display
  const allBlogData = getAllBlogPosts();
  
  const blogPosts = allBlogData.map(blog => ({
    id: blog.id,
    title: blog.title,
    excerpt: blog.subtitle,
    date: `Estimated Time: ${blog.estimatedTime}`,
    author: blog.author,
    category: blog.category.name,
    image: blog.heroImage,
    route: `/blogs/${getRouteFromId(blog.id)}`,
    categoryStyle: blog.category.badgeStyle
  }));

  const handleBlogClick = (route) => {
    navigate(route);
  };

  return (
    <section id="travelblog" className="section py-20 bg-secondary animate-hidden animate-item" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Our Suggestions to travel around</h2>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            To make your travel plans more enjoyable, we've curated some of the most popular destinations around Odisha, India.
          </p>
          <p className="text-gray-600">
            Click on any post to read the full travel guide
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 group"
              onClick={() => handleBlogClick(post.route)}
            >
              <div className="h-48 relative overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-bride_green/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Internal link icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white bg-black/50 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${post.categoryStyle || 'bg-primary/10 text-primary'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-xl font-serif mb-3 text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
                    <span className="mr-1">Read Guide</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-bride_green/10 p-8 rounded-xl max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-serif mb-4 text-primary">Plan Your Perfect Trip</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These destinations offer a perfect blend of culture, nature, and spirituality. Plan your itinerary to make the most of your visit to Odisha.
            </p>
            <p className="text-sm text-gray-600">
              Showing {blogPosts.length} destinations • Distance from venue varies from 0-65 km
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;