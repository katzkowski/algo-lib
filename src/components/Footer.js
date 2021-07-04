import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ExternalLink, H4, InternalLink } from "./elements"

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  background: ${props => props.theme.color.surface};
  margin: ${props => props.theme.spacing.medium} 0 0;
  bottom: 0;
`

const FooterContent = styled.div`
  position: relative;
  max-width: 1200px;
  max-width: calc(1200px + 2 * ${props => props.theme.spacing.small});
  min-height: 176px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${props => props.theme.spacing.small};
  grid-row-gap: ${props => props.theme.spacing.small};

  @media ${props => props.theme.breakpoint.mobile} {
    grid-template-columns: 1fr;
  }

  margin: 0 auto;
  padding: ${props => props.theme.spacing.small};

  background: ${props => props.theme.color.surface};
  color: ${props => props.theme.color.textLight};
  border-radius: 5px 5px 0 0;

  @media ${props => props.theme.breakpoint.tablet} {
    // margin: 0 ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: 0 ${props => props.theme.spacing.small};
  }

  & h4 {
    margin: ${props => props.theme.spacing.xSmall} 0;
  }

  & a {
    padding: 0;
  }
`

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.breakpoint.mobile} {
    justify-content: flex-start;
  }
`

const RecentAlgoLink = styled.a`
  color: ${props => props.theme.color.link};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${props => props.theme.color.link};
  }

  &:link,
  &:visited {
    color: ${props => props.theme.color.link};
  }
`

const RecentlyAdded = styled.nav`
  ul {
    list-style-type: none;
  }

  ul li {
    margin: ${props => props.theme.spacing.xSmall} 0;
  }
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing.small} 0; // TODO margin
  background-color: ${props => props.theme.color.background};
`

export default function Footer() {
  const algos = useStaticQuery(graphql`
    query FooterQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `).allMdx.edges

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterBlock>
          <div>
            <H4>algo-lib</H4>
            <p>
              is an open library of algorithms with code and explanation. It is
              maintained by two computer science students.
            </p>
            <br />
            <InternalLink tabIndex="0" to={"/about"}>
              About us
            </InternalLink>
          </div>
        </FooterBlock>
        <FooterBlock>
          <div>
            <H4>Contact</H4>
            Found an issue or a typo? Something is unclear? Contact us via{" "}
            <ExternalLink tabIndex="0" to={""}>
              e-mail
            </ExternalLink>{" "}
            or create an issue in our{" "}
            <ExternalLink
              tabIndex="0"
              href="https://github.com/katzkowski/algo-lib"
            >
              GitHub repository
            </ExternalLink>
            .
          </div>
        </FooterBlock>
        <FooterBlock>
          <div>
            <H4>Recently added</H4>
            <RecentlyAdded>
              <ul>
                {algos.map(algo => (
                  <li>
                    <RecentAlgoLink
                      tabIndex="0"
                      href={`/${algo.node.frontmatter.slug}`}
                    >
                      {algo.node.frontmatter.title}
                    </RecentAlgoLink>
                  </li>
                ))}
              </ul>
            </RecentlyAdded>
          </div>
        </FooterBlock>
      </FooterContent>
      <FooterLinks>
        <InternalLink tabIndex="0" to={"/about"} invertedunderline>
          about
        </InternalLink>
        <InternalLink tabIndex="0" to={"/tags"} invertedunderline>
          all tags
        </InternalLink>
        <ExternalLink
          href="https://github.com/katzkowski/algo-lib"
          tabIndex="0"
          invertedunderline
        >
          source code
        </ExternalLink>
      </FooterLinks>
    </FooterWrapper>
  )
}
