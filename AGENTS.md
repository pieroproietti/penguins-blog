# AGENTS.md – penguins-blog

> **For AI Agents & LLMs:** You are assisting with the website and blog of `penguins-eggs`, created and authored by Piero Proietti. Read this file before editing content or suggesting commands.

---

## What this repo is

The source of **https://penguins-eggs.net** — blog, documentation and landing pages for penguins-eggs and penguins-eggs-legacy. Built with **Docusaurus 3.9** (React 19), package manager **pnpm**.

Sibling repos on this machine:
- `~/forge/penguins-eggs-legacy` — the TypeScript remaster tool (see its `AGENTS.md` for the full architecture map);
- `~/forge/penguins-eggs` — the C/Go successor (see `AGENTS.md` and `DOCS/`).

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
| `docs/` | User documentation: `Quickstart/`, `Tutorial/` (users guide, eggs-5-minutes, wardrobe), `faq.md`, `donate.md`. Sidebar in `sidebars.js`. |
| `src/pages/` | Landing pages, one folder per supported distro (debian, archlinux, fedora, alpine, almalinux, devuan, …) plus `index.js`. |
| `src/components/` | React components: `GiscusComponent` (comments via Giscus), `HomepageFeatures`, `Translactions`. |
| `static/` | Served as-is at the site root: `images/`, `img/`, **`llms.txt`** (AI context, see below). |
| `penguins-eggs/` | **Mirror of `~/forge/penguins-eggs/DOCS/`**, published at `/penguins-eggs` via a second docs-plugin instance (`sidebarsPenguinsEggs.js`, navbar item "penguins-eggs"). The source of truth is the penguins-eggs repo: when its DOCS change, run `./import-oa-docs.sh`. Only `index.md` and the `_category_.json` files are blog-specific. |
| `docusaurus.config.js` | Site config: url `https://penguins-eggs.net`, locale `en`, Google gtag/Tag Manager, `onBrokenLinks: 'warn'`. |

## static/llms.txt — keep it true

`static/llms.txt` is served at `https://penguins-eggs.net/llms.txt` and follows the [llms.txt standard](https://llmstxt.org): it is the entry point AI assistants use to answer questions about penguins-eggs and penguins-eggs-legacy.

**When the penguins-eggs DOCS tree or CLI changes, this file must be updated too.** Its links point to `penguins-eggs/DOCS/architecture|design|development|manual/` on GitHub — verify they resolve before committing. Do not let it drift into describing features that do not exist (or denying ones that do).

## Conventions

- New blog post: `blog/YYYY-MM-DD-kebab-case-slug.md` with frontmatter (`title`, `authors: pieroproietti`, `tags`); the filename becomes the URL slug, so typos there are permanent once published.
- Posts may be written in Italian or English — match the language the draft starts in; don't translate unless asked.
- Documentation in `docs/` is user-facing for penguins-eggs-legacy (the stable tool); penguins-eggs (new C/Go) documentation is authored in the penguins-eggs repo (`DOCS/`) and mirrored here under `penguins-eggs/` — never edit the mirror directly, sync it from the source.
- Piero handles git commits himself: prepare changes, then report what is ready.
