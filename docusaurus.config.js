// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/*
 * HOW TO PUBLISH WHERE
 * --------------------
 * GitHub Pages (project site):  url = https://tw-tribe.github.io   baseUrl = /docs-as-code-Oct26/
 * Company subdomain:            url = https://docs.company.com  baseUrl = /
 * Company subpath:              url = https://www.company.com   baseUrl = /docs/
 *
 * Set the defaults below, or override per environment with DOCS_URL and
 * DOCS_BASE_URL (the deploy workflows do this), so the file never changes.
 */
const ORG = 'TW-Tribe';
const REPO = 'docs-as-code-Oct26';

const url = process.env.DOCS_URL || `https://${ORG}.github.io`;
const baseUrl = process.env.DOCS_BASE_URL || `/${REPO}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TWT Documentation',
  tagline: 'Docs as code for everyone',
  favicon: 'img/favicon.svg',

  url,
  baseUrl,
  organizationName: 'TW-Tribe', // GitHub org or user
  projectName: 'docs-as-code-Oct26', // GitHub repo name
  trailingSlash: false,

  // Quality gates: a broken link fails the build (and the PR check).
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // "Edit this page" links straight into GitHub.
          editUrl: `https://github.com/${ORG}/${REPO}/edit/main/`,
          showLastUpdateTime: false, // needs full git history in CI (fetch-depth: 0)
        },
        blog: false, // switch on if you need release notes or a blog
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  // Fonts, analytics, extra scripts: see the commented examples.
  // headTags: [],
  // scripts: [],
  // stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'TWT Documentation',
      logo: {alt: 'TWT logo', src: 'img/twtlogo.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs'},
        {href: `https://github.com/TW-Tribe/docs-as-code-Oct26`, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting started', to: '/docs/getting-started/installation'},
            {label: 'Contribute', to: '/docs/contributing/workflow'},
          ],
        },
        {
          title: 'Project',
          items: [{label: 'GitHub', href: `https://github.com/TW-Tribe/docs-as-code-Oct26`}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer's Tribe Product Documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  }),
};

export default config;
