import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Sample programs data
  const programs = [
    {
      title: "Beginners (8-10)",
      description: "Perfect for young athletes starting their journey. Focus on basic techniques, coordination, and building confidence.",
      features: [
        "Basic technique training",
        "Coordination development",
        "Fun and engaging activities",
        "Safety-first approach",
        "2 sessions per week"
      ],
      price: "Monthly",
      image: "/src/assets/images/programs/beginners.jpg"
    },
    {
      title: "Intermediate (11-13)",
      description: "For athletes ready to advance their skills. Emphasis on technique refinement and competition preparation.",
      features: [
        "Advanced technique training",
        "Competition preparation",
        "Physical conditioning",
        "Mental strength development",
        "3 sessions per week"
      ],
      price: "Monthly",
      image: "/src/assets/images/programs/intermediate.jpg"
    },
    {
      title: "Advanced (14-15)",
      description: "Intensive training for serious competitors. Focus on advanced techniques, strategy, and championship preparation.",
      features: [
        "Elite technique training",
        "Championship preparation",
        "Advanced conditioning",
        "Strategy development",
        "4-5 sessions per week"
      ],
      price: "Monthly",
      image: "/src/assets/images/programs/advanced.jpg"
    },
    {
      title: "Championship Training",
      description: "Specialized program for competitive athletes. Comprehensive training for national and international competitions.",
      features: [
        "Competition-specific training",
        "Intensive conditioning",
        "Mental preparation",
        "Video analysis",
        "Customized schedule"
      ],
      price: "Monthly",
      image: "/src/assets/images/programs/championship.jpg"
    },
    {
      title: "Private Sessions",
      description: "One-on-one training for personalized attention. Perfect for athletes seeking focused improvement.",
      features: [
        "Personalized training",
        "Flexible scheduling",
        "Individual attention",
        "Customized program",
        "Progress tracking"
      ],
      price: "Per Session",
      image: "/src/assets/images/programs/private.jpg"
    }
  ];
  
  return (
    <>
      <HeroSection
        title="TRAINING PROGRAMS"
        subtitle="Specialized programs designed for different age groups and skill levels"
        backgroundImage="/src/assets/images/hero/backgroundHero.jpg"
      />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Choose the program that best fits your child's age and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              features={program.features}
              price={program.price}
              image={program.image}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Training Methodology Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Training Methodology</h2>
            <p className="section-subtitle">
              A comprehensive approach to developing young champions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "Mastery of proper form and technique is the foundation of our training. We emphasize correct execution over speed or power to develop solid fundamentals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-coach-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Physical Conditioning",
                description: "Age-appropriate strength, endurance, and flexibility training designed specifically for young athletes to build athletic capability without overtraining.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-coach-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Mental Development",
                description: "Training the mind is as important as training the body. We focus on focus, resilience, emotional control, and competitive mindset development.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-coach-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "Character Building",
                description: "We emphasize respect, discipline, integrity, and perseverance both in and out of training. Champions are defined by their character as much as by their skills.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-coach-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((method, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear what parents and students have to say about our programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The structured program has done wonders for my son's confidence. He's gone from being shy to speaking up in class and has even started helping younger kids. The discipline he's learned has carried over to his schoolwork too."
            author="أحمد محمد"
            role="Parent of Omar, 12"
            index={0}
          />
          
          <TestimonialCard
            quote="I was looking for more than just physical training for my daughter. This program delivers on character development, mental strength, and technical skills. She's learned to face challenges head-on, both in competitions and in life."
            author="فاطمة علي"
            role="Parent of Anas, 14"
            index={1}
          />
          
          <TestimonialCard
            quote="After trying several other martial arts schools, we found the perfect fit here. The championship program has helped my son improve rapidly and he just earned his first national medal. The coaches truly understand how to develop young athletes properly."
            author="خالد عبدالله"
            role="Parent of Zain, 15"
            index={2}
          />
        </div>
      </section>
    </>
  );
};

export default Programs;
