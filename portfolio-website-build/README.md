# Ankireddypalli Thanush - Portfolio

A modern, cinematic portfolio website showcasing AI development, software engineering, and design expertise. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

### Design & UX
- **Modern Aesthetic**: Clean, luxury dark theme with contemporary design
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations and transitions
- **Visual Hierarchy**: Clear emphasis on important elements
- **Accessibility**: Semantic HTML and proper ARIA attributes

### Performance
- **Fast Load Times**: Next.js 16 with Turbopack optimization
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images with lazy loading
- **Compression**: Gzip and Brotli compression enabled
- **Caching**: Browser and server-side caching configured

### Sections
- **Hero**: Eye-catching introduction with smooth animations
- **About**: Personal journey and career timeline
- **Projects**: Featured work with detailed descriptions
- **Tech Stack**: Organized skills by category
- **Experience**: Professional background and certifications
- **Philosophy**: Core beliefs and approach
- **Contact**: Easy ways to get in touch
- **Footer**: Quick links and credits

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D**: Three.js & React Three Fiber (prepared)

### Backend & Services
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel (recommended)
- **Form Handling**: Ready for integration with Formspree, SendGrid, etc.

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Type Checking**: TypeScript strict mode

## Getting Started

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## Deployment

### Deploy to Vercel (Recommended)
**Fastest way - takes 30 seconds:**

1. Click the **"Publish"** button in v0 interface
2. Wait for build to complete
3. Get your live URL
4. Done! 🚀

### Deploy to Your Own Domain
1. Set up custom domain in Vercel dashboard
2. Update DNS records (Vercel guides you)
3. Free SSL certificate included
4. Live within 24-48 hours

### Full Deployment Guide
See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Step-by-step deployment instructions
- GitHub integration setup
- Custom domain configuration
- Performance monitoring
- Troubleshooting guide

### Quick Checklist
See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for:
- Pre-deployment verification
- Post-deployment testing
- Performance targets
- Monitoring guidelines

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About & timeline
│   ├── projects.tsx         # Featured works
│   ├── tech-stack.tsx       # Skills section
│   ├── experience.tsx       # Experience & certs
│   ├── philosophy.tsx       # Philosophy section
│   ├── contact.tsx          # Contact form
│   └── footer.tsx           # Footer
├── public/                  # Static assets
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── DEPLOYMENT.md            # Deployment guide
```

## Key Features Implemented

### Performance Optimizations
- ✅ Automatic code splitting
- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ CSS minification and compression
- ✅ Security headers configured
- ✅ Experimental package import optimization

### SEO & Metadata
- ✅ Proper metadata configuration
- ✅ Open Graph tags for social sharing
- ✅ Twitter card support
- ✅ Canonical URL handling
- ✅ Sitemap ready
- ✅ Schema markup ready

### Security
- ✅ XSS protection headers
- ✅ Clickjacking prevention
- ✅ Content type sniffing prevention
- ✅ Referrer policy configured
- ✅ React strict mode enabled
- ✅ TypeScript strict mode enabled

### Developer Experience
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Responsive design system
- ✅ Reusable components
- ✅ Clean folder structure
- ✅ Comprehensive documentation

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## Performance Metrics

**Target Web Vitals:**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FCP** (First Contentful Paint): < 1.8s
- **CLS** (Cumulative Layout Shift): < 0.1

**Build Size:**
- Next Build: ~174MB (includes caching & optimization layers)
- Actual Deployment: ~15-20MB (only necessary code)

## Customization

### Change Colors
Edit `app/globals.css` and update the CSS variables in the `:root` and `.dark` selectors:
```css
--primary: #6366f1;
--secondary: #8b5cf6;
--accent: #06b6d4;
```

### Change Content
Edit individual component files:
- `components/hero.tsx` - Main headline
- `components/about.tsx` - Bio and timeline
- `components/projects.tsx` - Your work
- `components/tech-stack.tsx` - Your skills
- `components/contact.tsx` - Contact info

### Add New Sections
1. Create new file in `components/`
2. Add section to `app/page.tsx`
3. Add navigation link in footer or header

## Updating Content

### Via v0 (Easiest)
1. Edit in v0 interface
2. Preview changes
3. Click "Publish" to deploy

### Via GitHub
1. Clone repository locally
2. Edit files in your editor
3. Commit and push changes
4. Vercel automatically deploys

## Performance Monitoring

### Vercel Analytics
- View in your Vercel project dashboard
- Track Web Vitals in real-time
- Monitor page performance
- See user engagement metrics

### Google PageSpeed Insights
- Test at: https://pagespeed.web.dev
- Enter your domain
- Get performance recommendations

## Future Enhancements

Consider adding:
- [ ] Blog section with MDX
- [ ] Dark/Light mode toggle
- [ ] More 3D animations with Three.js
- [ ] Video showcase for projects
- [ ] Email newsletter signup
- [ ] CMS integration for content management

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React Docs**: https://react.dev

## License

This project is open source and available under the MIT License.

## Credits

Built with:
- **Framework**: Next.js 16
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Created with**: v0.app

---

**Ready to Deploy?** 🚀

1. Click "Publish" button
2. Wait for build (~1-2 minutes)
3. Share your live portfolio!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.
