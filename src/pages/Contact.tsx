
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <HeroSection
        title="GET IN TOUCH"
        subtitle="Have questions? Ready to enroll your child? Contact us today"
        backgroundImage="https://images.unsplash.com/photo-1599058917212-d750089bc620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            We're here to answer your questions and help you get started with the right program for your child
          </p>
        </div>
        
        <ContactForm />
      </section>
      
      {/* Map Section */}
      <section className="mt-16">
        <div className="w-full h-96 bg-gray-200">
          {/* Google Maps embed would go here */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-center">
              <p className="font-bold text-xl mb-2">Downtown Sports Center</p>
              <p>123 Main Street, Anytown, ST 12345</p>
              <p className="mt-4 text-sm text-gray-600">Map loading...</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">How do I sign up for a program?</h3>
              <p className="text-gray-600">You can sign up by filling out the contact form above, calling us directly, or visiting our training center during operational hours. We'll guide you through the registration process and schedule a free trial session.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What ages do you accept?</h3>
              <p className="text-gray-600">Our programs are designed for children ages 8 to 15. We have specialized training groups based on age and experience level to ensure appropriate development.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer trial classes?</h3>
              <p className="text-gray-600">Yes! We offer a complimentary trial class so your child can experience our training environment before committing to a program. Contact us to schedule yours today.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">What should my child wear to class?</h3>
              <p className="text-gray-600">For the first few sessions, comfortable athletic clothing is sufficient. Upon enrollment, we'll provide information about required training attire and equipment.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">How often are the classes?</h3>
              <p className="text-gray-600">Class frequency depends on the program level. Beginners train twice weekly, intermediate three times weekly, and advanced students four or more times per week.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What safety measures are in place?</h3>
              <p className="text-gray-600">Safety is our top priority. All coaches are certified in first aid, we maintain appropriate student-to-coach ratios, use quality safety equipment, and follow progressive training methods suitable for each age group.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
