import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '@/lib/utils';

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
  backgroundImage = "/src/assets/images/hero/backgroundHero.jpg",
  buttonText = "Learn More",
  buttonLink = "/about",
}: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" 
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getAssetPath(backgroundImage)})`,
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/905395900154"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {buttonText || "Start Training"}
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-coach-blue rounded-full filter blur-3xl opacity-20 animate-pulse-grow"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-coach-red rounded-full filter blur-3xl opacity-20 animate-pulse-grow"></div>
    </div>
  );
};

export default HeroSection;
