# Travel Destination Web

A fully responsive, interactive travel website that showcases global destinations and helps travelers discover, plan, and share their journey.

## Overview

**Travel Destination Web** is a modern travel exploration platform built with vanilla HTML, CSS, and JavaScript. It provides users with an intuitive interface to browse curated travel destinations, explore interactive maps, read travel tips, and get in touch with travel advisors. The site emphasizes accessibility, responsive design, and user engagement through rich visual storytelling and interactive features.

**Use Cases:**
- Discover top travel destinations worldwide
- Plan trips with interactive mapping and location search
- Learn practical travel tips and best practices
- Contact travel advisors for personalized recommendations
- Access responsive design across all devices

---

## Technology Stack

### Frontend
- **HTML5** – Semantic markup for all pages and interactive elements
- **CSS3** – Advanced styling with Flexbox, Grid, and Media Queries for responsive design
- **JavaScript (ES5+)** – Client-side interactivity and event handling

### Key Libraries & APIs
- **Unsplash API** – Hero section background images for visual appeal
- **Leaflet.js** (referenced) – Interactive map functionality (planned integration)
- **Weather API** (referenced) – Location-based weather information (planned integration)

### Tools & Infrastructure
- **GitHub** – Version control and repository hosting
- **GitHub Pages** – Static site hosting (enabled)

---

## How It's Organized

```
Travel-Destination-Web/
├── index.html                  # Home page with featured destinations
├── About.html                  # Project mission and values
├── Top Destinations.html       # Curated destination showcase (horizontal scroll)
├── Interactive Map.html        # Location search with map and weather
├── Travel Tips.html            # Practical travel advice cards
├── Contacts.html               # Contact form for inquiries
├── Confirmation.html           # Form submission confirmation page
├── Reviews.html                # (Planned) User reviews section
├── style.css                   # Global styles, responsive design, animations
├── script/
│   ├── dropdown.js             # Navigation menu toggle functionality
│   ├── script.js               # Utility scripts (placeholder)
│   └── Age.py                  # Python utility (external tool)
├── images/                     # Destination photos and assets
│   ├── bali.png
│   ├── paris.png
│   ├── newyork.png
│   ├── london.png
│   ├── beijing.png
│   ├── australia.png
│   ├── Santorini.jpg
│   ├── BaliIndonesia.jpg
│   ├── NewYork.jpg
│   └── ...
└── README.md                   # This file
```

### How It Fits Together

**Request Flow:**
1. User loads `index.html` (home) with featured destination cards
2. Dropdown menu (managed by `dropdown.js`) allows navigation to other pages
3. Each page shares `style.css` for consistent branding and responsive layout
4. Interactive elements (e.g., map search on Interactive Map.html) trigger JavaScript handlers
5. Contact form on `Contacts.html` submits to backend (or form service), redirecting to `Confirmation.html`

**Key Components:**
- **Navigation:** Responsive dropdown menu in `script/dropdown.js` with click/touch detection
- **Styling:** Mobile-first CSS with breakpoints at 1200px, 834px, 600px, 480px, and 390px
- **Page Structure:** Each page imports shared `style.css` and loads `dropdown.js` for consistent UX
- **Visual Assets:** Images in `/images` folder referenced across destination cards and hero sections

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup required (static site)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TMirev/Travel-Destination-Web.git
   cd Travel-Destination-Web
   ```

2. **Open in browser:**
   ```bash
   # Option A: Open index.html directly
   open index.html

   # Option B: Run a local server (Python 3)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **View pages:**
   - **Home:** `index.html`
   - **About:** `About.html`
   - **Top Destinations:** `Top Destinations.html`
   - **Interactive Map:** `Interactive Map.html`
   - **Travel Tips:** `Travel Tips.html`
   - **Contact:** `Contacts.html`

### Deployment

The site is ready for GitHub Pages or any static hosting:

```bash
# Push to main branch to deploy via GitHub Pages
git push origin main
```

Visit: `https://TMirev.github.io/Travel-Destination-Web/`

---

## Features

### Current
- ✅ **Responsive Design** – Fully optimized for desktop, tablet, and mobile
- ✅ **Destination Showcase** – Cards with images, descriptions, and highlights
- ✅ **Navigation Menu** – Dropdown navigation with smooth interactions
- ✅ **Travel Tips** – Grid of practical travel advice
- ✅ **Contact Form** – User inquiries with validation
- ✅ **Form Confirmation** – Success page after submission
- ✅ **Accessibility** – Semantic HTML and keyboard navigation

### Planned
- 🔄 **Interactive Maps** – Location search with Leaflet.js
- 🔄 **Weather Integration** – Real-time weather for destinations
- 🔄 **User Reviews** – Community feedback on destinations
- 🔄 **Backend Integration** – Contact form submission to database
- 🔄 **Dark Mode** – Theme toggle for improved UX

---

## File Structure & Key Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page with hero section and featured destinations |
| `style.css` | 1000+ lines: responsive design, animations, all page styles |
| `script/dropdown.js` | Navigation menu toggle with event listeners |
| `About.html` | Mission statement and project overview |
| `Top Destinations.html` | Horizontal scrollable destination cards |
| `Interactive Map.html` | Placeholder for map and location search |
| `Travel Tips.html` | Grid of travel advice cards |
| `Contacts.html` | Contact form with validation |
| `Confirmation.html` | Form submission success page |

---

## Styling Highlights

- **Color Palette:** Light blue background, teal accents, dark headers
- **Typography:** Segoe UI, Playfair Display (headings), Poppins (UI)
- **Responsive Breakpoints:**
  - 1200px and above: Full layout
  - 834px: Tablet layout
  - 600px: Mobile layout
  - 480px: Smaller phones
  - 390px: Ultra-small phones

- **Animations:** Fade-in effects, card hover transforms, smooth transitions

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## Future Enhancements

- [ ] Backend API for contact form submissions
- [ ] Database to store user inquiries
- [ ] Leaflet.js integration for interactive destination maps
- [ ] Weather API integration for real-time conditions
- [ ] User authentication for saved favorites
- [ ] Reviews and ratings system
- [ ] Blog/articles section
- [ ] Multi-language support

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact & Support

Have questions or suggestions? Reach out via:
- **Email:** Contact form on the website
- **GitHub:** [TMirev](https://github.com/TMirev)
- **Repository:** [Travel-Destination-Web](https://github.com/TMirev/Travel-Destination-Web)

---

## Changelog

**v1.0.0** (Initial Release)
- Core structure with 7 pages
- Responsive design across all breakpoints
- Dropdown navigation menu
- Destination showcase and travel tips
- Contact form with confirmation page

---

**Built with ❤️ by [TMirev](https://github.com/TMirev)**
