import React from 'react';

interface GovernmentLogoProps {
  className?: string;
}

const GovernmentLogo: React.FC<GovernmentLogoProps> = ({ className }) => {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="40" cy="40" r="38" fill="#F8FAFC" stroke="#046A38" strokeWidth="2"/>
      <circle cx="40" cy="40" r="20" fill="#F8FAFC" stroke="#046A38" strokeWidth="1.5"/>
      <path d="M40 20V60" stroke="#046A38" strokeWidth="1.5"/>
      <path d="M20 40H60" stroke="#046A38" strokeWidth="1.5"/>
      <path d="M25.8579 25.8579L54.1421 54.1421" stroke="#046A38" strokeWidth="1.5"/>
      <path d="M25.8579 54.1421L54.1421 25.8579" stroke="#046A38" strokeWidth="1.5"/>
      <path d="M40 20C45.5228 20 50 25.5228 50 30C50 34.4772 45.5228 40 40 40C34.4772 40 30 34.4772 30 30C30 25.5228 34.4772 20 40 20Z" fill="#FF671F"/>
    </svg>
  );
};

export default GovernmentLogo;