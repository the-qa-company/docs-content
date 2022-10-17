// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'QAnswer',
    tagline: 'Ask your data!',
    url: 'https://www.qanswer.ai',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'The QA Company',
    projectName: 'QAnswer',

    presets: [
        [
            '@docusaurus/preset-classic',
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
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
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
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
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
    }),
};

module.exports = config;