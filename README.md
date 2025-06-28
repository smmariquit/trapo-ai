# 🎭 Trapo App

A humorous React application that generates satirical political campaign speeches using Google's Gemini AI. Create your own "deceptive" political speeches for fun!

## 🚀 Features

- **Interactive Form**: Input your name, desired political position, and location
- **AI-Powered Speech Generation**: Uses Google Gemini API to create humorous 30-second speeches
- **Satirical Content**: Generates speeches with classic political rhetoric and empty promises
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Copy to Clipboard**: Easy speech copying functionality

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key (free at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your Gemini API key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the key (you'll need it when using the app)

4. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start both the React frontend (port 3000) and the Express backend (port 3001)

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

1. **Enter your Gemini API key** in the designated field
2. **Fill out the form**:
   - Your name
   - The position you're running for (from the dropdown)
   - The location/area you're running in
3. **Click "Generate Speech"** and wait for your humorous political masterpiece!
4. **Copy the speech** using the copy button if you want to save it

## 🎨 Available Positions

- Mayor
- Governor
- Senator
- Congressman/Congresswoman
- President
- City Council Member
- School Board Member
- Dog Catcher
- Pothole Inspector
- Professional Complainer

## 🔧 Technical Details

- **Frontend**: React 18 with modern CSS
- **Backend**: Express.js server
- **AI**: Google Gemini Pro API
- **Styling**: Custom CSS with responsive design
- **Deployment**: Ready for deployment on platforms like Heroku, Vercel, or Netlify

## 🚀 Deployment

### Option 1: Deploy to Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Run:
   ```bash
   heroku create your-app-name
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### Option 2: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: Deploy to Netlify
1. Build the app: `npm run build`
2. Upload the `build` folder to Netlify

## 🔒 Security Notes

- API keys are handled client-side (for demo purposes)
- In production, consider moving API key handling to environment variables
- The app is for entertainment purposes only

## 🎭 Disclaimer

This app is created purely for entertainment and educational purposes. The generated speeches are satirical and humorous in nature. Please use responsibly and remember that this is all in good fun! 😄

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add more political positions
- Include speech templates
- Add voice synthesis
- Create speech sharing functionality

## 📝 License

This project is open source and available under the MIT License.

---

**Happy campaigning! 🗣️✨** 