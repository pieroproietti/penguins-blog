// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'pieroproietti', // Usually your GitHub org/user name.
  // projectName: 'penguins-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pieroproietti/penguins-blog/tree/main/packages/create-docusaurus/templates/shared/',
            //'https://github.com/pieroproietti/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/pieroproietti/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/pieroproietti/penguins-eggs',            
            label: 'penguins-eggs',
            position: 'right',
          },
          {
            href: 'https://github.com/pieroproietti/penguins-blog',            
            label: 'penguins-blog', 
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
                label: 'Eggs users\' guide',
                to: 'https://penguins-eggs.net/docs/Tutorial/eggs-users-guide',
              },
              {
                label: 'Wardrobe users\' guide',
                to: 'https://penguins-eggs.net/docs/Tutorial/wardrobe-users-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github discussion',
                href: 'https://github.com/pieroproietti/penguins-eggs/discussions',
              },
              {
                label: 'Facebook group',
                href: 'https://www.facebook.com/groups/penguins.eggs',
              },
              {
                label: 'Telegram channel',
                href: 'https://t.me/penguins_eggs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pieroproietti',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pieroproietti/penguins-blog',
              },
            ],
          },
        ],
        copyright: `Copyright © 2017-${new Date().getFullYear()} Piero Proietti - Officina informatica Via Pio Joris 13, Roma.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
