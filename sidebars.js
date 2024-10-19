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
    },{
        type: 'category',
        label: 'Login',
        items: [{ type: 'autogenerated', dirName: 'register' }],
    },
     {
        type: 'category',
        label: 'Create AI Assistant',
        
        items: [
            'tutorial-ui/create-ai-assistant', {
            type: 'category',
            label: '1 - Data Source',
            link: {
                type: 'doc',
                id: 'tutorial-ui/data-source-introduction',
            },
            items: [{ type: 'autogenerated', dirName: 'tutorial-ui/data-source' }],
        }, {
            type: 'category',
            label: '2 - AI Task',link: {
                type: 'doc',
                id: 'tutorial-ui/ai-task-introduction',
            },
            items: [{ type: 'autogenerated', dirName: 'tutorial-ui/ai-task' }],
        }, {
            type: 'category',
            label: '3 - Expose',
            link: {
                type: 'doc',
                id: 'tutorial-ui/expose-introduction',
            },
            items: [{ type: 'autogenerated', dirName: 'tutorial-ui/expose' }],
        }]
    }, {
        type: 'category',
        label: 'On premise',
        items: [{ type: 'autogenerated', dirName: 'premise-mode' }],
    }, 'quotas']
};

module.exports = sidebars;