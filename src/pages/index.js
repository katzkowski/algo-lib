import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import ContentWrapper from "../components/ContentWrapper"
import {
  H1,
  H2,
  H3,
  LandingHeadline,
  LandingSubtitle,
  P,
  Pre,
} from "../components/elements"
import Footer from "../components/Footer"
import { Nav } from "../components/Nav"
import { GlobalStyle } from "../components/PageWrapper"
import { SearchBar } from "../components/SearchBar"
import { TagSlider } from "../components/TagSlider"

const SearchWrapper = styled.div`
  margin: ${props => props.theme.spacing.xLarge} auto;
  position: relative;
  width: 50%;

  @media ${props => props.theme.breakpoint.mobile} {
    flex-grow: 1;
    margin: ${props => props.theme.spacing.xLarge} 1.5rem;
    width: auto;
  }
`

export default function Index({ data }) {
  const theme = useContext(ThemeContext)
  const tags = data.allMdx.group

  return (
    <div>
      <GlobalStyle theme={theme} />
      <MDXProvider
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          p: P,
          pre: Pre,
        }}
      >
        <Nav />
        <ContentWrapper>
          <center>
            <LandingHeadline>A library of algorithms</LandingHeadline>
            <LandingSubtitle>
              with code snippets, explanation and usage information
            </LandingSubtitle>
          </center>
          <SearchWrapper>
            <SearchBar inNavbar={false} />
          </SearchWrapper>

          <TagSlider category="by application" tags={tags}></TagSlider>
          <TagSlider
            category="by type"
            tags={[].concat(tags).reverse()}
          ></TagSlider>
        </ContentWrapper>
        <Footer></Footer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
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
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  }
`
