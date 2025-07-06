#!/bin/bash

# Navigate to your project folder
cd /home/ec2-user/my-mern-app || exit

# Pull latest changes from GitHub
git pull origin main

# Install dependencies if changed
npm install

# Build frontend if needed (React)
npm run build

# Restart your backend (assuming you use PM2)
pm2 restart all
