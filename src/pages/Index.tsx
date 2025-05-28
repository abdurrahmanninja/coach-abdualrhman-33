import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import GalleryCard from '@/components/GalleryCard';
import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const Index = () => {
  // Function to handle reveal animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in-up');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath('/src/assets/images/hero/building.jpg')})`,
        }}
      >
        <HeroSection
          title="TRAIN LIKE A CHAMPION"
          subtitle="Professional fighting coach specialized in training young champions for national and international competitions."
          backgroundImage="images/hero/background.jpg"
          buttonText="Start Your Journey"
          buttonLink="/contact"
        />
      </div>
      
      {/* About Section */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll opacity-0">
            <h2 className="section-title">Building Champions From The Ground Up</h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience in training young fighters, I specialize in developing both the physical and mental skills necessary to excel in competitive fighting sports.
            </p>
            <p className="text-gray-600 mb-8">
              My unique coaching methodology focuses on discipline, technique refinement, and building confidence in young athletes ages 8-15, preparing them for success in both local and international championships.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
          <div className="relative reveal-on-scroll opacity-0">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={getAssetPath('images/hero/building.jpg')}
                alt="Coach teaching martial arts" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-coach-red text-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wide">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Training Programs</h2>
            <p className="section-subtitle">
              Choose the perfect training program tailored to your child's age and skill level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Beginners (8-10)"
              description="Introduction to basic techniques, coordination development, and building core strength in a fun, engaging environment."
              image="/placeholder.svg"
              price="$120"
              ageRange="8-10 years"
              features={[
                "2 sessions per week",
                "Basic technique training",
                "Focus on coordination",
                "Fun group activities",
                "Introduction to discipline"
              ]}
              slug="beginners"
              index={0}
              color="blue"
            />
            
            <ProgramCard
              title="Intermediate (11-13)"
              description="Advancing techniques, introducing competitive elements, and developing mental strength for young fighters."
              image="/placeholder.svg"
              price="$150"
              ageRange="11-13 years"
              features={[
                "3 sessions per week",
                "Advanced technique training",
                "Sparring practice",
                "Competition preparation",
                "Mental resilience training"
              ]}
              slug="intermediate"
              index={1}
              color="red"
            />
            
            <ProgramCard
              title="Advanced (14-15)"
              description="Elite training for serious competitors preparing for championships with personalized coaching and development plans."
              image="/placeholder.svg"
              price="$180"
              ageRange="14-15 years"
              features={[
                "4 sessions per week",
                "Elite technique refinement",
                "Championship preparation",
                "Personalized training plans",
                "Recovery & nutrition guidance"
              ]}
              slug="advanced"
              index={2}
              color="yellow"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs" className="btn-primary inline-flex items-center">
              View All Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Training Gallery</h2>
          <p className="section-subtitle">
            See our champions in action during training sessions and competitions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GalleryCard
            image={getAssetPath('images/home-gallery/1.jpg')}
            title="Championship Finals"
            description="Our students competing at the national championship"
            index={0}
          />
          
          <GalleryCard
            image={getAssetPath('images/home-gallery/2.jpg')}
            title="Group Training"
            description="Weekly group training session for intermediate students"
            index={1}
          />
          
          <GalleryCard
            image={getAssetPath('images/home-gallery/3.jpg')}
            title="One-on-One Coaching"
            description="Personalized technique refinement with advanced students"
            index={2}
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary inline-flex items-center">
            View Full Gallery
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-coach-blue to-coach-darkBlue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">What Parents Say</h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the parents of our champions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="My son has transformed not just physically, but mentally too. His confidence has soared since joining the advanced program. The discipline he's learned extends to his schoolwork too!"
              author="عبدالله محمد"
              role="Parent of Youssef, 14"
              index={0}
            />
            
            <TestimonialCard
              quote="The coach has a gift for connecting with kids. My daughter was shy at first, but now she's thriving in competitions and has made great friends. The positive environment makes all the difference."
              author="نورا أحمد"
              role="Parent of Mohammed, 12"
              index={1}
            />
            
            <TestimonialCard
              quote="We tried several other programs before finding this one. The difference is the focus on both technical skills and character development. My son just won his first regional championship!"
              author="محمد علي"
              role="Parent of Karim, 10"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Ready to Start Your Child's Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our championship training programs and help your child develop discipline, confidence, and world-class fighting skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/programs" className="btn-primary">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
