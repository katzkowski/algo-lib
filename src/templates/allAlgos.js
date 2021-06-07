import { graphql } from "gatsby"
import React from "react"
import { AlgoCard, CardContainer } from "../components/AlgoCard"
import PageWrapper from "../components/PageWrapper"
import { Pagination } from "../components/Pagination"

export default function allAlgos({ pageContext, data }) {
  const { currentPage, numAlgoPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numAlgoPages
  // const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const prevPage = `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const algos = data.allMdx.edges

  return (
    <PageWrapper>
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
        currentPage={currentPage}
        nextPage={nextPage}
        numPages={numAlgoPages}
      />
    </PageWrapper>
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
