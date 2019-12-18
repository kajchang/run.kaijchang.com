const path = require('path');

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
    siteMetadata: {
        blogUrl: 'https://blog.kaijchang.com',
        githubUrl: 'https://github.com/kajchang',
        linkedinUrl: 'https://www.linkedin.com/in/kai-j-chang/'
    }
};
