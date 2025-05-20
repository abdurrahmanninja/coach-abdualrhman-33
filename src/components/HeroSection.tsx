
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  buttonText = "Learn More",
  buttonLink = "/about",
}: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" 
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up animate-delay-100">
          {subtitle}
        </p>
        <Link 
          to={buttonLink}
          className="inline-flex items-center bg-coach-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 animate-fade-in-up animate-delay-200"
        >
          {buttonText}
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-coach-blue rounded-full filter blur-3xl opacity-20 animate-pulse-grow"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-coach-red rounded-full filter blur-3xl opacity-20 animate-pulse-grow"></div>
    </div>
  );
};

export default HeroSection;
