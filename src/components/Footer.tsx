import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COACH NINJA</h3>
            <p className="text-gray-400">
              Professional fighting coach specialized in training young champions for national and international competitions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs#beginners" className="text-gray-400 hover:text-white transition-colors">Beginners (8-10)</Link></li>
              <li><Link to="/programs#intermediate" className="text-gray-400 hover:text-white transition-colors">Intermediate (11-13)</Link></li>
              <li><Link to="/programs#advanced" className="text-gray-400 hover:text-white transition-colors">Advanced (14-15)</Link></li>
              <li><Link to="/programs#championship" className="text-gray-400 hover:text-white transition-colors">Championship Training</Link></li>
              <li><Link to="/programs#private" className="text-gray-400 hover:text-white transition-colors">Private Sessions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: kungfun63@gmail.com</li>
              <li>Phone: +90 539 590 01 54</li>
              <li>Location: 123 Training Street, Sports City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">© 2025 COACH NINJA. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Developed by <a href="https://sanwaralkmali.github.io/" target="_blank" rel="noopener noreferrer" className="text-coach-blue hover:text-coach-red transition-colors">Salah Alkmali</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
