import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import PageWrapper from "../components/PageWrapper"
import { Title } from "../components/Title"
require("katex/dist/katex.min.css")

export default function algorithmPage({ data }) {
  const frontmatter = data.mdx.frontmatter

  return (
    <PageWrapper tags={frontmatter.tags}>
      <Title
        tags={frontmatter.tags}
        date={frontmatter.date}
        author={frontmatter.author}
      >
        {frontmatter.title}
      </Title>
      <MDXRenderer MDXRenderer>{data.mdx.body}</MDXRenderer>
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
