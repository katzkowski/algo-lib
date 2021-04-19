import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  padding-top: ${props => props.theme.spacing.small};
  min-height: 200px;
  background-color: ${props => props.theme.color.surface};
  margin-top: ${props => props.theme.spacing.xLarge};
  bottom: 0;
`

const FooterContent = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.theme.color.textLight};

  @media ${props => props.theme.breakpoint.tablet} {
    margin: 0 ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: 0 ${props => props.theme.spacing.small};
  }
`

const Brand = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.color.text};
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Brand>algo-lib </Brand>
        {/* <br /> */}
        <span>
          is an open collection of algorithms with code and explanation
        </span>
      </FooterContent>
    </FooterWrapper>
  )
}
