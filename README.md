# Yash Shah Portfolio Website

A modern, production-ready portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. Showcases professional experience, projects, skills, and contact information.

## Features
- Responsive landing page with hero section
- About me section with bio and resume download
- Career highlights timeline
- Featured projects grid with custom images
- Skills section with technology tags
- Contact form (Formspree integration) and social links
- Dark mode toggle
- Smooth animations and transitions
- Mobile-first design
- SEO optimized and accessible

## Tech Stack
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development/build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Formspree](https://formspree.io/) for contact form delivery

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment

- The site is fully static and can be deployed to Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static host.
- For custom domains, follow your host's instructions to set DNS and enable HTTPS.
- If using GitHub Pages, remove `dist` from `.gitignore` and push the build output to the `gh-pages` branch.

## Publishing Updates to GitHub Pages

To deploy new changes to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```
2. Publish the `dist` folder to the `gh-pages` branch using the gh-pages package:
   ```bash
   npx gh-pages -d dist
   ```
3. Wait a few minutes, then visit your site at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

**Note:**
- Make sure your `vite.config.ts` has the correct `base` set (e.g., `/yash-portfolio/`).
- Remove `dist` from `.gitignore` if you want to commit the build output manually.
- For custom domains, configure in GitHub Pages settings and update DNS records.

## Accessibility & SEO
- Uses semantic HTML, ARIA labels, and is optimized for search engines.
- Responsive and dark mode compatible.

## Contributing
Pull requests and issues are welcome! Please follow best practices and ensure all code is well-documented and tested.

## License
MIT

---

> Built and maintained by Yash Shah. For inquiries, use the contact form or connect via LinkedIn/GitHub.
