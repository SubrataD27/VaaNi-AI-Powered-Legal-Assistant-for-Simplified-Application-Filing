import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Send, Play, Pause, Volume2, Languages, Loader2 } from 'lucide-react';
import VoiceRecorder from '../components/VoiceRecorder';
import useVaaniStore from '../store/useVaaniStore';

const DemoPage: React.FC = () => {
  const {
    messages,
    addMessage,
    clearMessages,
    isProcessing,
    selectedLanguage,
    setSelectedLanguage,
    sendTextMessage,
    sendVoiceMessage
  } = useVaaniStore();
  
  const [inputText, setInputText] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('small-claims');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Initialize with welcome message if empty
  useEffect(() => {
    if (messages.length === 0) {
      addMessage({
        id: Date.now().toString(),
        type: 'system',
        text: 'Welcome to VaaNi. How can I help you today?',
        timestamp: new Date()
      });
    }
  }, [messages.length, addMessage]);
  
  const handleSendMessage = () => {
    if (inputText.trim() && !isProcessing) {
      sendTextMessage(inputText);
      setInputText('');
    }
  };
  
  const handleVoiceMessage = (audioBlob: Blob) => {
    if (!isProcessing) {
      sendVoiceMessage(audioBlob);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };
  
  const demoOptions = [
    { id: 'small-claims', name: 'Small Claims Filing' },
    { id: 'rti', name: 'RTI Application' },
    { id: 'consumer', name: 'Consumer Complaint' }
  ];
  
  const languages = [
    { code: 'english', name: 'English' },
    { code: 'hindi', name: 'हिन्दी' },
    { code: 'bengali', name: 'বাংলা' },
    { code: 'telugu', name: 'తెలుగు' },
    { code: 'tamil', name: 'தமிழ்' },
    { code: 'kannada', name: 'ಕನ್ನಡ' }
  ];
  
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-neutral-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience VaaNi
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Try our interactive demo to see how VaaNi works
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-card p-6">
              <h2 className="text-xl font-semibold text-neutral-800 mb-4">Demo Options</h2>
              
              <div className="mb-6">
                <label className="block text-neutral-700 mb-2">Select Demo Scenario:</label>
                <div className="space-y-2">
                  {demoOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`p-3 rounded-md cursor-pointer border transition-colors ${
                        selectedDemo === option.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-neutral-200 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedDemo(option.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-3 ${
                          selectedDemo === option.id ? 'bg-primary' : 'bg-neutral-200'
                        }`}></div>
                        <span className="text-neutral-800">{option.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-neutral-700 mb-2">Language:</label>
                <div className="relative">
                  <select 
                    className="w-full p-2 border border-neutral-300 rounded-md appearance-none bg-white"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Languages size={18} className="text-neutral-500" />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-neutral-800 mb-3">How to Use This Demo</h3>
                <ol className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Select a demo scenario from the options above</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Choose your preferred language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Use the microphone button to speak or type your query</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Follow the conversation flow as VaaNi guides you through the process</span>
                  </li>
                </ol>
              </div>
              
              <div className="p-4 bg-neutral-100 rounded-md">
                <p className="text-sm text-neutral-600">
                  <span className="font-medium text-accent-dark">Note:</span> This demo connects to Azure OpenAI and Bhashini API for real-time processing of your queries in multiple Indian languages.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-card h-full flex flex-col">
              <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <h3 className="font-medium text-neutral-800">VaaNi Assistant</h3>
                </div>
                <div className="flex items-center">
                  <Languages size={16} className="text-neutral-600 mr-1" />
                  <select 
                    className="bg-transparent text-neutral-600 text-sm border-none focus:ring-0 focus:outline-none"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex-grow p-4 overflow-y-auto h-96">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user' 
                            ? 'bg-primary text-white' 
                            : 'bg-neutral-100 text-neutral-800'
                        }`}
                      >
                        <p>{message.text}</p>
                        {message.audioUrl && (
                          <button 
                            onClick={() => playAudio(message.audioUrl!)}
                            className="mt-2 p-1 bg-white/20 rounded-full"
                          >
                            <Volume2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isProcessing && (
                    <div className="flex justify-start">
                      <div className="bg-neutral-100 rounded-lg p-3 flex items-center">
                        <Loader2 size={16} className="text-primary animate-spin mr-2" />
                        <span className="text-neutral-600">Processing...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="p-4 border-t border-neutral-200">
                <div className="flex items-center">
                  <div className="mr-2">
                    <VoiceRecorder 
                      onRecordingComplete={handleVoiceMessage}
                      disabled={isProcessing}
                    />
                  </div>
                  
                  <div className="flex-grow relative">
                    <textarea
                      className="w-full border border-neutral-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Type your message..."
                      rows={1}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={handleKeyPress}
                      disabled={isProcessing}
                    ></textarea>
                    <button 
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                        isProcessing || !inputText.trim()
                          ? 'text-neutral-400 cursor-not-allowed'
                          : 'text-primary hover:text-primary-dark'
                      }`}
                      onClick={handleSendMessage}
                      disabled={isProcessing || !inputText.trim()}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button 
                      className="p-2 text-neutral-600 hover:text-primary"
                      onClick={() => {
                        // Play last system message audio if available
                        const lastSystemMessage = [...messages].reverse().find(m => m.type === 'system' && m.audioUrl);
                        if (lastSystemMessage?.audioUrl) {
                          playAudio(lastSystemMessage.audioUrl);
                        }
                      }}
                    >
                      <Play size={18} />
                    </button>
                    <button className="p-2 text-neutral-600 hover:text-primary">
                      <Pause size={18} />
                    </button>
                    <button className="p-2 text-neutral-600 hover:text-primary">
                      <Volume2 size={18} />
                    </button>
                  </div>
                  
                  <div>
                    <button 
                      className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary-dark transition-colors"
                      onClick={clearMessages}
                    >
                      Start New Conversation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;