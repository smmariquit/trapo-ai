# AGENTS.md

Trapo App: satirical political campaign speech generator powered by Google Gemini.

## Stack

Create React App (react-scripts 5, React 18) frontend plus a small Express backend
(`server.js`) that calls `@google/generative-ai`. Plain CSS, no TypeScript, no router.

## Key files

- `server.js` - Express server, single endpoint `POST /api/generate-speech`, serves `build/` and falls back to `index.html` in production
- `src/App.js` - root component, holds speech/loading/error state, fetches the API
- `src/components/SpeechForm.js` - input form (name, position, location, API key)
- `src/components/SpeechDisplay.js` - renders the generated speech
- `src/App.css`, `src/index.css` - all styling
- `.github/workflows/ci.yml` - Node 20, `npm install`, `npm run build`, `npm test`

## Commands

- Install: `npm install`
- Dev: `npm run dev` (concurrently runs the Express server on 3001 and CRA on 3000)
- Frontend only: `npm start`
- Backend only: `npm run server`
- Build: `npm run build`
- Test: `npm test` (CRA test runner in watch mode; CI runs it non-interactively)

There is no lint script. Linting comes from CRA's built-in eslint config
(`react-app` in package.json) and surfaces during `npm start` and `npm run build`.

## Conventions and gotchas

- The Gemini API key is supplied by the user in the form and sent in the request body. There is no server-side key or .env. Keep it that way unless asked to change it.
- CRA proxies `/api` calls to `http://localhost:3001` via the `proxy` field in package.json, so frontend fetches use relative URLs. In production the Express server serves both on one port.
- `server.js` uses model id `gemini-pro`, which Google has since retired. If generation 404s, that model id is the first suspect.
- CommonJS in `server.js`, ES modules in `src/`. Match whichever file you are in.
- No test files exist yet despite testing-library deps being installed.
