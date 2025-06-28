import React from 'react';

const SpeechDisplay = ({ speech, isLoading, error }) => {
  const getDisplayContent = () => {
    if (error) {
      return <div className="speech-content error">{error}</div>;
    }
    
    if (isLoading) {
      return (
        <div className="speech-content loading">
          <span className="loading-spinner"></span>
          Crafting your masterpiece of political deception...
        </div>
      );
    }
    
    if (!speech) {
      return (
        <div className="speech-content empty">
          <div>
            <h3>🎭 Your Speech Awaits</h3>
            <p>Fill out the form on the left and click "Generate Speech" to create your humorous political masterpiece!</p>
            <br />
            <p><em>Remember: This is all in good fun! 😄</em></p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="speech-content">
        <div style={{ whiteSpace: 'pre-wrap' }}>{speech}</div>
      </div>
    );
  };

  return (
    <div className="speech-section">
      <h2>📢 Your Campaign Speech</h2>
      {getDisplayContent()}
      
      {speech && !isLoading && !error && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => navigator.clipboard.writeText(speech)}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            📋 Copy Speech
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeechDisplay; 