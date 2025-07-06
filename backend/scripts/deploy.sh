#!/bin/bash

# Set your project root directory here
PROJECT_DIR="/home/ec2-user/DakePeng"

echo "Deploy started at $(date)"

# Pull latest changes from main branch
cd $PROJECT_DIR || exit
git pull origin main

# --------- Frontend ---------
echo "Deploying frontend..."
cd $PROJECT_DIR/frontend || exit
git pull origin main
npm install
npm run build

# --------- Backend ----------
echo "Deploying backend..."
cd $PROJECT_DIR/backend || exit
git pull origin main
npm install

# Restart backend server (using pm2, replace "backend-app" with your pm2 process name)
pm2 restart backend

echo "Deploy finished at $(date)"
