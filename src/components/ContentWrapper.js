import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  max-width: calc(65rem * 0.65);
  // min-width: calc(65rem * 0.85);
  // margin: ${props => props.theme.spacing.medium} 12.5% 0 12.5%;
  margin: ${props => props.theme.spacing.medium} auto 0 auto;

  @media ${props => props.theme.breakpoint.tablet} {
    width: 65%;
    // min-width: 85%;
    margin: ${props => props.theme.spacing.medium}
      ${props => props.theme.spacing.medium} 0
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    width: 90%;
    margin: ${props => props.theme.spacing.medium} 5% 0 5%;
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
