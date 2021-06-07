import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { camelCase } from "../utils/string"
import { getTagCategory } from "../utils/tag-categories"

// regular tag size
const StyledTag = styled(props => <Link {...props} />)`
  display: inline-block;

  // set color according to tag name
  background-color: ${props =>
    props.theme.color.tag[camelCase(props.to.slice(1))]};
  border: 1px solid
    ${props => props.theme.color.tag[camelCase(props.to.slice(1))]};
  border-radius: 5px;
  box-sizing: border-box;

  padding: ${props => props.theme.spacing.xxSmall};
  margin: 0 ${props => props.theme.spacing.xSmall} 0 0;

  font-size: 0.75rem;
  color: ${props => props.theme.color.tagText};
  text-decoration: none;

  user-drag: none;
  cursor: pointer;
  tabindex: 0;

  &:focus {
    border: 1px solid ${props => props.theme.color.text};
    outline: none;
  }

  &:first-child {
    margin-left: 0;
  }
`

// medium tag size
const StyledMediumTag = styled(StyledTag)`
  font-size: 1.25rem;
  font-weight: bold;

  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.medium};
  margin: 0 ${props => props.theme.spacing.xSmall};
`

// large tag size
const StyledLargeTag = styled(StyledTag)`
  font-size: 3rem;
  font-weight: bold;

  padding: ${props => props.theme.spacing.xSmall};
  margin-left: ${props => props.theme.spacing.small}:;
`

export const Tag = props => {
  const linkTarget = props.to.toLowerCase()
  const size = props.size !== undefined ? props.size.toLowerCase() : undefined

  // check if tag has been definied in tag-categories.js
  const tagDefined =
    getTagCategory({ tag: props.children }) !== undefined ? true : false

  // do not render if tag has not been defined
  if (!tagDefined) {
    return null
  }

  // render according to tag size
  if (size === "large") {
    return (
      <StyledLargeTag to={`${linkTarget}`}>{props.children}</StyledLargeTag>
    )
  } else if (size === "medium") {
    return (
      <StyledMediumTag to={`${linkTarget}`}>{props.children}</StyledMediumTag>
    )
  } else {
    return <StyledTag to={`${linkTarget}`}>{props.children}</StyledTag>
  }
}

// container for multiple tags
export const TagBar = styled.div`
  margin: ${props => props.theme.spacing.small} 0 0;
  display: flex;
  align-items: flex-start;
`

// heading same size as large tag
export const TagHeading = styled.h1`
  display: inline-block;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.color.text};
`
