
interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  index: number;
}

const VideoCard = ({ title, description, thumbnailUrl, videoUrl, index }: VideoCardProps) => {
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-coach-red/80 flex items-center justify-center cursor-pointer hover:bg-coach-red transition-colors duration-300">
            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-coach-blue font-semibold hover:text-coach-darkBlue transition-colors"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
