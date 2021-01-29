import { graphql, Link } from "gatsby"
import React from "react"
import { AlgoCard } from "../components/AlgoCard"
import PageWrapper from "../components/PageWrapper"
import TagTitle from "../components/TagTitle"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const algos = data.allMdx.edges

  return (
    <PageWrapper tags={[tag]}>
      <TagTitle tag={tag} totalCount={totalCount} />
      {/* <LargeTag to={`/${tag}`}>{tag}</LargeTag> */}
      {algos.map(algo => (
        <AlgoCard
          key={algo.node.frontmatter.slug}
          date={algo.node.frontmatter.date}
          title={algo.node.frontmatter.title}
          preview_text={algo.node.frontmatter.preview_text}
          slug={algo.node.frontmatter.slug}
          tags={algo.node.frontmatter.tags}
        />
      ))}
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </PageWrapper>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            preview_text
            date(formatString: "MMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
