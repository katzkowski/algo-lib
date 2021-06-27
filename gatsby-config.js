/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const remarkMath = require(`remark-math`)
const rehypeKatex = require("rehype-katex")

module.exports = {
  siteMetadata: {
    title: "algo-lib | a library of algorithms",
    titleTemplate: "%s | algo-lib",
    description:
      "algo-lib is a library of interesting algorithms with code and additional information.",
    url: "https://www.algo-lib.com",
  },
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/themes/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/themes/theme.js`).darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-embed-snippet`,
          // },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "algorithms",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          encode: "icase",
          tokenize: "full",
          threshold: 1,
          resolution: 9,
          depth: false,
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              edges {
                node {
                  frontmatter {
                    slug
                    title
                    tags
                  }
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "slug",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["slug", "title", "tags"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.edges.map(algo => ({
            slug: algo.node.frontmatter.slug,
            title: algo.node.frontmatter.title,
            tags: algo.node.frontmatter.tags,
          })),
      },
    },
  ],
}
