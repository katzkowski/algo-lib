import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/Seo"
import { TableOfContents } from "../components/TableOfContents"
import { Title } from "../components/Title"
require("katex/dist/katex.min.css")

const AlgoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const MDXWrapper = styled.article`
  width: 75%;

  @media ${props => props.theme.breakpoint.tablet} {
    width: 100%;
  }
`

export default function algorithmPage({ data }) {
  const frontmatter = data.mdx.frontmatter

  return (
    <PageWrapper tags={frontmatter.tags}>
      <AlgoWrapper>
        <MDXWrapper>
          <Title
            tags={frontmatter.tags}
            date={frontmatter.date}
            author={frontmatter.author}
          >
            {frontmatter.title}
          </Title>

          <MDXRenderer MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXWrapper>
        <TableOfContents slug={data.mdx.frontmatter.slug}></TableOfContents>
      </AlgoWrapper>
      <SEO
        title={frontmatter.title}
        slug={frontmatter.slug}
        description={frontmatter.preview_text}
        article={true}
        keywords={[frontmatter.title].concat(frontmatter.tags)}
      />
    </PageWrapper>
  )
}

export const pageQuery = graphql`
  query AlgoQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        preview_text
        slug
        title
        tags
        author
        published
      }
    }
  }
`
