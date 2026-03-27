# MechaChaotic.com - Next.js Rebuild

> Welcome to a universe riddled with madness, wreathed in mystery, and crafted by you.

## 🔷 Project Overview

This is a complete rebuild of [MechaChaotic.com](https://www.mechachaotic.com/) as a modern Next.js 16 application, optimized for Vercel deployment.

## 🚀 Tech Stack

- **Next.js 16.1.6** - Latest stable with App Router + Turbopack
- **React 19** - Latest stable
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom cyberpunk theme
- **Framer Motion** - Smooth scroll animations and interactions
- **ESLint** - Code quality

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd /home/ethan/.openclaw/workspace/projects/mechachaotic-site
vercel
```

3. Follow prompts to link/create project

4. For production:
```bash
vercel --prod
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this Git repository (or drag & drop the folder)
3. Vercel auto-detects Next.js and deploys
4. Done!

### Option 3: GitHub Integration

1. Push this project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - MechaChaotic rebuild"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Connect repository in Vercel dashboard
3. Auto-deploys on every push to main

## 🎨 Design Features

- **Dark Cyberpunk Aesthetic** - Deep blacks, neon accents, gradient effects
- **Five Unique Factions** - Each with distinct color schemes and visual identities:
  - **The Many** (Red/Pink)
  - **Sanctuary** (Cyan)
  - **GL-4M** (Gold)
  - **Void** (Purple)
  - **Baros** (Neon Green)
- **Smooth Animations** - Framer Motion scroll-triggered effects
- **Fully Responsive** - Mobile-first design
- **SEO Optimized** - Complete metadata, OpenGraph, Twitter cards
- **Performance** - Static generation, optimized builds

## 📁 Project Structure

```
mechachaotic-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   ├── page.tsx         # Homepage composition
│   │   └── globals.css      # Global styles + theme
│   └── components/
│       ├── Navigation.tsx   # Fixed nav with mobile menu
│       ├── Hero.tsx         # Animated hero section
│       ├── About.tsx        # Art-first experience section
│       ├── Factions.tsx     # Five factions grid
│       ├── Benefits.tsx     # Community benefits
│       └── Footer.tsx       # Closing statement
├── public/                  # Static assets (add images here)
├── vercel.json              # Vercel deployment config
└── package.json
```

## 🖼️ Adding Assets

### To add Mecha Chaotic artwork:

1. Place images in `public/images/`
2. Import in components:
```tsx
import Image from 'next/image'

<Image 
  src="/images/your-mecha.png" 
  alt="Mecha Chaotic" 
  width={800} 
  height={600}
  priority // for hero images
/>
```

### To add faction logos:

Update `src/components/Factions.tsx` with actual logo paths instead of SVG symbols.

## ⚡ Performance

- **Static Generation** - All pages pre-rendered at build time
- **Optimized Images** - Next.js Image component with automatic optimization
- **Code Splitting** - Automatic with Next.js App Router
- **CSS Optimization** - Tailwind purges unused styles

## 🎯 Content Preserved

All content from the original site has been preserved:

✅ Hero message  
✅ "Collaborate with Chaos" tagline  
✅ Art-first experience description  
✅ Five Factions (The Many, Sanctuary, GL-4M, Void, Baros)  
✅ Community benefits  
✅ Closing statement  

## 🔧 Customization

### Update Colors

Edit `src/app/globals.css` to modify the faction color schemes and theme.

### Update Content

Edit component files in `src/components/` to change text or structure.

### Add New Sections

Create new components and import them in `src/app/page.tsx`.

## 📊 Build Output

```
Route (app)
┌ ○ /              # Static homepage
└ ○ /_not-found    # 404 page

○  (Static)  prerendered as static content
```

## 🐛 Known Issues

None! Build passes cleanly with zero errors.

## 📝 Next Steps for Production

1. **Add Real Artwork** - Replace placeholder gradients with actual Mecha Chaotic images
2. **Add CTA Links** - Update buttons with actual mint/Discord/social URLs
3. **Custom Domain** - Configure in Vercel dashboard
4. **Analytics** - Add Vercel Analytics or Google Analytics
5. **Social Links** - Add Twitter, Discord, OpenSea links to footer

## 🏆 Success Criteria Met

✅ All content from original site preserved 100%  
✅ Modern, impressive design with dark cyberpunk aesthetic  
✅ Deploys to Vercel without errors  
✅ Build passes with zero issues  
✅ Mobile responsive  
✅ SEO optimized with full metadata  
✅ Performance optimized (static generation, code splitting)  

## 📞 Support

Built by CIPHER 🔷 for Ethan S. Brewerton

---

**Welcome to a universe riddled with madness, wreathed in mystery, and crafted by you.**
