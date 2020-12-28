import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: ${props => props.theme.spacing.xxLarge} auto 0;
  position: relative;
`

export default function ContentWrapper ({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}