
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  ageRange: string;
  features: string[];
  slug: string;
  index: number;
  color?: 'blue' | 'red' | 'yellow';
}

const ProgramCard = ({ 
  title, 
  description, 
  image, 
  price, 
  ageRange, 
  features,
  slug,
  index,
  color = 'blue'
}: ProgramCardProps) => {
  const animationDelay = `${index * 100}ms`;
  
  const colorClasses = {
    blue: "bg-coach-blue text-white",
    red: "bg-coach-red text-white",
    yellow: "bg-coach-yellow text-gray-900"
  };
  
  const headerClass = colorClasses[color];
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in-up card-hover"
      style={{ animationDelay }}
    >
      <div className={`p-6 ${headerClass}`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="ml-1 text-sm opacity-75">/month</span>}
        </div>
        <div className="mt-2 text-sm">
          Age Group: {ageRange}
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to={`/contact?program=${slug}`}
          className="inline-flex items-center text-coach-blue font-semibold hover:text-coach-darkBlue transition-colors"
        >
          Learn More
          <ArrowRight className="ml-1" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
