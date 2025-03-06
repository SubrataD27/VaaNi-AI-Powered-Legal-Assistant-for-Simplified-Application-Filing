import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
  const languages = [
    'English', 'हिन्दी', 'বাংলা', 'తెలుగు', 'मराठी', 
    'தமிழ்', 'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം', 'ਪੰਜਾਬੀ'
  ];
  
  return (
    <div className="flex items-center">
      <Globe size={16} className="text-white mr-1" />
      <select 
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-transparent text-white text-sm border-none focus:ring-0 focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className="text-accent-dark">
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;