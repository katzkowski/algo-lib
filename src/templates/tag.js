import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { AlgoCard, CardContainer } from "../components/AlgoCard"
import { InternalLink } from "../components/elements"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/Seo"
import { Tag } from "../components/Tag"
import { Title } from "../components/Title"

const AllTagsLink = styled(InternalLink)`
  // position: absolute;
  // bottom: ${props => props.theme.spacing.small};
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  // Not using pagination
  // const { tag, currentPage, numPagesForTag } = pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPagesForTag
  // const prevPage =
  //   currentPage - 1 === 1
  //     ? `/${tag.toLowerCase()}`
  //     : `/${tag}/${currentPage - 1}`
  // const nextPage = `/${tag.toLowerCase()}/${currentPage + 1}`
  const { totalCount } = data.allMdx
  const algos = data.allMdx.edges

  return (
    <PageWrapper tags={[tag]}>
      <Title
        cardsHeading={`Found ${totalCount} algorithm${
          totalCount === 1 ? "" : "s"
        }`}
      >
        <Tag size="large" to={`/${tag}`}>
          {tag}
        </Tag>
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

      {/* <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        numPages={numPagesForTag}
      /> */}
      <AllTagsLink to="/tags">View all tags</AllTagsLink>
      <SEO
        title={tag}
        slug={tag}
        description={`${totalCount} algorithm${
          totalCount === 1 ? "" : "s"
        } tagged with ${tag}`}
        article={false}
        keywords={[tag]}
      />
    </PageWrapper>
  )
}

export default Tags

// Not using pagination
// query($tag: String, $skip: Int!, $limit: Int!)
// allMdx limit: $limit
// allMdx skip: $skip
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
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
