
import HeroSection from '@/components/HeroSection';
import GalleryCard from '@/components/GalleryCard';
import { useEffect } from 'react';

const Gallery = () => {
  // Images for gallery
  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1574006289228-69c8e8206e78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Championship Finals",
      description: "Our students competing at the national championship"
    },
    {
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Group Training",
      description: "Weekly group training session for intermediate students"
    },
    {
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "One-on-One Coaching",
      description: "Personalized technique refinement with advanced students"
    },
    {
      image: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Team Building",
      description: "Building camaraderie and teamwork among young athletes"
    },
    {
      image: "https://images.unsplash.com/photo-1590338952462-2c0f596b481c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Medal Ceremony",
      description: "Celebrating our champions' achievements"
    },
    {
      image: "https://images.unsplash.com/photo-1596122787821-95c4255bb936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Pre-competition Warmup",
      description: "Getting ready mentally and physically before a big match"
    },
    {
      image: "https://images.unsplash.com/photo-1529330261896-e738d39b1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Physical Conditioning",
      description: "Building strength and endurance for competition"
    },
    {
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Mental Training",
      description: "Developing focus and mental toughness"
    },
    {
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "International Competition",
      description: "Representing our team at worldwide events"
    }
  ];
  
  // Function to handle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.gallery-card');
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        
        if (isVisible) {
          setTimeout(() => {
            card.classList.remove('opacity-0');
            card.classList.add('animate-fade-in-up');
          }, index * 100);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <HeroSection
        title="GALLERY"
        subtitle="Moments captured from training sessions and competitions"
        backgroundImage="https://images.unsplash.com/photo-1600187488501-53a2de02fc54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Training & Competition Gallery</h2>
          <p className="section-subtitle">
            A visual journey through our champions' training and competition moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="gallery-card opacity-0">
              <GalleryCard
                image={item.image}
                title={item.title}
                description={item.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8">Want to be featured in our gallery?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our training programs and become part of our champion community
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
