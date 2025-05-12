# Rycerze Jana Pawła II Website

A modern, accessible, and multilingual website for the Catholic order "Knights of John Paul II" built with Next.js 14, Tailwind CSS, and Decap CMS.

## Features

- 🌐 Multilingual support (Polish, English, Ukrainian)
- ♿ WCAG 2.1 AA accessibility compliance
- 📱 Responsive design
- 🎨 Modern UI with Catholic aesthetics
- 📝 Git-based content management with Decap CMS
- 🔍 SEO optimized

## Tech Stack

- Next.js 14+ with App Router
- Tailwind CSS for styling
- Decap CMS (Netlify CMS fork) for content management
- TypeScript for type safety
- Google Fonts (Merriweather, Inter)

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rycerze-jana-pawla-ii.git
   cd rycerze-jana-pawla-ii
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

The website uses Decap CMS for content management. To access the CMS:

1. Navigate to `/admin` on your deployed site
2. Log in with your GitHub credentials
3. Start editing content

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

### GitHub Pages

1. Update `next.config.js` with your GitHub Pages URL
2. Add the following to your `package.json`:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```
3. Run `npm run export`
4. Push the `out` directory to your GitHub Pages branch

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── content/         # Markdown content
│   └── styles/          # Global styles
├── public/              # Static assets
└── admin/              # Decap CMS configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Decap CMS](https://decapcms.org/)
- [Google Fonts](https://fonts.google.com/) 