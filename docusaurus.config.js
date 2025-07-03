// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Comrades Cafe',
  tagline: 'Serving joy in every sip and bite',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  organizationName: 'comrades-cafe',
  projectName: 'comrades-cafe-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'MainLogo.png',
      navbar: {
  title: 'Comrades Cafe',
  items: [   
    {
      to: '/',
      label: 'Home',
      position: 'left',
    },
    {
      to: '/docs/menu',
      label: 'Menu',
      position: 'left',
    },
    {
      to: '/docs/info',
      label: 'Info',
      position: 'left',
    },       
    { 
      to: '/docs/events', 
      label: 'Events', 
      position: 'left' 
    },
    { 
      to: '#visit-us', 
      label: 'Visit Us', 
      position: 'left' 
    },
    { 
      to: '#gallery', 
      label: 'Gallery', 
      position: 'left' 
    },
    { 
      to: '#newsletter', 
      label: 'Contact Us', 
      position: 'left' 
    },
    {
      href: 'https://github.com/HadiaRaheel/my-docusaurus-site',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
footer: {
  style: 'dark',
  links: [
    {
      title: 'Navigation',
      items: [
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'Menu',
          to: '/#menu',
        },
        {
          label: 'Gallery',
          to: '/#gallery',
        },
        {
          label: 'Contact',
          to: '/#contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          label: 'Terms',
          to: '/doc/terms',
        },
        {
          label: 'Privacy',
          to: '/doc/privacy',
        },
        {
          label: 'Cookies',
          to: '/doc/cookies',
        },
      ],
    },
    {
      title: 'Follow Us',
      items: [
        {
          label: 'Facebook',
          href: 'https://facebook.com/comradescafe',
          className: 'footer__link-item social-link facebook',
          icon: '<img src="img/facebook.svg" alt="Facebook" />',
        },
        {
          label: 'Instagram',
          href: 'https://instagram.com/comradescafe',
          className: 'footer__link-item social-link instagram',
          icon: '<img src="img/instagram.svg" alt="Instagram" />',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/comradescafe',
          className: 'footer__link-item social-link twitter',
          icon: '<img src="img/twitter.svg" alt="Twitter" />',
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Comrades Cafe. All rights reserved.Made with Docusaurus.`,
},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;