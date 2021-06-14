import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.color.heading};
  margin: ${props => props.theme.spacing.small} 0;

  &:first-child {
    margin: ${props => props.theme.spacing.xSmall} 0
      ${props => props.theme.spacing.large};
  }
`

export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.color.heading};
  margin: ${props => props.theme.spacing.medium} 0
    ${props => props.theme.spacing.xSmall};
`

export const H3 = styled.h3`
  font-size: 1.375rem;
  font-weight: bold;
  color: ${props => props.theme.color.heading};
  margin: ${props => props.theme.spacing.medium} 0
    ${props => props.theme.spacing.small};
  position: relative; /* for nesting anchors */
`

export const LandingHeadline = styled(H1)`
  font-weight: 600;
  margin: ${props => props.theme.spacing.medium} 0
    ${props => props.theme.spacing.xSmall};
`

export const LandingSubtitle = styled(H3)`
  font-weight: 500;
  color: ${props => props.theme.color.textLight};
  margin: ${props => props.theme.spacing.xSmall} 0;
`

export const Container = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
  padding: ${props => props.theme.spacing.small} 0;
`

export const Subtitle = styled.h4`
  margin: ${props => props.theme.spacing.small} 0;
  color: ${props => props.theme.color.textLight};
  font-weight: 500;
`

export const RecentTitle = styled(Subtitle)`
  margin: 0 0 0 ${props => props.theme.spacing.xSmall};

  @media ${props => props.theme.breakpoint.mobile} {
    margin: ${props => props.theme.spacing.xSmall} 0 0 1.5rem;
  }
`

export const InternalLink = styled(({ invertedunderline, ...props }) => (
  <Link {...props} />
))`
  padding: 0 ${props => props.theme.spacing.xSmall};
  color: ${props => props.theme.color.link};
  text-decoration: ${props => (props.invertedunderline ? "none" : "underline")};
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: ${props =>
      props.invertedunderline ? "underline" : "none"};
    color: ${props => props.theme.color.link};
  }

  &:link,
  &:visited {
    color: ${props => props.theme.color.link};
  }
`

export const ExternalLink = styled.a`
  padding: 0 ${props => props.theme.spacing.xSmall};
  color: ${props => props.theme.color.link};
  text-decoration: ${props => (props.invertedunderline ? "none" : "underline")};
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: ${props =>
      props.invertedunderline ? "underline" : "none"};
    color: ${props => props.theme.color.link};
  }

  &:link,
  &:visited {
    color: ${props => props.theme.color.link};
  }
`

export const Anchor = styled.span`
  position: absolute;
  top: -80px; /* navbar height and extra space */
`

export const P = styled.p`
  margin: 0 0 1.25rem;
  color: ${props => props.theme.color.text};
  line-height: 1.5rem;
  font-size: 1rem;
`

export const Pre = styled.pre`
  font-family: ${props => props.theme.font.code};
`
