# Forever Beauty & Slimming Website

A modern, static website for Forever Beauty & Slimming spa, built with [Astro](https://astro.build). Designed for easy hosting on GitHub Pages with a custom domain.

## Features

- Modern, responsive spa website design
- Mobile-first approach with sticky navigation
- Accessible (WCAG compliant) with proper focus states and ARIA labels
- SEO optimized with meta tags, Open Graph, and LocalBusiness schema
- Easy-to-edit pricing from a single JSON file
- Fast static site generation
- GitHub Pages deployment via GitHub Actions

## Project Structure

```
/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── data/
│   │   └── services.json     # ⭐ EDIT THIS FILE TO UPDATE PRICES
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with header/footer
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── services.astro    # Services & pricing page
│   │   └── contact.astro     # Contact & policies page
│   └── styles/
│       └── global.css        # All styles
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── astro.config.mjs          # Astro configuration
├── package.json
└── README.md
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the static site ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## How to Update Services & Prices

All services and pricing are stored in a single file: **`src/data/services.json`**

### File Structure

```json
{
  "pricesEffectiveDate": "January 2025",
  "categories": [
    {
      "id": "signature-facials",
      "name": "Signature Facials",
      "description": "Our classic facial treatments...",
      "services": [
        {
          "name": "Great Skin Basic Facial",
          "duration": "45 min",
          "price": 80,
          "description": [
            "Deep cleansing and exfoliation",
            "Customized mask treatment"
          ]
        }
      ]
    }
  ]
}
```

### To Update a Price

1. Open `src/data/services.json`
2. Find the service you want to update
3. Change the `price` value
4. Save the file
5. Commit and push to deploy

**Example:** To change the Basic Facial price from $80 to $85:

```json
{
  "name": "Great Skin Basic Facial",
  "duration": "45 min",
  "price": 85,  // Changed from 80
  ...
}
```

### To Add a New Service

Add a new object to the `services` array within the appropriate category:

```json
{
  "name": "New Service Name",
  "duration": "60 min",        // optional
  "price": 100,
  "priceNote": "per session",  // optional (shows under price)
  "description": [             // optional
    "Benefit one",
    "Benefit two"
  ],
  "addOn": {                   // optional (for add-on pricing)
    "price": 25,
    "duration": "15 min",
    "note": "Add to any facial"
  }
}
```

### To Add a New Category

Add a new object to the `categories` array:

```json
{
  "id": "new-category",        // URL-friendly ID (used for navigation)
  "name": "New Category Name",
  "description": "Description of this category",
  "services": [
    // ... services go here
  ]
}
```

### Update the "Prices Effective" Date

Change the `pricesEffectiveDate` value at the top of the file:

```json
{
  "pricesEffectiveDate": "February 2025",
  ...
}
```

---

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

#### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to **Settings → Pages**
   - Under "Source", select **GitHub Actions**

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

3. The site will automatically build and deploy. Check the **Actions** tab for status.

### Manual Deployment

If you prefer not to use GitHub Actions:

1. Build the site locally:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains your static site

3. You can upload this folder to any static hosting service

---

## Setting Up a Custom Domain

### Step 1: Configure Your Domain's DNS

Add these records at your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare):

**For apex domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 2: Add CNAME File

Create a file named `CNAME` in the `public/` folder with your domain:

```
foreverbeautyandslimming.com
```

### Step 3: Configure GitHub Pages

1. Go to **Settings → Pages**
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS" (after DNS propagates)

### Step 4: Update Astro Config

Edit `astro.config.mjs` to set your site URL:

```javascript
export default defineConfig({
  site: 'https://foreverbeautyandslimming.com',
  // ...
});
```

---

## Customization

### Colors

Edit the CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-primary: #8b7355;      /* Main brand color */
  --color-primary-dark: #6d5a44;
  --color-accent: #c9a87c;       /* Accent/gold color */
  --color-accent-light: #e8d5b7;
  /* ... more colors */
}
```

### Typography

```css
:root {
  --font-heading: 'Georgia', serif;
  --font-body: system-ui, -apple-system, sans-serif;
}
```

### Logo

The logo is text-based in the layout. To use an image logo:

1. Add your logo image to `public/` folder
2. Update the logo markup in `src/layouts/Layout.astro`

### Business Information

Update the LocalBusiness schema in `src/layouts/Layout.astro` with accurate business details for better SEO.

---

## Commands Reference

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## License

This project is for Forever Beauty & Slimming. All rights reserved.
