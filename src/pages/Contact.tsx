import HeroSection from '@/components/HeroSection';

const Contact = () => {
  return (
    <>
      <HeroSection
        title="CONTACT US"
        subtitle="Get in touch with us to start your child's journey to excellence"
        backgroundImage="/src/assets/images/hero/backgroundHero.jpg"
      />
      
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-coach-dark-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-coach-dark-text-primary">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-coach-dark-text-secondary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-coach-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-coach-dark-text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-coach-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-coach-dark-text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-coach-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-coach-dark-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-coach-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-coach-blue text-white py-3 px-6 rounded-md hover:bg-coach-blue-dark transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-coach-dark-card rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-coach-dark-text-primary">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-coach-blue mt-1 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">Location</h3>
                    <p className="text-gray-600 dark:text-coach-dark-text-secondary">İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-coach-blue mt-1 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">Phone</h3>
                    <p className="text-gray-600 dark:text-coach-dark-text-secondary">+90 539 590 01 54</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-coach-blue mt-1 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">Email</h3>
                    <p className="text-gray-600 dark:text-coach-dark-text-secondary">kungfun63@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-coach-dark-card rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-coach-dark-text-primary">Training Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-coach-dark-text-secondary">Monday - Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-coach-dark-text-secondary">Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-coach-dark-text-secondary">Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-coach-dark-text-primary">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
