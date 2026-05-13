// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SyncVRC',
  tagline: 'Real-time Voice Translation for VRChat',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://finalsiren1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SyncVRC/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'finalsiren1', // Usually your GitHub org/user name.
  projectName: 'SyncVRC', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh', 'ko'],
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
      zh: { label: '中文' },
      ko: { label: '한국어' },
    },
  },

  presets: [
        [
          'classic',
          ({
            docs: {
              routeBasePath: '/', // 👈 1. เพิ่มบรรทัดนี้: บังคับให้หน้า Docs กลายเป็นหน้าหลักสุดของเว็บ
              sidebarPath: './sidebars.js',
            },
            blog: false, // 👈 2. แก้เป็น false: ปิดระบบ Blog ถาวร
            theme: {
              customCss: './src/css/custom.css',
            },
          }),
        ],
      ],

      // วางต่อจาก block presets
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/", 
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/syncvrc-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SyncVRC',
        logo: {
          alt: 'SyncVRC Logo',
          src: 'img/Designer (2).png',
        },
        items: [
          // 1. Dropdown Supporters
          {
            type: 'dropdown',
            label: 'Supporter Me 🧡',
            position: 'right',
            items: [
              { label: '☕ Ko-fi', href: 'https://ko-fi.com/meijivrc' },
              { label: '🧡 Patreon', href: 'https://www.patreon.com/meijino' },
            ],
          },
          // 2. ปุ่มเปลี่ยนภาษา
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // 3. ไอคอน GitHub
          {
            href: 'https://github.com/finalsiren1/SyncVRC',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support Me',
            items: [
              {
                label: '☕ Buy me a Ko-fi',
                href: 'https://ko-fi.com/meijivrc',
              },
              {
                label: '🧡 Patreon',
                href: 'https://www.patreon.com/meijino',
              },
            ],
          },
          {
            title: 'Community & Support Me',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/myWuZDgVBp',
              },
              {
                label: 'X',
                href: 'https://x.com/meiji_vrc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SyncVRC GitHub',
                href: 'https://github.com/finalsiren1/SyncVRC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SyncVRC by Meiji.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
