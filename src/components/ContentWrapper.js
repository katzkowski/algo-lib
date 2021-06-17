import React from "react"
import styled from "styled-components"

// wrapping the markdown content
export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  max-width: calc(1200px + 2 * ${props => props.theme.spacing.small});

  min-height: 65vh;
  /* 100vh - ContentWrapper margin top  - Footer margin top - Footer height */
  min-height: calc(
    100vh - 100px - ${props => props.theme.spacing.medium} - 76px
  );

  margin: 100px auto 0 auto;
  padding: ${props => props.theme.spacing.small};
  border-radius: 3px;
  background: ${props => props.theme.color.background};

  @media ${props => props.theme.breakpoint.tablet} {
    margin: 100px ${props => props.theme.spacing.small} 0
      ${props => props.theme.spacing.small};
    padding: ${props => props.theme.spacing.small} 0;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: 60px 0 0 0;
    padding: ${props => props.theme.spacing.small};

    min-height: calc(
      100vh - 100px - ${props => props.theme.spacing.xLarge} - 100px
    );
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
