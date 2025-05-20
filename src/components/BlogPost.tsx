
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  index: number;
}

const BlogPost = ({ title, excerpt, date, author, image, slug, index }: BlogPostProps) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-block text-coach-blue font-semibold hover:text-coach-darkBlue transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
