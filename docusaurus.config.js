// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'QAnswer',
    tagline: 'Ask your data!',
    favicon: 'img/favicon.png',
    url: 'https://doc.qanswer.ai',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    organizationName: 'The QA Company',
    projectName: 'QAnswer',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    routeBasePath: '/',
                },
                blog: false,
                pages: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    filename: 'sitemap.xml'
                }
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
              },
            navbar: {
                title: 'Docs',
                logo: {
                    alt: 'The QA Company logo',
                    src: 'img/logo2.png',
                    href: 'https://qanswer.ai',
                    target: '_self',
                },
                items: [],
            },
            footer: {
                style: 'dark',
                links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Documentation',
                        to: '/',
                    },],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Discord',
                        href: 'https://discord.com/invite/XqkNCB3ZEY'
                    }, {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/company/qanswer/',
                    }],
                }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} The QA Company.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
        stylesheets: [
            "https://fonts.googleapis.com/icon?family=Material+Icons",
        ],
};

export default config;