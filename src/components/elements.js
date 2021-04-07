import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.color.heading};
  margin: 0.75rem 0 ${props => props.theme.spacing.medium};
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.color.heading};
  margin: ${props => props.theme.spacing.medium} 0
    ${props => props.theme.spacing.small};
`

export const H3 = styled.h3`
  font-size: 1.375rem;
  font-weight: bold;
  color: ${props => props.theme.color.heading};
  margin: ${props => props.theme.spacing.medium} 0
    ${props => props.theme.spacing.small};
`

export const Container = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
  padding: ${props => props.theme.spacing.small} 0;
`

export const Date = styled.h5`
  margin: ${props => props.theme.spacing.small} 0;
  color: ${props => props.theme.color.textLight};
  font-weight: 500;
`

export const P = styled.p`
  margin: ${props => props.theme.spacing.small} 0 1.25rem;
  color: ${props => props.theme.color.text};
  line-height: 2rem;
  font-size: 1.15rem;
`

export const Pre = styled.pre`
  margin: 1rem -1rem;
  font-family: ${props => props.theme.font.code};
`
