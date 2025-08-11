# Zanzibar Premium Experiences Deployment Guide

## 1. Build Command

The build command (`npm install`) does these things:
1. Reads your package.json file
2. Downloads and installs all required dependencies
3. Creates a node_modules folder with all packages

Example:
```bash
npm install
```

## 2. Start Command

The start command (`npm start`) runs your server:
1. Starts the Express.js server
2. Listens for incoming requests
3. Serves your website files

Example:
```bash
npm start
```

## 3. Environment Variables

Environment variables are settings that can be changed without modifying the code.

### PORT Variable
- Default value: 3000
- Used by Render to specify which port your app should use
- Automatically set by Render

### Other Useful Variables
- `NODE_ENV`: Set to 'production' in production
- `DEBUG`: For debugging
- `SECRET_KEY`: For security

## How to Set Up in Render

1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Set these configurations:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     - PORT: 3000

## Testing Locally

To test locally:
1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open browser to:
http://localhost:3000

## Troubleshooting

If you get errors:
1. Check if dependencies are installed
2. Verify server.js is correct
3. Make sure PORT is set
4. Check for typos in commands

## Example Configuration

Here's what your package.json should look like:
```json
{
  "name": "zanzibar-experiences",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.4",
    "cors": "^2.8.5"
  }
}
```

And your server.js should use the PORT variable:
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
