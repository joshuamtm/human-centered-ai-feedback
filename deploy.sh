#!/bin/bash
echo "Deploying Human-Centered AI Feedback Dashboard to Netlify..."
npx netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=human-centered-ai-feedback-report