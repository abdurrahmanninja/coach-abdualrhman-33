
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  index: number;
}

const TestimonialCard = ({ quote, author, role, image, index }: TestimonialCardProps) => {
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          {/* Quote icon */}
          <svg className="w-8 h-8 text-coach-blue opacity-30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6667 17.3333C8.86667 17.3333 7.33333 18.8667 7.33333 20.6667C7.33333 22.4667 8.86667 24 10.6667 24C12.4667 24 14 22.4667 14 20.6667C14 14.9333 9.33333 10.6667 4 10.6667V14C7.6 14 10.6667 17.0667 10.6667 20.6667V17.3333ZM21.3333 17.3333C19.5333 17.3333 18 18.8667 18 20.6667C18 22.4667 19.5333 24 21.3333 24C23.1333 24 24.6667 22.4667 24.6667 20.6667C24.6667 14.9333 20 10.6667 14.6667 10.6667V14C18.2667 14 21.3333 17.0667 21.3333 20.6667V17.3333Z" />
          </svg>
        </div>
        
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          
          <div>
            <p className="font-bold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
