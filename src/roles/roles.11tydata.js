const path = require('node:path');

module.exports = {
    /**
     * Returns path for roles and nothing for orgs
     * @param {Object} data.page Contains information about the page
     * @returns string | bool
     */
    permalink({ page, helpers }) {
        return page.fileSlug !== 'organization' 
            ? `roles/${helpers.parentDirName(page.inputPath)}/${page.fileSlug}.html`
            : `organizations/${helpers.parentDirName(page.inputPath)}/index.html`;
    },
    layout: 'layouts/role.html'
}