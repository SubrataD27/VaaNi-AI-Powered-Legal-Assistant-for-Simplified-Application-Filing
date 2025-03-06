# VaaNi | AI-Powered Legal Assistant for Simplified Application Filing

## Theme: Empowering Citizens: Simplified Legal Application Filing through Regional Speech (AI & ML)

### Team Name (Registered on portal): TEAM MAHAKUMBH
- **Team Leader Name**: Subrata Dhibar
- **Team Members**: Raja Babu Sahu, Chandrakanta Jena
- **Institution Name**: GIET UNIVERSITY

---

## Project Overview
VaaNi is an AI-powered legal assistant designed to simplify legal application filing through regional speech recognition. The system eliminates language barriers and complex legal jargon by converting natural speech into legally compliant documents, making legal processes accessible to everyone.

---

## Features
✅ **Multilingual Voice-First Legal Navigation**: Supports all 22 scheduled Indian languages and dialects.  
✅ **AI-Powered Speech Recognition**: Converts regional speech into legally valid documents.  
✅ **Intelligent Document Generation & Management**: Automatic creation, validation, and format conversion.  
✅ **End-to-End Legal Process Assistance**: Electronic submission, tracking, and real-time guidance.  
✅ **No Lawyer Dependency**: Automates legal document generation.  
✅ **Seamless Digital Integration**: Works with government systems, supports Aadhaar e-KYC, and digital signatures.  

---

## Technologies Used
### Frontend
- **Mobile App**: React Native  
- **Web Portal**: Next.js, TypeScript, Tailwind CSS  
- **Voice Interface**: Web Speech API, Azure Speech Services  

### Backend
- **Server**: Node.js, Express.js, TypeScript  
- **Cloud**: Azure App Services, Azure Functions  
- **Database**: Azure Cosmos DB, MongoDB Atlas  
- **Authentication**: Azure Active Directory B2C, Aadhaar e-KYC  

### AI & Language Processing *(Yet to be Implemented)*
- **Natural Language Understanding**: Azure OpenAI GPT-4 *(Not found in codebase)*  
- **Speech Recognition & Translation**: Bhashini API *(Not found in codebase)*  
- **Form Processing**: Azure Form Recognizer  
- **Legal Entity Recognition**: Custom NER models  

---

## System Architecture
VaaNi integrates with:  
- **Azure OpenAI**: Legal intent recognition, contextual explanations, document verification. *(Needs implementation)*  
- **Bhashini API**: Multilingual speech recognition, dialect adaptation, legal terminology translation. *(Not found in code)*  
- **Secure Cloud Infrastructure**: Encrypted data handling, digital submissions.  

---

## How It Works
1. **User speaks in their regional language.**  
2. **AI recognizes speech and guides them through legal forms.** *(Not yet implemented)*  
3. **Legal documents are generated, validated, and formatted.** *(Partial implementation found)*  
4. **Documents are digitally signed and submitted electronically.** *(Backend supports this)*  
5. **Users receive real-time tracking updates via SMS/WhatsApp.** *(Needs testing)*  

---

## Work Done So Far
- ✅ **Backend Developed**: Node.js, Express.js APIs are functional.  
- ✅ **Frontend UI Exists**: React Native for mobile, Next.js for web.  
- ✅ **Configuration Setup**: .env, package.json, tsconfig.json files included.  
- ❌ **Missing AI/ML Components**: No implementation of speech-to-text, OpenAI, or Bhashini API found.  

---

## Improvements & Feasibility
### 🔹 AI Integration Required
Speech recognition and legal AI logic must be implemented to enable the **voice-to-text legal filing process**.

### 🔹 Feature Completion Needed
Backend APIs exist but require integration with **Azure OpenAI & Bhashini API** for actual legal processing.

### 🔹 Feasibility
The project is **technically feasible**, but requires full AI implementation to match the **proposed vision** in the PPT.

---

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas
- Azure API Keys (for OpenAI, Speech Services, Bhashini API)

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd VaaNi
