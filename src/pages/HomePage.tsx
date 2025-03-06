import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, FileText, Languages, Clock, Shield, BarChart, ChevronRight, Play } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import StatCard from '../components/StatCard';

const HomePage: React.FC = () => {
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
      <section className="relative bg-gradient-to-r from-accent-dark to-accent py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/90 to-accent/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Justice Speaks <span className="text-primary">Your Language</span>
              </h1>
              <p className="text-lg text-neutral-100 mb-8 max-w-lg">
                File legal applications in your native language through simple voice conversations. No forms, no complexity, just speak naturally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/demo" 
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium flex items-center justify-center hover:bg-primary-dark transition-colors"
                >
                  Try Demo <Play size={16} className="ml-2" />
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-white text-accent rounded-md font-medium flex items-center justify-center hover:bg-neutral-100 transition-colors"
                >
                  Our Services <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-lg blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-medium">VaaNi Assistant</h3>
                    <LanguageSelector />
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm">
                      "I need to file a small claims case for property damage."
                    </p>
                  </div>
                  
                  <div className="bg-primary/20 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm">
                      "I'll help you file a small claims case. Could you tell me the approximate value of the property damage?"
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <p className="text-white text-sm">
                      "Around ₹25,000 for my damaged boundary wall."
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="p-4 bg-primary rounded-full hover:bg-primary-dark transition-colors">
                      <Mic size={24} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StatCard 
              icon={<Clock className="text-primary" size={28} />}
              title="75% Reduction"
              description="in application completion time"
            />
            <StatCard 
              icon={<Shield className="text-primary" size={28} />}
              title="85% Decrease"
              description="in form errors and rejections"
            />
            <StatCard 
              icon={<BarChart className="text-primary" size={28} />}
              title="₹2,500 Savings"
              description="average per legal application"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Key Features</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              VaaNi transforms legal access by eliminating language, literacy, and complexity barriers through an innovative voice-first approach.
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
              className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Mic className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Voice-First Interface</h3>
              <p className="text-neutral-600">
                Natural conversation in all 22 scheduled Indian languages with dialect recognition for regional variants.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Intelligent Documents</h3>
              <p className="text-neutral-600">
                Automatically generates legally compliant documents with real-time validation against court requirements.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-shadow"
              variants={fadeIn}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Languages className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Language Equality</h3>
              <p className="text-neutral-600">
                Equal access regardless of language proficiency with specialized acoustic models for legal terminology.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">How VaaNi Works</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A simple, intuitive process that guides you through legal application filing with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Choose Your Language</h3>
              <p className="text-neutral-600">
                Select from 22 Indian languages for your interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Speak Naturally</h3>
              <p className="text-neutral-600">
                Describe your legal need in your own words.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Answer Questions</h3>
              <p className="text-neutral-600">
                VaaNi guides you through required information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Submit & Track</h3>
              <p className="text-neutral-600">
                Review, submit and track your application.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience VaaNi?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Indian citizens who are simplifying their legal processes with VaaNi's voice-first approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo" 
              className="px-6 py-3 bg-white text-secondary rounded-md font-medium hover:bg-neutral-100 transition-colors"
            >
              Try Demo
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;