import React from "react";
import { graphql } from "gatsby";
import { Pagination } from "../components/Pagination";
import { AlgoCard } from "../components/AlgoCard";

export default function allAlgos({pageContext, data}) {
  const {currentPage, numPages} = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;
  const algos = data.allMdx.edges;

  return (
    <div>
      <h1>Test heading</h1>
      <p>Test text for something</p>

      {algos.map(algo => (
        <AlgoCard 
          key={algo.node.frontmatter.slug}
          date={algo.node.frontmatter.date}
          title={algo.node.frontmatter.title}
          preview_text={algo.node.frontmatter.preview_text}
          slug={algo.node.frontmatter.slug}
        />
      ))}
      <Pagination isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

// Diese query schmeißt error
export const pageQuery = graphql`
  query AllAlgosQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
      edges {
        node {
          frontmatter {
            date
            preview_text
            slug
            title
          }
        }
      }
    }
  }
`;