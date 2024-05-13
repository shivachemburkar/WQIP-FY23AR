// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  title: 'Carlsbad Watershed Management Area WQIP FY22/23 Annual Report',
  tagline: 'Progress on water quality improvement goals',
  favicon: 'img/logo.png',
  url: 'https://report.ogawa.us',
  baseUrl: '/',
  // redirects: [{
  //   from: '/',
  //   to: '/docs/Carlsbad-Watershed-Management-Area/Overview',
  // }],
  organizationName: 'Mikhail Ogawa Engineering',
  projectName: 'docusaurus',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    redirects: [
      // Redirect / to /docs/Carlsbad-Watershed-Management-Area/Goals%20Progress%20Overview
      {
        from: '/',
        to: '/docs/Carlsbad-Watershed-Management-Area/Overview',
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es-ES'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/customTheme.scss',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/trees.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Site Logo',
        src: 'img/trees.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fullReportSidebar',
          position: 'right',
          label: 'Carlsbad WMA',
        },
        {
          type: 'docSidebar',
          sidebarId: 'appendicesSidebar',
          docId: 'Appendices/overview',
          position: 'right',
          label: 'Appendices',
        },
        {
          type: 'docSidebar',
          sidebarId: 'attachmentsSidebar',
          docId: 'Attachments/Attachments',
          position: 'right',
          label: 'Attachments',
        },
        {
          type: 'docSidebar',
          sidebarId: 'summaryReportSidebar',
          position: 'right',
          label: 'RETURN TO SITE',
          href: 'http://www.carlsbadwatershed.org',
          target: '_self',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'CWMA Report',
          items: [
            {
              label: 'Report Breakdown',
              to: '/docs/Carlsbad-Watershed-Management-Area/WQIP-Report/Introduction',
            },
            {
              label: 'Water Quality Improvement Results',
              to: '/docs/Carlsbad-Watershed-Management-Area/WQIP-Report/Water%20Quality%20Improvements',
            },
            {
              label: 'Appendices',
              to: '/docs/category/appendices-1',
            },
          ],
        },
        {
          title: 'Current Accepted WQIP',
          items: [
            {
              label: 'Current WQIP',
              href: 'https://www.dropbox.com/scl/fi/eogjxnlrpbhnruzcl0y28/CWMA-WQIP-FY23-AR-Final.pdf?rlkey=tj9aj1lqbrk5xtst3xm7g52wh&st=og3579yi&dl=0',
            },
            {
              label: 'Project Clean Water',
              href: 'https://projectcleanwater.org/watersheds/carlsbad-wma/',
            },
            
          ],
        },
        {
          title: '3rd Party Information',
          items: [
            {
              label: 'Hydrologic Areas',
              to: 'https://projectcleanwater.org/watersheds/carlsbad-wma/#hydrologic',
            },
            {
              label: 'MOE Website',
              href: 'https://mogawaeng.com/index.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mikhail Ogawa Engineering`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  plugins: [
    function myPlugin(context, options) {
      return {
        name: 'webpack-custom-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.scss$/,
                  use: [
                    isServer ? 'null-loader' : 'style-loader',
                    'css-loader',
                    {
                      loader: 'sass-loader',
                      options: {
                        sassOptions: {
                          includePaths: ['./src/css'],
                        },
                      },
                    },
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],
};

export default config;
