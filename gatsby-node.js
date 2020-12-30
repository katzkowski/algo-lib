exports.createPages = async ({ graphql, actions }) => {
  // query slugs with graphql
  const { data } = await graphql(`
    query {
      algorithms: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
      tagGroups: allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  // extract algorithm data
  const algorithms = data.algorithms

  // create paginated pages for algorithms
  const algosPerPage = 2;
  const numPages = Math.ceil(algorithms.edges.length / algosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allAlgos.js"),
      context: {
        limit: algosPerPage,
        skip: i * algosPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // create single algorithm page
  algorithms.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    actions.createPage({
      path: "/" + slug,
      component: require.resolve(`./src/templates/algorithm.js`),
      context: { id },
    })
  })

  // Extract tag data from query
  const tags = data.tagGroups.group
  // Make tag pages
  tags.forEach(tag => {
    actions.createPage({
      path: `/${tag.tag}/`,
      component: require.resolve(`./src/templates/tags.js`),
      context: {
        tag: tag.tag,
      },
    })
  })
}
