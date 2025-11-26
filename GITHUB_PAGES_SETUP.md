# GitHub Pages Deployment Guide

This Health & Wellness Portal is configured for GitHub Pages deployment.

## Prerequisites
- Node.js installed
- GitHub repository created
- `gh-pages` package installed (included in devDependencies)

## Step-by-Step Deployment

### 1. Update Configuration
In `package.json`, replace `yourusername` with your actual GitHub username:
\`\`\`json
"homepage": "https://yourusername.github.io/health-wellness-portal"
\`\`\`

### 2. Build and Deploy
Run the deployment command:
\`\`\`bash
npm run deploy
\`\`\`

This will:
- Build the Next.js app
- Export to static HTML
- Push the `out` folder to the `gh-pages` branch

### 3. Enable GitHub Pages
- Go to your repository settings
- Scroll to "Pages" section
- Set source to "Deploy from a branch"
- Select `gh-pages` branch and `/root` folder
- Click Save

### 4. Access Your Site
Your app will be available at:
\`\`\`
https://yourusername.github.io/health-wellness-portal
\`\`\`

## Demo Users

All demo accounts use password: `password123`

- **Sarah Johnson** - sarah@wellness.com
- **Mike Chen** - mike@wellness.com
- **Emily Rodriguez** - emily@wellness.com
- **David Thompson** - david@wellness.com
- **Jessica Lee** - jessica@wellness.com

## Features Available

- User authentication with demo accounts
- Gamified dashboard with points and ranks
- Interactive activity checklist
- Leaderboard with friend rankings
- Editable wellness recommendations
- Exclusive gym and health store discounts
- Places to visit discovery
- Push notifications and plan recommendations

## Troubleshooting

**404 Error on GitHub Pages:**
- Ensure `basePath` in `next.config.mjs` matches your repository name
- Clear browser cache
- Wait a few minutes for GitHub Pages to rebuild

**Images Not Loading:**
- They are optimized for static export (unoptimized: true)
- All images use relative paths with basePath

**Local Testing:**
\`\`\`bash
npm run build
npx http-server out
# Visit http://localhost:8080/health-wellness-portal
