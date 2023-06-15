module.exports = (eleventyConfig) => {
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'site'
        }
    };
}