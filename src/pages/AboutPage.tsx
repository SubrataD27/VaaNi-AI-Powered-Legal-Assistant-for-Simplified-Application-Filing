import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
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
            About VaaNi
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming legal access for all Indian citizens through voice-first technology
          </motion.p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-neutral-50 rounded-lg p-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Our Mission</h2>
              <p className="text-neutral-600 mb-4">
                To democratize access to legal processes by enabling every Indian citizen to file legal applications in their native language through simple voice conversations, regardless of literacy level or legal knowledge.
              </p>
              <p className="text-neutral-600">
                We aim to reduce the time, cost, and complexity associated with legal procedures, making justice more accessible to all.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Our Vision</h2>
              <p className="text-neutral-600 mb-4">
                A future where language and literacy are no longer barriers to accessing legal rights and services in India.
              </p>
              <p className="text-neutral-600">
                We envision a legal system where every citizen can navigate institutional processes with dignity and confidence, using their own voice and language.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Story</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The journey of making legal processes accessible to all Indians
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Legal documents and technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium">Team Mahakumbh, 2025</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">From Challenge to Solution</h3>
              <p className="text-neutral-600 mb-4">
                VaaNi was born from a simple observation: in a country with 22 official languages and varying literacy rates, legal processes remained predominantly in English and Hindi, creating significant barriers for millions of citizens.
              </p>
              <p className="text-neutral-600 mb-4">
                Our team of technologists, legal experts, and language specialists came together with a shared vision: to leverage the power of voice technology and artificial intelligence to bridge this gap.
              </p>
              <p className="text-neutral-600">
                By combining Azure OpenAI's powerful language models with Bhashini's Indian language capabilities, we created a platform that transforms complex legal procedures into accessible conversational interactions in any Indian language.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Core Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The principles that guide our mission to democratize legal access
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Inclusivity</h3>
              <p className="text-neutral-600">
                We believe that language, literacy, or technical knowledge should never be barriers to accessing legal rights. Our platform is designed to be accessible to every Indian citizen.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Excellence</h3>
              <p className="text-neutral-600">
                We are committed to technical excellence and legal accuracy in everything we do. Our solutions are built to the highest standards to ensure reliability and trust.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Empowerment</h3>
              <p className="text-neutral-600">
                We don't just simplify processes; we educate and empower citizens to understand their legal rights and options through clear, contextual guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Team Mahakumbh</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The dedicated professionals behind VaaNi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div 
                key={member}
                className="bg-white rounded-lg shadow-card overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img 
                  src={`https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80`} 
                  alt={`Team Member ${member}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-800">Team Member {member}</h3>
                  <p className="text-neutral-600 text-sm">Role / Position</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;