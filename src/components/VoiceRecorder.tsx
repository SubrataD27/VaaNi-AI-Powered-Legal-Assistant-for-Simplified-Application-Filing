import React, { useState, useEffect } from 'react';
import { Mic, Square, Play, Trash2 } from 'lucide-react';
import useAudioRecorder from '../hooks/useAudioRecorder';

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void;
  disabled?: boolean;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ 
  onRecordingComplete,
  disabled = false
}) => {
  const { 
    isRecording, 
    audioBlob, 
    startRecording, 
    stopRecording, 
    clearRecording,
    error 
  } = useAudioRecorder();
  
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  // Handle recording timer
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRecording) {
      interval = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRecording]);
  
  // Create audio URL when blob changes
  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setAudioUrl(null);
    }
  }, [audioBlob]);
  
  const handleStartRecording = async () => {
    await startRecording();
  };
  
  const handleStopRecording = async () => {
    await stopRecording();
  };
  
  const handleSubmitRecording = () => {
    if (audioBlob) {
      onRecordingComplete(audioBlob);
      clearRecording();
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex flex-col items-center">
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      
      <div className="flex items-center space-x-2 mb-2">
        {isRecording ? (
          <>
            <div className="text-red-500 animate-pulse mr-2">●</div>
            <span className="text-neutral-700">{formatTime(recordingTime)}</span>
            <button
              onClick={handleStopRecording}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              disabled={disabled}
            >
              <Square size={16} />
            </button>
          </>
        ) : audioBlob ? (
          <>
            <audio src={audioUrl || undefined} controls className="h-8 w-32" />
            <button
              onClick={handleSubmitRecording}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              disabled={disabled}
            >
              <Play size={16} />
            </button>
            <button
              onClick={clearRecording}
              className="p-2 bg-neutral-200 text-neutral-700 rounded-full hover:bg-neutral-300 transition-colors"
              disabled={disabled}
            >
              <Trash2 size={16} />
            </button>
          </>
        ) : (
          <button
            onClick={handleStartRecording}
            className={`p-3 rounded-full ${
              disabled 
                ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary-dark'
            } transition-colors`}
            disabled={disabled}
          >
            <Mic size={20} />
          </button>
        )}
      </div>
      
      {!isRecording && !audioBlob && (
        <p className="text-xs text-neutral-500">Click to start recording</p>
      )}
    </div>
  );
};

export default VoiceRecorder;