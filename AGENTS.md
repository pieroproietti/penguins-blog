# AGENTS.md – penguins-blog

> **For AI Agents & LLMs:** You are assisting with the website and blog of `penguins-eggs`, created and authored by Piero Proietti. Read this file before editing content or suggesting commands.

---

## What this repo is

The source of **https://penguins-eggs.net** — blog, documentation and landing pages for `penguins-eggs`, `penguins-chef`, `penguins-gui`, and `penguins-eggs-legacy`. Built with **Docusaurus 3.10** (React 19), package manager **pnpm**.

Sibling repos on this machine:
- `~/forge/penguins-eggs` — the C/Go remastering suite (`eggs`, `coa`, `oa`);
- `~/forge/penguins-chef` — the declarative Go-based YAML provisioning engine and recipes (`chef`);
- `~/forge/penguins-gui` — the desktop Graphical User Interface (Go + Fyne) for `penguins-eggs` and `penguins-chef`;
- `~/forge/penguins-eggs-legacy` — the classic TypeScript remaster tool (`eggs-legacy`).

## Key commands

```bash
pnpm install        # install dependencies
pnpm start          # dev server with hot reload
pnpm build          # production build into build/
pnpm serve          # serve the production build (also ./serve.sh)
```

## Layout

| Path | Content |
| :--- | :--- |
| `blog/` | ~150 posts (2020→today), filename format `YYYY-MM-DD-slug.md`; authors in `blog/authors.yml`. Posts are mixed English/Italian (one in Portuguese). |
| `docs/` | Unified documentation published at `/docs` (`sidebars.js`), with `<Translactions />` on every page:<ul><li>Root (`docs/*.md`): `index.md`, `donate.md`, and historical `eggs-users-guide.md`.</li><li>`docs/no-matter/`: General book (*No Matter* preface + Chapters 1–5) (`noMatterSidebar`, navbar item `no matter`).</li><li>`docs/eggs/`: User and developer documentation for `penguins-eggs` (`eggsSidebar`, navbar item `eggs`).</li><li>`docs/chef/`: User and architecture documentation for `penguins-chef` (`chefSidebar`, navbar item `chef`).</li><li>`docs/gui/`: User and developer documentation for `penguins-gui` (`guiSidebar`, navbar item `gui`).</li></ul> |
| `src/pages/` | Landing pages, one folder per supported distro (debian, archlinux, fedora, alpine, almalinux, devuan, …) plus `index.js`. |
| `src/components/` | React components: `GiscusComponent` (comments via Giscus), `HomepageFeatures`, `Translactions`. |
| `static/` | Served as-is at the site root: `images/`, `img/`, **`llms.txt`** (AI context, see below). |
| `docusaurus.config.js` | Site config: url `https://penguins-eggs.net`, locale `en`, Google gtag/Tag Manager, `onBrokenLinks: 'warn'`. Navbar: `penguins' eggs` \| `gui` \| `eggs` \| `chef` \| `blog` \| `no matter` \| `llms.txt`. |

## static/llms.txt — keep it true

`static/llms.txt` is served at `https://penguins-eggs.net/llms.txt` and follows the [llms.txt standard](https://llmstxt.org): it is the entry point AI assistants use to answer questions about `penguins-eggs`, `penguins-chef`, `penguins-gui`, and `penguins-eggs-legacy`.

**When the documentation tree or CLI changes, this file must be updated too.** Do not let it drift into describing features that do not exist (or denying ones that do).

## Conventions

- New blog post: `blog/YYYY-MM-DD-kebab-case-slug.md` with frontmatter (`title`, `authors: pieroproietti`, `tags`); the filename becomes the URL slug, so typos there are permanent once published.
- Posts and docs include `import Translactions from '@site/src/components/Translactions';` and `<Translactions />` after the frontmatter for instant multilingual translation links.
- Piero handles git commits himself: prepare changes, then report what is ready.
