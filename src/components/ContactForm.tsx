import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_cok9sdv';
const TEMPLATE_ID = 'template_69kfqx3';
const PUBLIC_KEY = 'IeXosnPS4U8kmXUtN';

const ContactForm = () => {
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const programParam = searchParams.get('program');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: programParam || '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      })
      .catch(() => {
        setIsSubmitting(false);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
        });
      });
  };
  
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Program
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
                required
              >
                <option value="">Select a Program</option>
                <option value="beginners">Beginners (8-10)</option>
                <option value="intermediate">Intermediate (11-13)</option>
                <option value="advanced">Advanced (14-15)</option>
                <option value="championship">Championship Training</option>
                <option value="private">Private Sessions</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coach-blue bg-white text-black dark:bg-gray-900 dark:text-white"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className={`btn-primary w-full transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="md:col-span-1">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Phone className="mr-3 text-coach-blue" size={20} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+90 539 590 01 54</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="mr-3 text-coach-blue" size={20} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">kungfun63@gmail.com</p>
              </div>
            </div>
          </div>
          
          <hr className="my-6 border-gray-300" />
          
          <h3 className="text-xl font-bold mb-4">Training Location</h3>
          <p className="text-gray-600 mb-4">
            Downtown Sports Center<br />
            123 Main Street<br />
            Anytown, ST 12345
          </p>
          
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Training Hours:</strong><br />
              Monday - Friday: 3:00 PM - 8:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
