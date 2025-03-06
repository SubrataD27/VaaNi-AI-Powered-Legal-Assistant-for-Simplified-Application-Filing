import { create } from 'zustand';
import { vaaniAPI } from '../services/api';

interface VaaniState {
  // User preferences
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  
  // Conversation state
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  
  // Audio recording state
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  
  // Processing state
  isProcessing: boolean;
  
  // API interaction methods
  sendTextMessage: (text: string) => Promise<void>;
  sendVoiceMessage: (audioBlob: Blob) => Promise<void>;
}

interface Message {
  id: string;
  type: 'user' | 'system';
  text: string;
  audioUrl?: string;
  timestamp: Date;
}

const useVaaniStore = create<VaaniState>((set, get) => ({
  // User preferences
  selectedLanguage: 'english',
  setSelectedLanguage: (language: string) => set({ selectedLanguage: language }),
  
  // Conversation state
  messages: [],
  addMessage: (message: Message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  clearMessages: () => set({ messages: [] }),
  
  // Audio recording state
  isRecording: false,
  startRecording: () => set({ isRecording: true }),
  stopRecording: () => set({ isRecording: false }),
  
  // Processing state
  isProcessing: false,
  
  // API interaction methods
  sendTextMessage: async (text: string) => {
    const { selectedLanguage } = get();
    
    // Add user message to conversation
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text,
      timestamp: new Date()
    };
    
    get().addMessage(userMessage);
    set({ isProcessing: true });
    
    try {
      // Process the message using VaaNi API
      const response = await vaaniAPI.processTextInput(text, selectedLanguage);
      
      if (response.success) {
        // Add system response to conversation
        const systemMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'system',
          text: response.responseText,
          timestamp: new Date()
        };
        
        get().addMessage(systemMessage);
      } else {
        // Add error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'system',
          text: 'Sorry, I encountered an error processing your request. Please try again.',
          timestamp: new Date()
        };
        
        get().addMessage(errorMessage);
      }
    } catch (error) {
      console.error('Error sending text message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date()
      };
      
      get().addMessage(errorMessage);
    } finally {
      set({ isProcessing: false });
    }
  },
  
  sendVoiceMessage: async (audioBlob: Blob) => {
    const { selectedLanguage } = get();
    
    // Add placeholder user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: 'Processing your voice message...',
      timestamp: new Date()
    };
    
    get().addMessage(userMessage);
    set({ isProcessing: true });
    
    try {
      // Process the voice message using VaaNi API
      const response = await vaaniAPI.processVoiceInput(audioBlob, selectedLanguage);
      
      if (response.success) {
        // Update user message with transcribed text
        set((state) => ({
          messages: state.messages.map(msg => 
            msg.id === userMessage.id 
              ? { ...msg, text: response.originalText }
              : msg
          )
        }));
        
        // Add system response to conversation
        const systemMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'system',
          text: response.responseText,
          audioUrl: response.responseAudio,
          timestamp: new Date()
        };
        
        get().addMessage(systemMessage);
      } else {
        // Update user message to show error
        set((state) => ({
          messages: state.messages.map(msg => 
            msg.id === userMessage.id 
              ? { ...msg, text: 'Voice message could not be processed.' }
              : msg
          )
        }));
        
        // Add error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'system',
          text: 'Sorry, I encountered an error processing your voice message. Please try again.',
          timestamp: new Date()
        };
        
        get().addMessage(errorMessage);
      }
    } catch (error) {
      console.error('Error sending voice message:', error);
      
      // Update user message to show error
      set((state) => ({
        messages: state.messages.map(msg => 
          msg.id === userMessage.id 
            ? { ...msg, text: 'Voice message could not be processed.' }
            : msg
        )
      }));
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'Sorry, I encountered an error processing your voice message. Please try again.',
        timestamp: new Date()
      };
      
      get().addMessage(errorMessage);
    } finally {
      set({ isProcessing: false });
    }
  }
}));

export default useVaaniStore;