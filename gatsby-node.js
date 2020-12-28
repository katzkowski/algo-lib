exports.createPages = async ({ graphql, actions }) => {
  // query slugs with graphql
  const { data } = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);
  // create paginated pages for algorithms
  const algosPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / algosPerPage);

  Array.from({length: numPages}).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allAlgos.js"),
      context: {
        limit: algosPerPage,
        skip: i * algosPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  // create single algorithm page
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;

    actions.createPage({
      path: '/' + slug,
      component: require.resolve(`./src/templates/algorithm.js`),
      context: {id}
    })
  })
}