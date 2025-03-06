import axios from 'axios';
import { OpenAIClient, AzureKeyCredential } from '@azure/openai';

// Azure OpenAI Configuration
const azureApiKey = import.meta.env.VITE_AZURE_OPENAI_API_KEY;
const azureEndpoint = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const azureDeploymentName = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT_NAME;

// Bhashini API Configuration
const bhashiniApiKey = import.meta.env.VITE_BHASHINI_API_KEY;
const bhashiniEndpoint = import.meta.env.VITE_BHASHINI_API_ENDPOINT;
const bhashiniUserId = import.meta.env.VITE_BHASHINI_USER_ID;

// Initialize Azure OpenAI client
const openAIClient = azureApiKey && azureEndpoint 
  ? new OpenAIClient(
      azureEndpoint,
      new AzureKeyCredential(azureApiKey)
    )
  : null;

// Initialize Bhashini API client
const bhashiniClient = axios.create({
  baseURL: bhashiniEndpoint,
  headers: {
    'Authorization': `Bearer ${bhashiniApiKey}`,
    'Content-Type': 'application/json',
    'User-ID': bhashiniUserId
  }
});

// Azure OpenAI API functions
export const azureOpenAI = {
  // Generate text completion using Azure OpenAI
  generateCompletion: async (prompt: string, maxTokens = 500) => {
    if (!openAIClient) {
      console.error('Azure OpenAI client not initialized');
      return { error: 'Azure OpenAI client not initialized' };
    }

    try {
      const response = await openAIClient.getCompletions(
        azureDeploymentName,
        [prompt],
        { maxTokens }
      );
      
      return {
        text: response.choices[0].text,
        success: true
      };
    } catch (error) {
      console.error('Error generating completion:', error);
      return { 
        error: 'Failed to generate completion',
        details: error,
        success: false
      };
    }
  },

  // Process legal query and generate structured response
  processLegalQuery: async (query: string, language = 'english') => {
    if (!openAIClient) {
      console.error('Azure OpenAI client not initialized');
      return { error: 'Azure OpenAI client not initialized' };
    }

    const systemPrompt = `
      You are VaaNi, an AI legal assistant for the Government of India.
      Your task is to help citizens navigate legal processes and file applications.
      Provide clear, accurate information about legal procedures in simple language.
      If you don't know the answer, say so rather than providing incorrect information.
      The user's query is in ${language}.
    `;

    try {
      const messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: query }
      ];

      const response = await openAIClient.getChatCompletions(
        azureDeploymentName,
        messages
      );
      
      return {
        response: response.choices[0].message?.content || '',
        success: true
      };
    } catch (error) {
      console.error('Error processing legal query:', error);
      return { 
        error: 'Failed to process legal query',
        details: error,
        success: false
      };
    }
  }
};

// Bhashini API functions
export const bhashiniAPI = {
  // Detect language from text
  detectLanguage: async (text: string) => {
    try {
      const response = await bhashiniClient.post('/language-detection', {
        text: text
      });
      
      return {
        detectedLanguage: response.data.language,
        success: true
      };
    } catch (error) {
      console.error('Error detecting language:', error);
      return { 
        error: 'Failed to detect language',
        details: error,
        success: false
      };
    }
  },

  // Translate text from source to target language
  translateText: async (text: string, sourceLanguage: string, targetLanguage: string) => {
    try {
      const response = await bhashiniClient.post('/translation', {
        input: [{ source: text }],
        config: {
          language: {
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
          }
        }
      });
      
      return {
        translatedText: response.data.output[0].target,
        success: true
      };
    } catch (error) {
      console.error('Error translating text:', error);
      return { 
        error: 'Failed to translate text',
        details: error,
        success: false
      };
    }
  },

  // Convert speech to text
  speechToText: async (audioBlob: Blob, language: string) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);
      formData.append('language', language);
      
      const response = await bhashiniClient.post('/speech-to-text', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return {
        text: response.data.text,
        success: true
      };
    } catch (error) {
      console.error('Error converting speech to text:', error);
      return { 
        error: 'Failed to convert speech to text',
        details: error,
        success: false
      };
    }
  },

  // Convert text to speech
  textToSpeech: async (text: string, language: string, gender = 'female') => {
    try {
      const response = await bhashiniClient.post('/text-to-speech', {
        input: [{ source: text }],
        config: {
          language: {
            sourceLanguage: language
          },
          gender: gender
        }
      });
      
      return {
        audioUrl: response.data.audio_url,
        success: true
      };
    } catch (error) {
      console.error('Error converting text to speech:', error);
      return { 
        error: 'Failed to convert text to speech',
        details: error,
        success: false
      };
    }
  }
};

