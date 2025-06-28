const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static('build'));

// API endpoint for generating speeches
app.post('/api/generate-speech', async (req, res) => {
  try {
    const { name, position, location, apiKey } = req.body;

    if (!name || !position || !location || !apiKey) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    // Create the prompt for the humorous speech
    const prompt = `Create a humorous 30-second political campaign speech for ${name} who is running for ${position} in ${location}. 

The speech should be:
- Approximately 30 seconds when read aloud
- Humorous and satirical in nature
- Include classic political rhetoric and empty promises
- Use flowery language and grandiose claims
- Include at least one ridiculous promise or statement
- End with a call to action
- Be entertaining but not offensive

Make it sound like a typical politician trying to deceive voters with empty promises and flowery language. Keep it light-hearted and funny!`;

    // Generate the speech
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const speech = response.text();

    res.json({ speech });
  } catch (error) {
    console.error('Error generating speech:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    if (error.message.includes('API_KEY_INVALID')) {
      res.status(401).json({ error: 'Invalid API key. Please check your Gemini API key.' });
    } else if (error.message.includes('QUOTA_EXCEEDED')) {
      res.status(429).json({ error: 'API quota exceeded. Please try again later.' });
    } else {
      res.status(500).json({ 
        error: 'Failed to generate speech. Please try again.',
        details: error.message
      });
    }
  }
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Trapo App server running on port ${PORT}`);
  console.log(`🎭 Political deception awaits at http://localhost:${PORT}`);
}); 