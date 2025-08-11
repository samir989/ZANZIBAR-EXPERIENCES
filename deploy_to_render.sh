#!/bin/bash

# Install Render CLI if not installed
if ! command -v render &> /dev/null; then
    echo "Installing Render CLI..."
    curl -fsSL https://render.com/cli/install.sh | sh
fi

# Login to Render
render login

# Create Render service
render create web-service \
  --name zanzibar-experiences \
  --env PORT=3000 \
  --build-command "npm install" \
  --start-command "npm start" \
  --github-repo samir989/zanzibar-experiences \
  --branch main

# Wait for deployment
sleep 30

# Get URL and save it
URL=$(render services list | grep zanzibar-experiences | awk '{print $4}')

echo "Website is now live at: $URL"
echo "You can start accepting bookings!"

echo "To update the website:"
echo "1. Make changes to your local files"
echo "2. Commit and push to GitHub"
echo "3. The website will update automatically"
