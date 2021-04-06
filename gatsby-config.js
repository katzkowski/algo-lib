/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `algorithms`,
        path: `${__dirname}/src/algorithms`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `roboto mono`, `material icons`],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-styled-components-dark-mode`,
    //   options: {
    //     light: require(`${__dirname}/src/themes/theme.js`).lightTheme,
    //     dark: require(`${__dirname}/src/themes/theme.js`).darkTheme,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-embed-snippet`,
    //         options: {},
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {},
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
  ],
}
