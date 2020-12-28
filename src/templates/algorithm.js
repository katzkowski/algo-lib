import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageWrapper from "../components/PageWrapper";
import { H1, H3 } from "../components/elements";
import ContentWrapper from "../components/ContentWrapper";
import {Tag, TagBar} from "../components/Tag";
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