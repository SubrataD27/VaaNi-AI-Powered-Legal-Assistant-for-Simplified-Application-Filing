import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card p-6 text-center hover:shadow-card-hover transition-shadow"
      variants={fadeIn}
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default StatCard;