import HeroSection from '@/components/HeroSection';
import { getAssetPath } from '@/lib/utils';

const About = () => {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath('/src/assets/images/hero/background.jpg')})`,
        }}
      >
        <HeroSection
          title="ABOUT ME"
          subtitle="Learn about my journey, coaching philosophy, and passion for developing young champions"
        />
      </div>
      
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">My Coaching Journey</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in martial arts and competitive fighting, I've dedicated my professional life to nurturing young talent and helping children develop both physically and mentally through combat sports.
            </p>
            <p className="text-gray-600 mb-6">
              My journey began as a competitive fighter myself, achieving national champion status three times before discovering my true passion: coaching the next generation. Since then, I've trained over 200 young athletes, with many going on to achieve success in national and international championships.
            </p>
            <p className="text-gray-600">
              I hold advanced certifications in youth sports coaching, child psychology, and sports medicine, ensuring that my training programs are both effective and safe for developing athletes.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://github.com/abdurrahmanninja/coach-abdualrhman-33/blob/main/src/assets/images/personal/1.jpg?raw=true"
                alt="Coach portrait" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coach-blue text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold">200+</span>
                <span className="text-sm uppercase tracking-wide leading-tight">Students Coached</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">My Coaching Philosophy</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-coach-red text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-600">
                Safety is always the top priority in my programs. All training is age-appropriate with proper supervision and safety equipment. I maintain current CPR and first aid certifications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-coach-blue text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Holistic Development</h3>
              <p className="text-gray-600">
                I focus on developing the whole athlete - physical skills, mental toughness, emotional intelligence, and character. My students learn discipline, respect, and resilience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-coach-yellow text-gray-800 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Individualized Approach</h3>
              <p className="text-gray-600">
                Every child is unique. I adapt my coaching methods to fit each student's learning style, physical abilities, and personal goals while encouraging constant growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Certifications & Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Certifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">Advanced Youth Sports Coaching Certification</h4>
                  <p className="text-gray-600">National Sports Academy</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">Child Sport Psychology Certification</h4>
                  <p className="text-gray-600">International Sports Psychology Association</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">Sports Medicine & Injury Prevention</h4>
                  <p className="text-gray-600">Sports Medicine Institute</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">5th Degree Black Belt</h4>
                  <p className="text-gray-600">International Martial Arts Federation</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Coaching Achievements</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">Coach of the Year</h4>
                  <p className="text-gray-600">National Youth Sports Association, 2022</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">15 Students Qualified for National Championships</h4>
                  <p className="text-gray-600">2021-2023</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">7 International Championship Medals</h4>
                  <p className="text-gray-600">Coached students in international competitions</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-coach-red mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900">Featured Coach</h4>
                  <p className="text-gray-600">Youth Sports Magazine, 2023 Feature Article</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="bg-coach-blue py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title text-white mb-8">My Vision</h2>
          <p className="text-xl mb-6">
            "My goal is not just to create champions in the ring, but to develop young people with the discipline, confidence, and resilience to succeed in all aspects of life. When a child learns to face challenges in training, they build the mental strength to overcome obstacles everywhere."
          </p>
          <p className="text-lg font-semibold">- Coach Ninja</p>
        </div>
      </section>
    </div>
  );
};

export default About;
