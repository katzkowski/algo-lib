import React from "react"
import styled from "styled-components"

// wrapping the markdown content
const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: ${props => props.theme.spacing.medium} auto 0 auto;

  @media ${props => props.theme.breakpoint.tablet} {
    margin: ${props => props.theme.spacing.medium}
      ${props => props.theme.spacing.medium} 0
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: ${props => props.theme.spacing.medium}
      ${props => props.theme.spacing.small} 0
      ${props => props.theme.spacing.small};
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
