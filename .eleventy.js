const { DateTime } = require('luxon');
const pluginRSS = require('@11ty/eleventy-plugin-rss');

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(pluginRSS);

    eleventyConfig.addFilter('htmlDateString', dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'yyyy-LL-dd'
        );
    });

    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy('templates/assets');

    return {
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        dir: {
            input: 'templates'
        }
    };
};
