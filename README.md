# Developer Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by the Developer X Webflow template with enhanced features and customization options.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme**: Eye-friendly dark mode interface
- **Performance Optimized**: Fast loading times and smooth user experience
- **SEO Friendly**: Optimized for search engines
- **Type Safe**: Built with TypeScript for better development experience
- **Easy Customization**: Well-organized component structure for easy modifications

## 🚀 Sections

- **Hero**: Eye-catching introduction with CTA buttons
- **About**: Personal introduction and core values
- **Skills**: Technical skills with visual progress bars
- **Projects**: Portfolio showcase with project cards
- **Experience**: Work history and education timeline
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animations (optional)

## 📦 Installation

1. **Clone or download the repository**

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`)
   - Update your name and title
   - Modify the introduction text
   - Add your social media links

2. **About Section** (`components/About.tsx`)
   - Replace placeholder image/emoji with your photo
   - Update personal description
   - Modify core values

3. **Skills Section** (`components/Skills.tsx`)
   - Update skill levels and categories
   - Add/remove technologies

4. **Projects Section** (`components/Projects.tsx`)
   - Add your actual projects
   - Update project images, descriptions, and links
   - Modify tags to match your tech stack

5. **Experience Section** (`components/Experience.tsx`)
   - Update work experience
   - Add your education details
   - Include certifications

6. **Contact Section** (`components/Contact.tsx`)
   - Update contact information
   - Configure form submission (e.g., EmailJS, Formspree)

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Update these values for your brand colors
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
}
```

### Update Metadata

Edit `app/layout.tsx` to update SEO information:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your custom description',
  keywords: ['your', 'keywords'],
}
```

## 📝 Form Integration

To make the contact form functional, integrate with a service:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

### Option 2: Formspree
Add your Formspree endpoint to the form action.

### Option 3: Custom API Route
Create `app/api/contact/route.ts` for server-side handling.

## 🖼️ Adding Images

1. Place images in the `public` folder
2. Reference them in components:
```tsx
<Image src="/your-image.jpg" alt="Description" width={600} height={400} />
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build your project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Other Platforms

Build the project and deploy the output:
```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the Developer X Webflow Template by BRIX Templates
- Built with modern web technologies and best practices

## 📧 Contact

For questions or suggestions, please open an issue or reach out through the contact form.

---

**Made with ❤️ using Next.js and Tailwind CSS**
