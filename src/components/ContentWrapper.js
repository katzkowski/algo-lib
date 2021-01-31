import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  margin: ${props => props.theme.spacing.medium} 15% 0 15%;

  @media ${props => props.theme.breakpoint.tablet} {
    width: 85%;
    margin: ${props => props.theme.spacing.medium} 7.5% 0 7.5%;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    width: 90%;
    margin: ${props => props.theme.spacing.medium} 5% 0 5%;
  }
`

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}
