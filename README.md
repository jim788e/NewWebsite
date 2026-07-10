# MOOZ Collection Website

A modern landing page for the MOOZ NFT Collection, built with Astro, TailwindCSS, and Vercel.

🌐 **Official Website**: [https://www.mooz.top](https://www.mooz.top)

## 🌟 Features

- Built with Astro (Hybrid rendering with Vercel serverless integration)
- **Live Statistics**: Real-time Floor Price, Total Volume, and Holders stats pulled securely from OpenSea API v2 with CDN-level edge caching (5 minutes) and graceful fallback error-hiding
- Responsive design optimized for all devices
- Smooth scroll animations powered by GSAP
- OpenSea marketplace integration
- Optimized local image delivery
- Modern image formats support (AVIF, WebP)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/jim788e/mooz-website.git
   cd mooz-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables for local stats testing:
   Create a `.env` file in the project root (this file is ignored by Git):
   ```env
   OPENSEA_API_KEY=your_opensea_api_key
   OPENSEA_COLLECTION_SLUG=mooznfts
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Built With

- [Astro](https://astro.build/) - Web framework for content-driven websites
- [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) - Vercel hosting adapter for serverless API routes
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GSAP](https://gsap.com/) - GreenSock Animation Platform for animations

## 📁 Project Structure

```
mooz-website/
├── public/                # Static assets
│   └── images/            # Optimized local images
├── src/
│   ├── assets/            # Project assets (images, icons)
│   ├── components/        # Astro components (StatsBar.astro, Icon.astro, Footer.astro, etc.)
│   ├── layouts/           # Page layouts (Layout.astro)
│   ├── pages/             # Page files (index.astro, privacy.astro, terms/)
│   │   └── api/           # Serverless API routes (stats.json.ts)
│   └── styles/            # Global stylesheets (globals.css)
├── .env                   # Local environment variables (git-ignored)
├── astro.config.mjs       # Astro configuration with Vercel integration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🚀 Deployment

The project is configured for deployment on **Vercel** with support for serverless API endpoints.

### Build
Build the project locally:
```bash
npm run build
```

This generates:
- Static client-side assets under `.vercel/output/static`
- Server-side entrypoint function under `.vercel/output/functions`

### Environment Variables
Configure the following environment variables in your **Vercel Project Settings**:
- `OPENSEA_API_KEY`: Your OpenSea developer portal key.
- `OPENSEA_COLLECTION_SLUG`: The collection slug (e.g. `mooznfts`).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MOOZ Collection Team
- SEI Blockchain Community
- OpenSea Marketplace
