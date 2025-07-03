# Deployment Guide for Winodya's Portfolio

## 📁 Project Structure
```
New_portfolio/
└── winodya-portfolio/    ← This is your project root
    ├── src/
    ├── public/
    ├── package.json
    └── ... other files
```

**Important:** Always run commands from the `winodya-portfolio` directory!

## 🚀 Local Development

```bash
# Navigate to project directory
cd "e:\Projects\Winu\New_portfolio\winodya-portfolio"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Quick Deployment to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   # Make sure you're in the correct directory
   cd "e:\Projects\Winu\New_portfolio\winodya-portfolio"
   
   # Initialize git and push to GitHub
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/WinuWijegunawardhana98/winodya-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: Leave empty (default)
   - Click "Deploy"

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**
   ```bash
   vercel login
   vercel
   ```

3. **Follow the prompts**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `winodya-portfolio`
   - Directory: `./`

## Environment Variables (Optional)

If you add any environment variables, configure them in Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Build Optimization

The portfolio is already optimized with:
- ✅ Static generation
- ✅ Image optimization
- ✅ Bundle optimization
- ✅ CSS optimization
- ✅ TypeScript support
- ✅ SEO meta tags

## Performance Features

- **Core Web Vitals optimized**
- **Responsive design**
- **Smooth animations**
- **Fast loading times**
- **Accessible components**

## Analytics Integration (Optional)

To add Google Analytics:
1. Get your GA4 measurement ID
2. Add to environment variables: `NEXT_PUBLIC_GA_ID`
3. The portfolio can be easily extended to include analytics

## Maintenance

Keep your portfolio updated:
- Update dependencies regularly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Test builds locally: `npm run build`

## Support

If you encounter any issues:
- Check the build logs in Vercel dashboard
- Ensure all dependencies are properly installed
- Verify environment variables are set correctly
- Test locally first with `npm run dev`
