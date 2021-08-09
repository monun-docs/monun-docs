const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'monun-docs',
  tagline: '',
  url: 'https://monun.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HyeonWorks', // Usually your GitHub org/user name.
  projectName: 'monun-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'monun',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left', // or 'right'
          items: [
            {
              label: 'Tech Docs',
              to: 'docs/Tech Docs/Index',
            },
            {
              label: 'Usage Docs',
              to: 'docs/Usage Docs/Index',

            },
          ],

        },
        {
          href: 'https://github.com/hyeonworks/monun-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} monun. All rights reserved.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hyeonworks/monun-docs/edit/main/',
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
