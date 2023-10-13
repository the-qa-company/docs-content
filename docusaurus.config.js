// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'QAnswer',
    tagline: 'Ask your data!',
    url: 'https://doc.qanswer.ai',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'The QA Company',
    projectName: 'QAnswer',
    // plugins: [
    //     [
    //       "docusaurus-plugin-openapi-docs",
    //       {
    //         id: "openapi",
    //         docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
    //         config: {
    //             cos: {
    //                 specPath: "qanswer.json",
    //                 outputDir: "docs/qanswer",
    //                 sidebarOptions: {
    //                   groupPathsBy: "tag",
    //                 },
    //               },
    //         }
    //       },
    //     ]
    //   ],
    themes: ["docusaurus-theme-openapi-docs"],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem"
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
                    },{
                        label: 'Twitter',
                        href: 'https://twitter.com/TheQACompany',
                    }, {
                        label: 'LinkedIn',
                        href: 'https://www.linkedin.com/company/qanswer/',
                    }],
                },
                {
                    title: 'More',
                    items: [

                    ],
                },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} The QA Company.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java'],
            },
            languageTabs: [
                {
                    highlight: "bash",
                    language: "curl",
                    logoClass: "bash",
                },
                {
                    highlight: "python",
                    language: "python",
                    logoClass: "python",
                },
                {
                    highlight: "go",
                    language: "go",
                    logoClass: "go",
                },
                {
                    highlight: "javascript",
                    language: "nodejs",
                    logoClass: "nodejs",
                },
                {
                    highlight: "ruby",
                    language: "ruby",
                    logoClass: "ruby",
                },
                {
                    highlight: "csharp",
                    language: "csharp",
                    logoClass: "csharp",
                },
                {
                    highlight: "php",
                    language: "php",
                    logoClass: "php",
                },
            ],
        }),
};

module.exports = config;