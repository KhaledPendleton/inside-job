module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('roles', (collection) => {
        return collection
            .getFilteredByGlob('./src/roles/*/*.md')
            .filter(({ page }) => page.fileSlug !== 'organization');
    });

    eleventyConfig.addCollection('organizations', (collection) => {
        return collection.getFilteredByGlob('./src/roles/*/organization.md');
    });

    eleventyConfig.addPassthroughCopy('./src/assets/css/*.css');

    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'site'
        }
    };
}