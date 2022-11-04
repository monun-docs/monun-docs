const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const currentYear = new Date().getFullYear();
const copyrightYear = currentYear !== 2021 ? `2021-${currentYear}` : '2021';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Monun Docs',
  tagline: '',
  url: 'https://monun.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'monun-docs', // Usually your GitHub org/user name.
  projectName: 'monun-docs', // Usually your repo name.
  themeConfig: {
  algolia: {
      appId: "AUM0JP690H",
      apiKey: '3b881cbfbaac356fe8518510a19cfb13',
      indexName: 'monun',

      // Optional: see doc section below

      // Optional: see doc section below
      

      // Optional: Algolia search parameters
     // searchParameters: {},

      //... other Algolia params
    },
    
    navbar: {
      title: 'monun',
      logo: {
        alt: 'monun',
        src: 'img/logo1.svg',
        srcDark: 'img/77531416_negative.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home/Index',
          label: 'Home',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'dev/Index',
          label: 'Dev',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'usage/Index',
          label: 'Usage',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        // {
        //   label: 'Docs',
        //   position: 'left', // or 'right'
        //   items: [
        //     {
        //       label: 'home',
        //       to: 'docs/home/Index',
        //     },
        //     {
        //       label: 'Dev Docs Docs',
        //       to: 'docs/Dev Docs Docs/Index',
        //     },
        //     {
        //       label: 'Usage Docs Docs',
        //       to: 'docs/Usage Docs Docs/Index',
        //     },
        //   ],
        //
        // },
        {
          href: '/docsTeam',
          label: 'Contributors',
          position: 'right',
        },
        {
          href: 'https://github.com/monun-docs/monun-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright © ${copyrightYear} <a href="/docsTeam">Docs Team</a>. Licensed under CC BY-SA 4.0.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['kotlin', 'yaml', 'groovy'],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/monun-docs/monun-docs/edit/development/',
          includeCurrentVersion: false,
          versions: {
            v1: {
              label: 'v1',
              path: '/',
            },
            experimental: {
              label: 'experimental 🚧',
              path: 'experimental',
              banner: 'unreleased'
            }
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
};
