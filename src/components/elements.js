import styled from  "styled-components";

export const H1 = styled.h1`
  font-size: 3rem;
  margin: ${props => props.theme.spacing.medium} 0;
  font-weight: bold;
  color: ${props => props.theme.color.text};

`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.color.textLight};
  margin: ${props => props.theme.spacing.small} 0;
`

export const H3 = styled.h3`
  font-size: 1.15rem;
  font-weight: 500;
  color: ${props => props.theme.color.text};
  margin: ${props => props.theme.spacing.xSmall} 0;
`

export const Container = styled.div`
  margin: ${props => props.theme.spacing.medium} 0; 
  padding: ${props => props.theme.spacing.small} 0;
`