# DocAround

> A responsive healthcare landing page for discovering doctors, clinics, hospitals, and medical specialties.

DocAround is a polished, mobile-first front-end website built with plain HTML, CSS, and JavaScript. It presents healthcare services in a clear, approachable interface with animated content, specialist listings, articles, and contact details.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Responsive](https://img.shields.io/badge/design-responsive-00ACB1)

## Highlights

- Fully responsive layout for mobile, tablet, and desktop screens
- Doctor and specialty discovery interface with a location search field
- Medical service cards and specialist listings
- About, latest-articles, and detailed footer sections
- Responsive mobile navigation with overlay controls
- Page preloader, reveal-on-scroll animations, sticky header, and back-to-top button
- Optimized asset loading with eager hero imagery and lazy-loaded supporting images
- Accessible labels on navigation, action controls, and key links

## Built with

- **HTML5** — page structure and semantic content
- **CSS3** — responsive layout, design system, transitions, and animations
- **JavaScript** — navigation, preloader, scroll interactions, and reveal effects
- **Google Fonts** — Oswald and Rubik typefaces
- **Ionicons** — interface and social-media icons

## Getting started

DocAround has no build process or package installation step.

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Open the project folder:

   ```bash
   cd DocAround
   ```

3. Open `index.html` in a modern browser.

For the smoothest development experience, serve the folder with a local development server (for example, VS Code's Live Server extension).

## Project structure

```text
DocAround/
├── assets/
│   ├── css/
│   │   └── style.css       # Design system, layout, responsiveness, animations
│   ├── images/             # Logo, service icons, banners, and backgrounds
│   └── js/
│       └── script.js       # Interactive page behavior
├── favicon.svg
├── index.html              # Main page
├── style-guide.md          # Color, typography, and UI-token reference
└── README.md
```

## Customization

- **Branding:** Replace `assets/images/logo.svg` and `favicon.svg`.
- **Content:** Update the sections in `index.html` to add real doctors, locations, services, and articles.
- **Styling:** Change the CSS custom properties at the top of `assets/css/style.css` to adjust colors, typography, spacing, and radii.
- **Images:** Add or replace files inside `assets/images/`, then update their matching paths in `index.html`.

## Included sections

- **Hero** — doctor-search prompt and location input
- **Services** — psychiatry, gynecology, pulmonology, and orthopedics cards
- **About** — organization overview, vision, mission, and strategy content
- **Doctor listing** — browseable specialist categories
- **Articles** — latest healthcare article previews
- **Footer** — contact information, useful links, newsletter field, and social links

## Notes

This is a static front-end project. The search, appointment, newsletter, and article links are interface elements only; connect them to a backend or API when you are ready to make them functional.

## License

This project is available for personal learning and portfolio use. Add a dedicated license file before distributing it under a specific open-source license.
