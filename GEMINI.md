# Gemini Project Context: penguins-blog

## Project Overview

This project is the source code for the penguins-eggs blog. It is built using Docusaurus, a modern static website generator. The blog contains articles, documentation, and other resources related to the penguins-eggs project.

## Tech Stack

- **Framework:** Docusaurus v2
- **Language:** JavaScript (with JSX for React components)
- **Package Manager:** npm (or pnpm, based on `pnpm-lock.yaml`)
- **Deployment:** Static site, likely hosted on a platform like GitHub Pages.

## Key Commands

- **Installation:** `npm install` or `pnpm install`
- **Development Server:** `npm start` (starts a local dev server with hot-reloading)
- **Build:** `npm run build` (builds the static site for production into the `build` directory)
- **Serve Production Build:** `npm run serve` (serves the built site locally)

## Project Structure

- `docusaurus.config.js`: Main configuration file for the Docusaurus site.
- `blog/`: Contains the Markdown files for blog posts.
- `docs/`: Contains the Markdown files for documentation pages.
- `src/`: Contains custom React components and pages.
- `static/`: Contains static assets like images and CSS.
- `sidebars.js`: Defines the structure of the documentation sidebar.
