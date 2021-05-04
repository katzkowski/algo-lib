import React from "react"
import styled from "styled-components"

// wrapping the markdown content
export const Wrapper = styled.div`
  position: relative;
  max-width: calc(800px + 3rem);
  max-width: 1200px;

  min-height: 65vh;
  /* 100vh - ContentWrapper margin top  - Footer margin top - Footer height */
  min-height: calc(
    100vh - 100px - ${props => props.theme.spacing.xLarge} - 76px
  );

  margin: 100px auto 0 auto;
  padding: 1rem 1.5rem;
  border-radius: 3px;
  background: ${props => props.theme.color.background};

  @media ${props => props.theme.breakpoint.tablet} {
    margin: 100px ${props => props.theme.spacing.medium} 0
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    max-width: 100%;
    margin: 100px 0 0 0;

    min-height: calc(
      100vh - 100px - ${props => props.theme.spacing.xLarge} - 100px
    );
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
