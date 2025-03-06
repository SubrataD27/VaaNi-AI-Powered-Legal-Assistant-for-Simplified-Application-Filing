import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, FileCheck, Bell, HelpCircle, BarChart3 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive legal assistance through voice technology
          </motion.p>
        </div>
      </section>
      
      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Core Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              VaaNi offers a comprehensive suite of services to simplify legal processes
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Multilingual Voice Interface</h3>
              <p className="text-neutral-600 mb-4">
                Natural conversation in all 22 scheduled Indian languages with dialect recognition for regional variants.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Support for all scheduled languages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Regional dialect recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">98.5% accuracy for legal terms</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Guided Legal Navigation</h3>
              <p className="text-neutral-600 mb-4">
                Step-by-step conversational guidance through various legal applications with context-aware question flow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Conversational guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Simplified legal terminology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Personalized form generation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <HelpCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Legal Knowledge Assistant</h3>
              <p className="text-neutral-600 mb-4">
                Contextual explanations of legal terms and requirements with simplified summaries of legal implications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Contextual explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Real-time guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Simplified legal summaries</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <FileCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Document Management</h3>
              <p className="text-neutral-600 mb-4">
                Automated document generation with digital signature integration and validation against legal requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Automated document generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Digital signature integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Format conversion (PDF, Word, e-Filing)</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Bell className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Tracking & Notifications</h3>
              <p className="text-neutral-600 mb-4">
                Real-time application status with scheduled updates via SMS/WhatsApp and deadline alerts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Real-time status tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">SMS/WhatsApp updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Deadline alerts</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Analytics & Insights</h3>
              <p className="text-neutral-600 mb-4">
                Personal dashboard with application history and insights on legal processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Application history tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Process time analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600 text-sm">Success rate visualization</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Application Types */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Supported Application Types</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              VaaNi supports a wide range of legal applications across various domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b border-neutral-200 pb-2">Civil Cases</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Small Claims Filing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Property Disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Consumer Complaints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Rent Agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Civil Rights Petitions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b border-neutral-200 pb-2">Family Law</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Marriage Registration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Maintenance Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Adoption Procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Guardianship Petitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Succession Certificates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b border-neutral-200 pb-2">Administrative</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">RTI Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Government Scheme Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Land Record Requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">License Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-neutral-600">Public Grievances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Pricing Plans</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Flexible options to meet the needs of citizens, organizations, and government bodies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Citizen Basic</h3>
                <p className="text-neutral-600 text-sm mb-4">For individual citizens</p>
                <p className="text-3xl font-bold text-accent-dark">Free</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Basic application filing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">5 supported languages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Standard document generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Basic status tracking</span>
                </li>
              </ul>
              
              <button className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-primary shadow-card relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Citizen Premium</h3>
                <p className="text-neutral-600 text-sm mb-4">For frequent users</p>
                <p className="text-3xl font-bold text-accent-dark">₹199<span className="text-sm font-normal text-neutral-600">/month</span></p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Unlimited application filing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">All 22 languages supported</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Advanced document generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Priority processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">SMS/WhatsApp notifications</span>
                </li>
              </ul>
              
              <button className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                Subscribe Now
              </button>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Organization</h3>
                <p className="text-neutral-600 text-sm mb-4">For legal aid organizations</p>
                <p className="text-3xl font-bold text-accent-dark">Custom</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Volume-based pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">All premium features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Admin dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">API access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-neutral-600">Dedicated support</span>
                </li>
              </ul>
              
              <button className="w-full py-2 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;