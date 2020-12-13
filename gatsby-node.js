// exports.createPages = async ({ graphql, actions }) => {
//   // query slugs with graphql
//   const { data } = await graphql(`
//     query {
//       allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `)
//   // create paginated pages for algorithms
//   const algosPerPage = 1;
//   const numPages = Math.ceil(data.allMdx.edges.length / algosPerPage);

//   Array.from({length: numPages}).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/home.js"),
//       context: {
//         limit: algosPerPage,
//         skip: i * algosPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })

//   // create single algorithm page
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug;
//     const id = edge.node.id;

//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/algorithm.js`),
//       context: {id}
//     })
//   })
// }