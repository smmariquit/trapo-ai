import React, { useState } from 'react';
import './App.css';
import SpeechForm from './components/SpeechForm';
import SpeechDisplay from './components/SpeechDisplay';

function App() {
  const [speech, setSpeech] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSpeech = async (formData) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const data = await response.json();
      setSpeech(data.speech);
    } catch (err) {
      setError('Failed to generate speech. Please check your API key and try again.');
      console.error('Error generating speech:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">🎭 Trapo App</h1>
          <p className="app-subtitle">Generate humorous political speeches that will definitely not deceive voters... maybe</p>
        </header>
        
        <main className="main-content">
          <SpeechForm onGenerateSpeech={generateSpeech} isLoading={isLoading} />
          <SpeechDisplay speech={speech} isLoading={isLoading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default App; 