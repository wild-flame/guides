/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const blog = "https://wild-flame.github.io/blog/";

const siteConfig = {
  title: 'Mac OS X 配置指南', // Title for your website.
  tagline: 'Mac OS X Setup Guide | Mac OS X 配置指南',
  url: 'https://wild-flame.github.io', // Your website URL
  baseUrl: '/guides/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'guides',
  organizationName: 'wild-flame',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  gaTrackingId: "UA-77442644-1",
  gaGtag: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
   // { search: true },
    {doc: 'mac-os-x-setup-guide/guide-introduction', label: 'Docs'},
  // {doc: 'notes/SUMMARY', label: 'Notes'},
  // {page: 'help', label: 'Help'},
    {href: blog, label: "Blog" }
  ],

  blogSidebarCount: 'ALL',
  // Search
  // algolia: {
  //   apiKey: 'my-api-key',
  //   indexName: 'my-index-name',
  //   algoliaOptions: {} // Optional, if provided by Algolia
  // },

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/iconfinder_mac_os_X_401371.svg',
  // footerIcon: 'img/OS_X_El_Capitan_logo.svg',
  favicon: 'img/favicon/favicon.ico',
  blog,


  /* Colors for website */
  colors: {
    primaryColor: '#000',
    secondaryColor: '#111',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} wild-flame`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/iconfinder_mac_os_X_401371.svg',
  twitterImage: 'img/iconfinder_mac_os_X_401371.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
