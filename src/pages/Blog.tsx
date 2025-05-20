
import HeroSection from '@/components/HeroSection';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "5 Ways Martial Arts Builds Confidence in Children",
      excerpt: "Discover how martial arts training helps kids develop self-confidence, overcome shyness, and build a positive self-image that extends beyond the training mat.",
      date: "May 15, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "martial-arts-confidence-children",
    },
    {
      title: "Nutrition Tips for Young Athletes",
      excerpt: "Proper nutrition is essential for growing athletes. Learn what, when, and how much your child should eat to fuel their training and support healthy development.",
      date: "April 28, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1625937329935-287441889bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "nutrition-tips-young-athletes",
    },
    {
      title: "How to Prepare Your Child for Their First Competition",
      excerpt: "First competitions can be nerve-wracking for both children and parents. Here's a comprehensive guide to help your young athlete feel prepared and confident.",
      date: "April 10, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "prepare-child-first-competition",
    },
    {
      title: "The Mental Game: Developing Focus and Resilience",
      excerpt: "Fighting sports aren't just physical—they're mental too. Learn strategies to help your child develop laser focus, emotional control, and mental toughness.",
      date: "March 22, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "mental-game-focus-resilience",
    },
    {
      title: "Balancing Sports Training and Academics",
      excerpt: "How to help your child excel both in sports and in school. Practical tips for time management, establishing priorities, and using sports lessons in academic life.",
      date: "March 5, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "balancing-sports-academics",
    },
    {
      title: "Injury Prevention Strategies for Young Athletes",
      excerpt: "Learn essential techniques to keep your child safe during training. This article covers proper warm-up routines, recognizing overtraining, and recovery methods.",
      date: "February 18, 2023",
      author: "Coach Mike",
      image: "https://images.unsplash.com/photo-1605125207267-f2d7642a2ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "injury-prevention-young-athletes",
    },
  ];
  
  return (
    <>
      <HeroSection
        title="BLOG & ARTICLES"
        subtitle="Insights, tips, and resources for parents and young fighters"
        backgroundImage="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Informative content to help parents and young athletes get the most out of their training
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              image={post.image}
              slug={post.slug}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Topic Categories Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Article Categories</h2>
            <p className="section-subtitle">
              Browse content by topic to find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Training Tips", icon: "🥋" },
              { name: "Nutrition", icon: "🥗" },
              { name: "Mental Strength", icon: "🧠" },
              { name: "Competition", icon: "🏆" },
              { name: "Parent Guides", icon: "👨‍👩‍👧‍👦" },
              { name: "Success Stories", icon: "⭐" },
            ].map((category, index) => (
              <a
                key={index}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-bold">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="container-custom">
        <div className="bg-coach-blue text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8 text-white/80">
              Get the latest training tips, event announcements, and exclusive content delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-coach-blue hover:bg-gray-100 transition-colors font-bold py-3 px-6 rounded-md"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs mt-4 text-white/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
