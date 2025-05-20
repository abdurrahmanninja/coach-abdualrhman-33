
import { useState } from 'react';

interface GalleryCardProps {
  image: string;
  title: string;
  description?: string;
  index: number;
}

const GalleryCard = ({ image, title, description, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${isHovered ? 'from-black/90 via-black/50' : 'from-black/70 to-transparent'} transition-opacity duration-300 flex flex-col justify-end p-5 text-white`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && isHovered && (
          <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(10px)' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
