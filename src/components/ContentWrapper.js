import React from "react"
import styled from "styled-components"

// wrapping the markdown content
const Wrapper = styled.div`
  position: relative;
  max-width: 800px;

  min-height: 65vh;
  /* 100vh - ContentWrapper margin top  - Footer margin top - Footer height */
  min-height: calc(
    100vh - 100px - ${props => props.theme.spacing.xLarge} - 200px
  );

  margin: 100px auto 0 auto;

  @media ${props => props.theme.breakpoint.tablet} {
    margin: 100px ${props => props.theme.spacing.medium} 0
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: 100px ${props => props.theme.spacing.small} 0
      ${props => props.theme.spacing.small};
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
