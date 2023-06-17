const path = require('node:path');

// Defined outside of exports so that it can be used in _this_ module
const parentDirName = (uri) => {
    const directory = path.dirname(uri); // Removes the file name and ext
    const parts = directory.split('/');
    return parts[parts.length - 1];
}

module.exports = {
    /**
     * Take an organization and return roles for that organization
     * 
     * @param {Array} rolesCollection 11ty collection consisting of role data
     * @param {Object} organization 11ty data object for organization page
     * @returns {Array} result collection or empty array
     */
    filterRolesByOrganization(rolesCollection, organization) {
        // NOTE: Roles are stored in the same directory as their organizations
        const orgKey = parentDirName(organization.page.inputPath);

        return rolesCollection.filter((role) => {
            const roleKey = parentDirName(role.page.inputPath);
            return orgKey === roleKey;
        });
    },

    getOrganizationByRole(organizationsCollection, role) {
        const roleKey = parentDirName(role.page.inputPath);
        const matchedOrg = organizationsCollection.filter((organization) => {
            const orgKey = parentDirName(organization.page.inputPath);
            return orgKey === roleKey;
        });

        return matchedOrg[0];
    },

    roleForPath(rolesCollection, filePath) {
        // console.log(rolesCollection.filter((role) => role.page.inputPath === filePath));
        return rolesCollection.filter((role) => role.page.inputPath === filePath)[0];
    },

    parentDirName: parentDirName
}