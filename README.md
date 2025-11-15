# Navdeep Beniwal · Personal Website

A lightweight, single-page portfolio that highlights momentum across Navdeep's career, projects, skills, and life outside work. Built with semantic HTML, modern CSS, and a sprinkle of JavaScript—easy to run locally and deploy anywhere static hosting is supported (Netlify, GitHub Pages, Cloudflare Pages, S3, etc.).

## Getting started

```bash
# From the project root
open index.html   # macOS (or double-click the file)
```

No build tooling required. If you prefer running through a local server, you can use any static server (e.g., `python3 -m http.server`).

## Customize quickly

- **Resume link**: Replace `assets/Navdeep_Beniwal_Resume.pdf` with your actual resume file while keeping the same filename.
- **Content**: Update text inside `index.html`. Sections are grouped logically (journey, experience, projects, skills, stories, hobbies, contact).
- **Branding**: Adjust fonts, colors, and layout tokens near the top of `styles.css`.
- **Blog links**: Swap placeholder Medium/website URLs in the “Blogs & Talks” section with your published posts.
- **Contact info**: Update the email and LinkedIn URLs in the final call-to-action.

## Deploying

Because the site is static, deployment is as simple as uploading the files in this folder to your host of choice. For example:

1. Push this folder to GitHub and connect the repo to GitHub Pages.
2. Drag-and-drop the folder into Netlify Drop or Vercel’s static site flow.
3. Upload to an S3 bucket (with static website hosting enabled) or to Firebase Hosting.

## Structure

```
.
├── index.html      # Main page
├── styles.css      # Look & feel
├── script.js       # Navigation + scroll animations
├── assets/
│   └── Navdeep_Beniwal_Resume.pdf  # Placeholder, replace with real resume
└── README.md
```

## Next ideas

- Add analytics (e.g., Plausible) for lightweight traffic insights.
- Swap hard-coded data with a JSON file for easier updates.
- Extend CSS with light/dark theme toggling.
