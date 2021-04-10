import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SearchItem = styled(props => <Link {...props} />)`
  width: 100%;
  text-decoration: none;
  color: ${props => props.theme.color.text};
  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.xSmall};

  &:hover {
    background-color: rgba(32, 33, 36, 0.04); // TODO new theme color
  }
`

export const SearchResultItem = ({ children }) => {
  return <SearchItem>{children}</SearchItem>
}
