import { graphql, Link } from "gatsby"
import React from "react"
import { AlgoCard, CardContainer } from "../components/AlgoCard"
import PageWrapper from "../components/PageWrapper"
import { Pagination } from "../components/Pagination"
import { LargeTag } from "../components/Tag"
import { Title } from "../components/Title"

const Tags = ({ pageContext, data }) => {
  const { tag, currentPage, numPagesForTag } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPagesForTag
  const prevPage =
    currentPage - 1 === 1
      ? `/${tag.toLowerCase()}`
      : `/${tag}/${currentPage - 1}`
  const nextPage = `/${tag.toLowerCase()}/${currentPage + 1}`
  const { totalCount } = data.allMdx
  const algos = data.allMdx.edges

  return (
    <PageWrapper tags={[tag]}>
      <Title
        subtitle={`${totalCount} algorithm${
          totalCount === 1 ? "" : "s"
        } tagged`}
      >
        Tag: <LargeTag to={`/${tag}`}>{tag}</LargeTag>
      </Title>

      <CardContainer>
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
      </CardContainer>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <Link to="/tags">All tags</Link>
    </PageWrapper>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      skip: $skip
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
