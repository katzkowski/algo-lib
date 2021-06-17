import React from "react"
import styled from "styled-components"
import { H4 } from "./elements"

const TocWrapper = styled.div`
  min-width: 150px;
  margin: 6rem ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.small};

  @media ${props => props.theme.breakpoint.tablet} {
    display: none;
  }
`

const TocLink = styled.a`
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

const Toc = styled.nav`
  position: fixed;

  ul {
    list-style-type: none;
  }

  ul li {
    margin: ${props => props.theme.spacing.small} 0;
  }
`

export const TableOfContents = props => {
  return (
    <TocWrapper>
      <Toc>
        <H4>On this page</H4>
        <ul>
          <li>
            <TocLink tabIndex="0" href="#implementation">
              Implementation
            </TocLink>
          </li>
          <li>
            <TocLink tabIndex="0" href="#description">
              Description
            </TocLink>
          </li>
          <li>
            <TocLink tabIndex="0" href="#usage">
              Usage
            </TocLink>
          </li>
          <li>
            <TocLink href="#complexity">Complexity</TocLink>
          </li>
        </ul>
      </Toc>
    </TocWrapper>
  )
}
