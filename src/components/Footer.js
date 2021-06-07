import React from "react"
import styled from "styled-components"
import { ExternalLink, InternalLink } from "./elements"

const FooterWrapper = styled.footer`
  font-size: 0.95rem;
  width: 100%;
  position: relative;
  max-height: 76px;
  background: ${props => props.theme.color.surface};
  margin: ${props => props.theme.spacing.medium} 0;
  bottom: 0;

  @media ${props => props.theme.breakpoint.mobile} {
    max-height: 100px;
  }
`

const FooterContent = styled.div`
  position: relative;
  max-width: 800px;
  min-height: 76px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  padding: ${props => props.theme.spacing.xSmall}
    ${props => props.theme.spacing.small};

  background: ${props => props.theme.color.surface};
  color: ${props => props.theme.color.textLight};
  border-radius: 5px 5px 0 0;

  @media ${props => props.theme.breakpoint.tablet} {
    margin: 0 ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    min-height: 100px;
    margin: 0 ${props => props.theme.spacing.small};
  }
`

const Brand = styled.span`
  font-weight: 600;
  color: ${props => props.theme.color.text};
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <center>
          <Brand>algo-lib </Brand>
          <span>
            is an open library of algorithms with code and explanation
          </span>
        </center>
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
      </FooterContent>
    </FooterWrapper>
  )
}
