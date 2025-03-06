import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import GovernmentLogo from './GovernmentLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <GovernmentLogo className="h-12 w-auto mr-3" />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-primary">Vaa</span>
                  <span className="text-green-400">Ni</span>
                </h2>
                <p className="text-xs text-neutral-300">Voice Access to Navigate Institutions</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Empowering Indian citizens to file legal applications through regional speech using Azure OpenAI and Bhashini API.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-neutral-700 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-700 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-700 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-700 rounded-full hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/demo" className="text-neutral-300 hover:text-primary transition-colors">Demo</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">Legal Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">RTI</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Sitemap</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-neutral-300">Ministry of Law & Justice, 4th Floor, Shastri Bhawan, New Delhi - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span className="text-neutral-300">+91-11-23384205</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <span className="text-neutral-300">support@vaani.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2025 VaaNi - Government of India. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-neutral-400 text-sm hover:text-primary">Terms</a>
              <a href="#" className="text-neutral-400 text-sm hover:text-primary">Privacy</a>
              <a href="#" className="text-neutral-400 text-sm hover:text-primary">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;