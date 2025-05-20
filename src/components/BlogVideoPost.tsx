import { useState } from 'react';

interface BlogVideoPostProps {
  title: string;
  content: string;
  videoNumber: number;
  date: string;
  index: number;
}

const BlogVideoPost = ({ title, content, videoNumber, date, index }: BlogVideoPostProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="bg-white dark:bg-coach-dark-card rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
    >
      <div className="relative w-full max-w-md mx-auto" style={{ paddingTop: '177.78%' }}> {/* 9:16 Aspect Ratio for vertical videos */}
        {!isPlaying ? (
          <>
            <img
              src={`/src/assets/images/blog-thumbnails/${videoNumber}.jpg`}
              alt={`Thumbnail for ${title}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-coach-red"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <video
            src={`/src/assets/videos/blog/${videoNumber}.mp4`}
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls
            autoPlay
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 dark:text-coach-dark-text-secondary">{date}</span>
          <span className="text-sm font-semibold text-coach-blue">Video #{videoNumber}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-coach-dark-text-primary">{title}</h3>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-coach-dark-text-secondary">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogVideoPost; 