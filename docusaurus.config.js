// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'penguins\' eggs',
  tagline: 'On the road of Remastersys, Refracta, Systemback and father Knoppix!',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://penguins-eggs.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn', // invece di 'throw'

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // invece di 'throw'
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-DCRVZRVWEV',
          anonymizeIP: true,
        },

        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore', // i post storici non hanno <!--truncate-->
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/penguins-eggs-social-card.jpg',
      navbar: {
        title: 'penguins\' eggs',
        logo: {
          alt: 'eggs',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guiSidebar',
            position: 'left',
            label: 'gui',
          },
          {
            type: 'docSidebar',
            sidebarId: 'eggsSidebar',
            position: 'left',
            label: 'eggs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'chefSidebar',
            position: 'left',
            label: 'chef',
          },
          {
            to: '/blog',
            label: 'blog',
            position: 'left',
          },
          {
            href: 'https://penguins-eggs.net/llms.txt',
            label: 'llms.txt',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Il Libro (No Matter)',
                to: '/docs',
              },
              {
                label: 'Eggs guide',
                to: '/docs/eggs',
              },
              {
                label: 'Chef guide',
                to: '/docs/chef',
              },
              {
                label: 'GUI guide',
                to: '/docs/gui',
              },
              {
                label: 'Eggs users\' guide (Legacy)',
                to: '/docs/eggs-users-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook group',
                href: 'https://www.facebook.com/groups/penguins.eggs',
              },
              {
                label: 'Telegram channel',
                href: 'https://t.me/penguins_eggs',
              },
              {
                label: 'penguins-eggs Persian site',
                href: 'https://penguins-eggs.ir',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Downloads',
                href: 'https://penguins-eggs.net/basket/',
              },
              {
                label: 'Sourceforge',
                to: 'https://sourceforge.net/projects/penguins-eggs/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pieroproietti/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Piero Proietti - Officina informatica Via Pio Joris 13, Roma.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
