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
  organizationName: 'Mikhail Ogawa Engineering',
  projectName: 'docusaurus',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
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
    image: 'img/logo.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fullReportSidebar',
          position: 'left',
          label: 'Comprehensive Report',
        },
        {
          type: 'docSidebar',
          sidebarId: 'appendicesSidebar',
          docId: 'Appendices/overview',
          position: 'left',
          label: 'Appendices',
        },
        {
          type: 'docSidebar',
          sidebarId: 'attachmentsSidebar',
          docId: 'Attachments/Attachments',
          position: 'left',
          label: 'Attachments',
        },
        {
          type: 'docSidebar',
          sidebarId: 'summaryReportSidebar',
          position: 'left',
          label: 'Numeric Goals Progress',
        },
        {
          type: 'docSidebar',
          sidebarId: 'summaryReportSidebar',
          position: 'left',
          label: 'Numeric Goals Progress',
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
              to: '/docs/intro',
            },
            {
              label: 'Water Quality Improvement Results',
              to: '/wqipgoals',
            },
            {
              label: 'Appendices',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Current Accepted WQIP',
          items: [
            {
              label: 'Current WQIP',
              href: 'https://projectcleanwater.org/download/carlsbad-wma-wqip-updated-2021/',
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
              label: 'Blog',
              to: '/blog',
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
