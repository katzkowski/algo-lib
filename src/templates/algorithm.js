import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageWrapper from "../components/PageWrapper";
import ContentWrapper from "../components/ContentWrapper";
import Title from "../components/Title";


export default function algorithmPage({ data }) {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Title data={data} />
        <MDXRenderer MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ContentWrapper>
    </PageWrapper>
  );
}

export const pageQuery = graphql`
  query AlgoQuery($id: String!) {
    mdx(id: {eq: $id}) {
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
`;