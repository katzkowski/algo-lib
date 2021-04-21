import { graphql } from "gatsby"
import React from "react"
import { AlgoCard } from "../components/AlgoCard"
import ContentWrapper from "../components/ContentWrapper"
import { Pagination } from "../components/Pagination"

export default function allAlgos({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const prevPage = `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const algos = data.allMdx.edges

  return (
    <ContentWrapper>
      <h1>Test heading</h1>
      <p>Test text for something</p>

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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </ContentWrapper>
  )
}

export const pageQuery = graphql`
  query AllAlgosQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            preview_text
            slug
            title
            tags
          }
        }
      }
    }
  }
`
