import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SearchItem = styled(props => <Link {...props} />)`
  width: 100%;
  text-decoration: none;
  color: ${props => props.theme.color.text};
  padding: ${props => props.theme.spacing.xSmall}
    ${props => props.theme.spacing.medium};

  &:hover {
    // background-color: rgba(32, 33, 36, 0.04); // TODO new theme color
    background-color: ${props => props.theme.color.hover};
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const SearchResultItem = props => {
  return <SearchItem to={`/${props.item.slug}`}>{props.item.title}</SearchItem>
}
