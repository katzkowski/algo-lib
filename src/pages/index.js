import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { AlgoCard, CardContainer } from "../components/AlgoCard"
import { Wrapper } from "../components/ContentWrapper"
import {
  H1,
  H2,
  H3,
  LandingHeadline,
  LandingSubtitle,
  P,
  Pre,
  RecentTitle,
} from "../components/elements"
import Footer from "../components/Footer"
import { Nav } from "../components/Nav"
import { GlobalStyle } from "../components/PageWrapper"
import { SearchBar } from "../components/SearchBar"
import { TagSlider } from "../components/TagSlider"
import { getTagCategory } from "../utils/tag-categories"

const IndexWrapper = styled(Wrapper)`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 100%;
`
const RecentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const SearchWrapper = styled.section`
  margin: ${props => props.theme.spacing.xLarge} auto;
  position: relative;
  width: 50%;
  max-width: 600px;

  @media ${props => props.theme.breakpoint.mobile} {
    flex-grow: 1;
    margin: ${props => props.theme.spacing.xLarge} 1.5rem;
    width: auto;
  }
`

const SliderContainer = styled.section`
  margin: ${props => props.theme.spacing.xLarge} auto
    ${props => props.theme.spacing.xxLarge};
  max-width: 1200px;
`

// const ViewMoreLink = styled(InternalLink)`
//   font-size: 0.83rem;
//   font-weight: 500;

//   margin: 0 0 0 ${props => props.theme.spacing.xSmall};
//   padding: 0;

//   @media ${props => props.theme.breakpoint.mobile} {
//     margin: ${props => props.theme.spacing.xSmall} 0 0 1.5rem;
//   }
// `

export default function Index({ data }) {
  const theme = useContext(ThemeContext)
  const tags = data.allMdx.group
  const algos = data.allMdx.edges

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
        <Nav hideSearchBar />
        <IndexWrapper>
          <center>
            <LandingHeadline>A library of algorithms</LandingHeadline>
            <LandingSubtitle>
              with code snippets, explanation and usage information
            </LandingSubtitle>
          </center>
          <SearchWrapper>
            <SearchBar id="search-landing" inNavbar={false} />
          </SearchWrapper>
          <SliderContainer>
            <TagSlider
              category="by application"
              tags={tags.filter(tag => getTagCategory(tag) === "application")}
            ></TagSlider>
            <TagSlider
              category="by type"
              tags={tags.filter(tag => getTagCategory(tag) === "type")}
            ></TagSlider>
          </SliderContainer>

          <RecentWrapper>
            <RecentTitle>Recently added v</RecentTitle>
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

            {/* <ViewMoreLink tabIndex="0" to={"/2"}>
              View more
            </ViewMoreLink> */}
          </RecentWrapper>
        </IndexWrapper>
        <Footer></Footer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
