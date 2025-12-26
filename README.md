# Wren Digital Website

A modern, professional business website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by professional digital agency websites, featuring smooth animations and responsive design.

## 🚀 Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎨 Styled with Tailwind CSS
- 🎭 Framer Motion animations
- 🔍 SEO optimized
- 📄 Multiple pages (Home, Services, Projects, About, Contact)
- 💼 Professional service showcase
- 🖼️ Project portfolio with filtering
- 💬 Client testimonials
- 📧 Contact form

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
digital-web/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── Projects.tsx       # Projects showcase
│   ├── Testimonials.tsx   # Client reviews
│   └── CTA.tsx            # Call-to-action
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },    // Main brand color
  secondary: { ... },  // Accent color
}
```

### Content

1. **Company Info**: Update in `components/Footer.tsx` and `app/layout.tsx`
2. **Services**: Modify the services array in `components/Services.tsx`
3. **Projects**: Edit projects in `components/Projects.tsx`
4. **Testimonials**: Update testimonials in `components/Testimonials.tsx`

### Images

Replace placeholder images in:
- `components/Projects.tsx`
- `components/Testimonials.tsx`
- `app/projects/page.tsx`

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your Git repository
- **AWS/DigitalOcean**: Build and deploy the `.next` folder

## 🧰 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, reach out at info@wrendigital.com

---

Built with ❤️ using Next.js and Tailwind CSS
