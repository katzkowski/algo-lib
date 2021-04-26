import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import PageWrapper from "../components/PageWrapper"
import { Title } from "../components/Title"
require("katex/dist/katex.min.css")

export default function algorithmPage({ data }) {
  return (
    <PageWrapper tags={data.mdx.frontmatter.tags}>
      <Title data={data} />
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
        published
      }
    }
  }
`