// Combined API functions for VaaNi
export const vaaniAPI = {
  // Process voice input in any language and return response in same language
  processVoiceInput: async (audioBlob: Blob, sourceLanguage: string) => {
    try {
      // Step 1: Convert speech to text using Bhashini
      const speechToTextResult = await bhashiniAPI.speechToText(audioBlob, sourceLanguage);
      
      if (!speechToTextResult.success) {
        throw new Error('Speech to text conversion failed');
      }
      
      const userText = speechToTextResult.text;
      
      // Step 2: Translate to English for processing (if not already in English)
      let englishText = userText;
      if (sourceLanguage.toLowerCase() !== 'english') {
        const translationResult = await bhashiniAPI.translateText(userText, sourceLanguage, 'english');
        
        if (!translationResult.success) {
          throw new Error('Translation to English failed');
        }
        
        englishText = translationResult.translatedText;
      }
      
      // Step 3: Process with Azure OpenAI
      const legalResponse = await azureOpenAI.processLegalQuery(englishText);
      
      if (!legalResponse.success) {
        throw new Error('Legal query processing failed');
      }
      
      // Step 4: Translate response back to source language (if not English)
      let finalResponse = legalResponse.response;
      if (sourceLanguage.toLowerCase() !== 'english') {
        const backTranslationResult = await bhashiniAPI.translateText(
          legalResponse.response, 
          'english', 
          sourceLanguage
        );
        
        if (!backTranslationResult.success) {
          throw new Error('Translation back to source language failed');
        }
        
        finalResponse = backTranslationResult.translatedText;
      }
      
      // Step 5: Convert response to speech
      const textToSpeechResult = await bhashiniAPI.textToSpeech(finalResponse, sourceLanguage);
      
      if (!textToSpeechResult.success) {
        throw new Error('Text to speech conversion failed');
      }
      
      return {
        originalText: userText,
        responseText: finalResponse,
        responseAudio: textToSpeechResult.audioUrl,
        success: true
      };
    } catch (error) {
      console.error('Error processing voice input:', error);
      return { 
        error: 'Failed to process voice input',
        details: error,
        success: false
      };
    }
  },
  
  // Process text input in any language and return response in same language
  processTextInput: async (text: string, language: string) => {
    try {
      // Step 1: Detect language if not provided
      let detectedLanguage = language;
      if (!language) {
        const languageDetectionResult = await bhashiniAPI.detectLanguage(text);
        
        if (!languageDetectionResult.success) {
          throw new Error('Language detection failed');
        }
        
        detectedLanguage = languageDetectionResult.detectedLanguage;
      }
      
      // Step 2: Translate to English for processing (if not already in English)
      let englishText = text;
      if (detectedLanguage.toLowerCase() !== 'english') {
        const translationResult = await bhashiniAPI.translateText(text, detectedLanguage, 'english');
        
        if (!translationResult.success) {
          throw new Error('Translation to English failed');
        }
        
        englishText = translationResult.translatedText;
      }
      
      // Step 3: Process with Azure OpenAI
      const legalResponse = await azureOpenAI.processLegalQuery(englishText);
      
      if (!legalResponse.success) {
        throw new Error('Legal query processing failed');
      }
      
      // Step 4: Translate response back to source language (if not English)
      let finalResponse = legalResponse.response;
      if (detectedLanguage.toLowerCase() !== 'english') {
        const backTranslationResult = await bhashiniAPI.translateText(
          legalResponse.response, 
          'english', 
          detectedLanguage
        );
        
        if (!backTranslationResult.success) {
          throw new Error('Translation back to source language failed');
        }
        
        finalResponse = backTranslationResult.translatedText;
      }
      
      return {
        originalText: text,
        responseText: finalResponse,
        detectedLanguage: detectedLanguage,
        success: true
      };
    } catch (error) {
      console.error('Error processing text input:', error);
      return { 
        error: 'Failed to process text input',
        details: error,
        success: false
      };
    }
  }
};

export default {
  azureOpenAI,
  bhashiniAPI,
  vaaniAPI
};