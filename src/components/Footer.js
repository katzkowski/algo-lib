import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  padding: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.color.surface};
`

export default function Footer() {
  return (
    <StyledFooter>
      <center>algo-lib is a collection of algorithms</center>
    </StyledFooter>
  );
}
