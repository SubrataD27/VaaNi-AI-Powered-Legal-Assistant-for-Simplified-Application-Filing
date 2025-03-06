import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're here to help with any questions about VaaNi
          </motion.p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Our Location</h3>
              <p className="text-neutral-600">
                Ministry of Law & Justice, 4th Floor, Shastri Bhawan, New Delhi - 110001
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Phone Number</h3>
              <p className="text-neutral-600">
                +91-11-23384205
              </p>
              <p className="text-neutral-600">
                Toll Free: 1800-11-9950
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Email Address</h3>
              <p className="text-neutral-600">
                support@vaani.gov.in
              </p>
              <p className="text-neutral-600">
                info@vaani.gov.in
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We have received your inquiry and will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors flex items-center"
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            <div>
              <motion.div 
                className="bg-neutral-50 rounded-lg p-6 mb-8"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">Office Hours</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="font-medium text-neutral-800">9:00 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="font-medium text-neutral-800">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="font-medium text-neutral-800">Closed</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-neutral-50 rounded-lg p-6"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">Support Channels</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-neutral-600">24/7 Helpline: 1800-11-9950</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-neutral-600">WhatsApp Support: +91-9876543210</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-neutral-600">Live Chat: Available on website during office hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-neutral-600">Video Assistance: Schedule a call with our support team</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Visit Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our office is located in the heart of New Delhi at Shastri Bhawan
            </p>
          </div>
          
          <div className="bg-neutral-100 rounded-lg overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0098635333035!2d77.21127591508346!3d28.61501798242535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c0f0e1!2sShastri%20Bhawan!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="VaaNi Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about VaaNi
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">What languages does VaaNi support?</h3>
                <p className="text-neutral-600">
                  VaaNi supports all 22 scheduled Indian languages, including Hindi, Bengali, Telugu, Tamil, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">How accurate is the voice recognition?</h3>
                <p className="text-neutral-600">
                  VaaNi achieves 98.5% accuracy for legal terminology across supported languages, thanks to specialized acoustic models trained on diverse Indian accents and dialects.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Is my data secure with VaaNi?</h3>
                <p className="text-neutral-600">
                  Yes, VaaNi employs AES-256 encryption for all data at rest and in transit. We comply with ISO 27001 standards and the IT Act 2000, ensuring your legal information remains private and secure.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Can I use VaaNi on my mobile phone?</h3>
                <p className="text-neutral-600">
                  Yes, VaaNi is available as a mobile application for both iOS and Android devices, as well as a web portal that works on all browsers. The platform is designed to work even on basic smartphones with limited bandwidth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;