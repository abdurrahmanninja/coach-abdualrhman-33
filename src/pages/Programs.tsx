
import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Sample programs data
  const programs = [
    {
      title: "Beginners (8-10)",
      description: "Introduction to martial arts fundamentals in a fun, supportive environment. Focused on basic techniques, coordination development, and building core strength.",
      image: "/placeholder.svg",
      price: "$120",
      ageRange: "8-10 years",
      features: [
        "2 sessions per week (60 minutes each)",
        "Basic technique training",
        "Focus on coordination and balance",
        "Fun group activities and games",
        "Introduction to discipline and respect",
        "Quarterly progress evaluations"
      ],
      slug: "beginners",
      color: "blue"
    },
    {
      title: "Intermediate (11-13)",
      description: "Building on fundamentals with more advanced techniques and the introduction of competitive elements. Develops physical abilities and mental focus.",
      image: "/placeholder.svg",
      price: "$150",
      ageRange: "11-13 years",
      features: [
        "3 sessions per week (75 minutes each)",
        "Advanced technique training",
        "Introduction to sparring practices",
        "Competition preparation",
        "Physical conditioning focus",
        "Mental resilience training",
        "Monthly progress evaluations"
      ],
      slug: "intermediate",
      color: "red"
    },
    {
      title: "Advanced (14-15)",
      description: "Elite training for serious competitors preparing for championships with personalized coaching and comprehensive development plans.",
      image: "/placeholder.svg",
      price: "$180",
      ageRange: "14-15 years",
      features: [
        "4 sessions per week (90 minutes each)",
        "Elite technique refinement",
        "Regular sparring practice",
        "Competition strategy development",
        "Personalized training plans",
        "Video analysis of techniques",
        "Strength and conditioning program",
        "Recovery and nutrition guidance"
      ],
      slug: "advanced",
      color: "yellow"
    },
    {
      title: "Championship Training",
      description: "Specialized program for athletes preparing for national and international competitions with intensive, personalized training.",
      image: "/placeholder.svg",
      price: "$220",
      ageRange: "10-15 years (by qualification)",
      features: [
        "5 sessions per week (customized duration)",
        "One-on-one technique coaching",
        "Competition-specific preparation",
        "Advanced strategy development",
        "Mental performance coaching",
        "Detailed performance analysis",
        "Nutrition and recovery planning",
        "Competition scheduling support"
      ],
      slug: "championship",
      color: "blue"
    },
    {
      title: "Private Sessions",
      description: "Personalized one-on-one training sessions tailored to individual needs, goals, and learning pace with direct coach attention.",
      image: "/placeholder.svg",
      price: "Custom",
      ageRange: "8-15 years",
      features: [
        "Flexible scheduling options",
        "Completely personalized curriculum",
        "Focused technique refinement",
        "Goal-specific training plans",
        "Detailed progress tracking",
        "Video analysis and feedback",
        "Parent consultation sessions",
        "Can be combined with group programs"
      ],
      slug: "private",
      color: "red"
    }
  ];
  
  return (
    <>
      <HeroSection
        title="TRAINING PROGRAMS"
        subtitle="Comprehensive training programs tailored for different age groups and skill levels"
        backgroundImage="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Programs Overview Section */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Training Programs</h2>
          <p className="section-subtitle">
            Structured training designed to develop skills, discipline, and confidence in young fighters
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              price={program.price}
              ageRange={program.ageRange}
              features={program.features}
              slug={program.slug}
              index={index}
              color={program.color as 'blue' | 'red' | 'yellow'}
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
            author="Amanda Johnson"
            role="Parent of Michael, 12"
            index={0}
          />
          
          <TestimonialCard
            quote="I was looking for more than just physical training for my daughter. This program delivers on character development, mental strength, and technical skills. She's learned to face challenges head-on, both in competitions and in life."
            author="Robert Chen"
            role="Parent of Lily, 14"
            index={1}
          />
          
          <TestimonialCard
            quote="After trying several other martial arts schools, we found the perfect fit here. The championship program has helped my son improve rapidly and he just earned his first national medal. The coaches truly understand how to develop young athletes properly."
            author="Thomas Williams"
            role="Parent of Jacob, 15"
            index={2}
          />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about our training programs
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "What equipment or gear does my child need?",
                answer: "Beginners only need comfortable athletic clothing to start. As they progress, we'll provide a list of recommended equipment including protective gear, uniform, and training accessories. Many items are available through our pro shop at a discounted rate for students."
              },
              {
                question: "Is previous experience required to join?",
                answer: "No prior experience is required for our beginners programs. We start with fundamentals and progress at a pace appropriate for each student. For intermediate and advanced programs, we conduct an assessment to determine the appropriate placement."
              },
              {
                question: "How do you ensure safety during training?",
                answer: "Safety is our top priority. We maintain appropriate student-to-instructor ratios, use quality safety equipment, follow progressive training methods, and all coaches are certified in first aid and CPR. Our facilities are regularly inspected and maintained to prevent hazards."
              },
              {
                question: "What's the process for joining competitions?",
                answer: "Students are eligible for competition once they've mastered the required techniques and demonstrated appropriate physical and mental readiness. We first introduce local exhibitions, then progress to regional and national competitions based on the student's development and goals."
              },
              {
                question: "Can parents watch training sessions?",
                answer: "Yes, we have a designated viewing area where parents can observe classes. We also host regular parent observation days where coaches explain the training methodology and answer questions. For championship training, we schedule regular parent-coach meetings to discuss progress."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <div className="bg-gradient-to-r from-coach-blue to-coach-darkBlue rounded-lg p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join our champion community and start your child's journey to excellence today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-accent">
              Schedule a Free Trial
            </Link>
            <Link to="/contact" className="text-white border-2 border-white hover:bg-white hover:text-coach-blue transition-colors font-semibold py-3 px-6 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
