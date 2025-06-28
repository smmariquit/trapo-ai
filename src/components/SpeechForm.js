import React, { useState } from 'react';

const SpeechForm = ({ onGenerateSpeech, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    location: '',
    apiKey: ''
  });

  const positions = [
    'Mayor',
    'Governor',
    'Senator',
    'Congressman/Congresswoman',
    'President',
    'City Council Member',
    'School Board Member',
    'Dog Catcher',
    'Pothole Inspector',
    'Professional Complainer'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.position || !formData.location || !formData.apiKey) {
      alert('Please fill in all fields including your Gemini API key!');
      return;
    }
    onGenerateSpeech(formData);
  };

  return (
    <div className="form-section">
      <h2>🎤 Campaign Setup</h2>
      
      <div className="api-key-section">
        <h3>🔑 Gemini API Key Required</h3>
        <p>You'll need a Google Gemini API key to generate speeches. Get one for free at <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>.</p>
        <div className="api-key-input">
          <input
            type="password"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleInputChange}
            placeholder="Enter your Gemini API key"
            required
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position You're Running For:</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a position...</option>
            {positions.map((pos, index) => (
              <option key={index} value={pos}>{pos}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location/Area:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., New York City, California, District 5"
            required
          />
        </div>

        <button 
          type="submit" 
          className="generate-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Crafting Your Deceptive Speech...
            </>
          ) : (
            '🎭 Generate Speech'
          )}
        </button>
      </form>
    </div>
  );
};

export default SpeechForm; 