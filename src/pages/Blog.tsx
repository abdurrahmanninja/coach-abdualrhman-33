import HeroSection from '@/components/HeroSection';
import BlogVideoPost from '@/components/BlogVideoPost';

const Blog = () => {
  // Blog video posts data
  const blogPosts = [
    {
      title: "Sleep: The Hidden Key to Your Child's Success",
      content: "Did you know that lack of sleep could be a major cause of your child's anxiety and stress? When children don't get enough sleep, they experience constant tension throughout the day and struggle to concentrate. This leads to both physical and mental exhaustion, significantly impacting their activity levels and emotional well-being. That's why it's crucial to ensure your child gets 8-12 hours of sleep daily for optimal performance. Adequate sleep equals mental peace, high concentration, and positive energy! The effects of sleep deprivation aren't just immediate - they can cause long-term issues. Don't underestimate the importance of sleep hours; make it a priority alongside nutrition and hydration. Create a calm, quiet sleeping environment and avoid screens (phones and TV) at least one hour before bedtime. Your child's health is in your hands - let them sleep well and live each day with energy and vitality!",
      videoNumber: 1,
      date: "May 15, 2024"
    },
    {
      title: "The Hidden Impact of Sugar on Your Child's Health",
      content: "Many parents don't realize the significant impact sugar has on their children's concentration and overall health. In this video, you'll learn why we need to reduce sugar in our children's diet and discover healthy alternatives we can use instead. Sugar doesn't just contribute to weight gain in children; it can also cause immune system issues and concentration problems. Watch the video to learn how to protect your child from these harmful effects. If you want your child to be more active, healthier, and stronger, you need to monitor their daily sugar intake. We'll discuss the dangers of sugar and how to replace it with more beneficial options. Excessive sugar in children's food can lead to cavities, weight gain, and weakened immunity. That's why we need to start reducing it and teach our children to make healthy food choices. Are you paying attention to your children's healthy eating habits? Are you limiting harmful sweets and sugars in their diet?",
      videoNumber: 2,
      date: "May 12, 2024"
    },
    {
      title: "The Dark Side of Electronic Games: Protecting Your Child's Well-being",
      content: "The impact of electronic games on our children's physical, mental, and social health is more significant than many parents realize. Let's explore the three major areas of concern:\n\nPhysical Health Risks:\n• Eye strain from prolonged screen exposure\n• Back problems due to poor posture during extended gaming sessions\n• Disrupted sleep patterns affecting overall health\n\nMental Health Concerns:\n• Increased anxiety and stress from competitive gaming and failure\n• Development of gaming dependency affecting psychological well-being\n• Potential behavioral changes, including increased aggression\n\nSocial Development Impact:\n• Reduced social interaction leading to isolation\n• Decline in academic performance and grades\n• Decreased participation in physical activities and sports\n\nAs parents, it's crucial to monitor and manage your child's gaming time to prevent these negative effects. In this video, we'll provide practical strategies for setting healthy boundaries and promoting a balanced lifestyle that includes physical activity, social interaction, and proper rest. Remember, your guidance can help your child develop a healthy relationship with technology while maintaining their overall well-being.",
      videoNumber: 3,
      date: "May 10, 2024"
    },
    {
      title: "The Transformative Power of Sports in Your Child's Development",
      content: "Sports play a crucial role in your child's development, offering benefits across multiple aspects of their life. Let's explore these benefits in detail:\n\nPhysical Health Benefits:\n• Enhanced physical fitness, building stronger muscles and improving body flexibility\n• Improved overall health, reducing the risk of chronic diseases like obesity and diabetes\n• Better sleep quality and patterns\n\nMental Health Benefits:\n• Boosted self-confidence and sense of independence\n• Improved stress management and ability to handle challenging situations\n• Enhanced social skills and better communication with others\n\nEducational Benefits:\n• Strengthened teamwork abilities and cooperation skills\n• Improved learning capacity and better information retention\n\nFor Parents:\nThe key to maximizing these benefits lies in two important actions:\n1. Actively encourage your children to participate in sports activities\n2. Help them choose the right sport that matches their interests and abilities\n\nIn this video, we'll guide you through the process of selecting the most suitable sports activities for your child and show you how to support their athletic journey. Remember, the right sport can be a powerful tool in shaping your child's future success, both on and off the field.",
      videoNumber: 4,
      date: "May 8, 2024"
    },
    {
      title: "Martial Arts: Building Stronger Children Inside and Out",
      content: "Martial arts training offers a unique combination of benefits that can transform your child's development. Here's how martial arts can positively impact your child's life:\n\nKey Benefits:\n• Enhanced Self-Confidence: Martial arts training builds a strong sense of self-worth and personal achievement in children\n• Improved Motor Skills: Through structured training, children develop better coordination, balance, and physical control\n• Better Nutrition and Growth: The physical activity increases appetite, encouraging children to make better food choices for optimal growth\n• Strong Discipline: Regular practice instills important values of commitment, respect, and self-control\n• Physical Fitness: Comprehensive training improves overall fitness, strength, and flexibility\n• Social Skills Development: Training in a group setting helps children build meaningful relationships and learn teamwork\n\nIn this video, we'll explore how martial arts can be a powerful tool in your child's development, helping them grow into confident, disciplined, and healthy individuals. Whether your child is just starting their journey or looking to advance their skills, martial arts offers a path to personal growth that extends far beyond the training mat.",
      videoNumber: 5,
      date: "May 5, 2024"
    },
    {
      title: "Maximizing Your Child's Training Success: Key Factors and Tips",
      content: "To ensure your child gets the most out of their training, there are several important factors to consider and tips to follow. Let's break them down:\n\nEssential Factors to Consider:\n• Physical Fitness: Good physical condition is crucial for handling training demands effectively\n• Discipline: Strong discipline is necessary to achieve maximum benefits from training\n• Focus: Maintaining good concentration is essential for skill improvement\n• Enjoyment: Finding joy in training is key to long-term success and motivation\n\nPractical Tips for Success:\n• Choose the Right Sport: Select an activity that matches your child's interests and goals\n• Consistent Training: Maintain regular, quality training sessions for optimal results\n• Focus on Technique: Emphasize proper and safe techniques in every session\n• Enjoy the Process: Encourage your child to find joy in training and continuous improvement\n\nIn this video, we'll explore how to create the perfect balance of these elements to help your child thrive in their chosen sport. Remember, the journey to excellence is a combination of physical preparation, mental focus, and emotional engagement. When these elements come together, your child can achieve their full potential while developing a lifelong love for physical activity.",
      videoNumber: 6,
      date: "May 3, 2024"
    }
  ];

  return (
    <>
      <HeroSection
        title="PARENT'S GUIDE"
        subtitle="Expert advice and tips for supporting your child's athletic journey"
        backgroundImage="/src/assets/images/hero/backgroundHero.jpg"
      />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Training Tips & Insights</h2>
          <p className="section-subtitle">
            Short video guides and articles to help parents support their child's development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogVideoPost
              key={index}
              title={post.title}
              content={post.content}
              videoNumber={post.videoNumber}
              date={post.date}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
