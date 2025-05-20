
import HeroSection from '@/components/HeroSection';
import VideoCard from '@/components/VideoCard';

const Videos = () => {
  // Sample videos data
  const educationalVideos = [
    {
      title: "Physical Training Benefits for Kids",
      description: "Learn why physical training is essential for children's development. This video covers the physical, mental, and social benefits of structured physical activity for young athletes.",
      thumbnailUrl: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example1",
    },
    {
      title: "Martial Arts for Children: A Parent's Guide",
      description: "Everything parents need to know about martial arts training for kids. Learn about different styles, safety considerations, and how to choose the right program for your child.",
      thumbnailUrl: "https://images.unsplash.com/photo-1574006289228-69c8e8206e78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example2",
    },
    {
      title: "Building Discipline Through Combat Sports",
      description: "How fighting sports help children develop self-discipline and focus. This video explores the mental aspects of training and competition.",
      thumbnailUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example3",
    }
  ];
  
  const techniqueVideos = [
    {
      title: "Basic Stance and Movement",
      description: "Learn the proper fighting stance and fundamental footwork for young athletes. These basics form the foundation for all advanced techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example4",
    },
    {
      title: "Defense Techniques for Beginners",
      description: "Essential defensive moves every young fighter should master. This video demonstrates proper blocking, evasion, and counter techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example5",
    },
    {
      title: "Competition Preparation Routine",
      description: "A comprehensive guide to preparing for tournaments, both physically and mentally. Learn pre-competition routines used by champions.",
      thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example6",
    }
  ];
  
  const testimonialVideos = [
    {
      title: "Alex's Journey to National Champion",
      description: "Follow 14-year-old Alex's training journey from beginner to national champion over the course of two years. See his progress and dedication.",
      thumbnailUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example7",
    },
    {
      title: "Parents Testimonials: The Impact of Training",
      description: "Parents share how martial arts training has positively affected their children's discipline, confidence, and overall development.",
      thumbnailUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example8",
    },
    {
      title: "Team Success Story: International Competition",
      description: "Watch our team's journey to the international championship and the challenges they overcame to represent our country on the world stage.",
      thumbnailUrl: "https://images.unsplash.com/photo-1528968773180-b0a1507230f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://youtube.com/watch?v=example9",
    }
  ];
  
  return (
    <>
      <HeroSection
        title="EDUCATIONAL VIDEOS"
        subtitle="Learn about the benefits of martial arts training for kids through our informative video content"
        backgroundImage="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Educational Videos Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">For Parents</h2>
          <p className="section-subtitle">
            Educational videos explaining the benefits of martial arts and fighting sports for children
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalVideos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              thumbnailUrl={video.thumbnailUrl}
              videoUrl={video.videoUrl}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Technique Videos Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Training Techniques</h2>
            <p className="section-subtitle">
              Learn proper techniques and training methods for young fighters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniqueVideos.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                description={video.description}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Videos Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from our students and their parents about their journey and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialVideos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              thumbnailUrl={video.thumbnailUrl}
              videoUrl={video.videoUrl}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* YouTube Channel CTA */}
      <section className="bg-coach-red text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Subscribe to Our YouTube Channel</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get access to exclusive training tips, technique breakdowns, and behind-the-scenes content from our competitions and training sessions.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-coach-red font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>
    </>
  );
};

export default Videos;
