#!/bin/bash

# Deploy to Render.com

# Login to Render
render login

# Create a new Web Service
render create web-service \
  --name zanzibar-experiences \
  --env PORT=3000 \
  --build-command "npm install" \
  --start-command "npm start" \
  --github-repo samir989/zanzibar-experiences \
  --branch main

# Wait for deployment
sleep 30

# Get the URL
URL=$(render services list | grep zanzibar-experiences | awk '{print $4}')

echo "Website is now live at: $URL"
echo "You can start accepting bookings!"
