import { useState } from 'react';
import { getAssetPath } from '@/lib/utils';

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const GalleryCard = ({ image, title, description, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md opacity-0 animate-fade-in-up card-hover bg-white dark:bg-coach-dark-card"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <img 
          src={image}
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${isHovered ? 'from-black/90 via-black/50' : 'from-black/70 to-transparent'} transition-opacity duration-300 flex flex-col justify-end p-5 text-white pointer-events-none`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && isHovered && (
          <p className="text-sm text-gray-200 opacity-100 transform translate-y-0 transition-all duration-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
