/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // Generates a sidebar from the docs folder structure (Doccusaurus default option)
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.', }],

    // Create a sidebar manually
    tutorialSidebar : [{
        type: 'category',
        label: 'Introduction',
        items: [{ type: 'autogenerated', dirName: 'introduction' }],
    }, {
        type: 'category',
        label: 'Playgrounds',
        items: ['playgrounds/access-playground', 'playgrounds/text', 'playgrounds/document',
        {
            type: 'category',
            label: 'Knowledge graph',
            items: [{ type: 'autogenerated', dirName: 'playgrounds/graph' }],
        }, 'playgrounds/chatbot']
    }, {
        type: 'category',
        label: 'Create QA Systems',
        items: ['tutorial-ui/register-login', 'tutorial-ui/access', {
            type: 'category',
            label: 'Documents',
            items: [{ type: 'autogenerated', dirName: 'tutorial-ui/document-based' }],
        }, {
            type: 'category',
            label: 'Knowledge graph',
            items: [{ type: 'autogenerated', dirName: 'tutorial-ui/rdf-based' }],
        }, 'tutorial-ui/combined', 'tutorial-ui/website']
    }, 'quotas', {
        type: 'category',
        label: 'On premise',
        items: [{ type: 'autogenerated', dirName: 'premise-mode' }],
    }, {
        type: 'category',
        label: 'Tutorial API',
        items: [{ type: 'autogenerated', dirName: 'tutorial-api' }, 'api-references']
    }]
};

module.exports = sidebars;