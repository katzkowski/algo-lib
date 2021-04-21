import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { camelCase } from "../utils/string"

const StyledTag = styled(props => <Link {...props} />)`
  display: inline-block;

  padding: ${props => props.theme.spacing.xxSmall};
  margin: 0 ${props => props.theme.spacing.xxSmall};

  font-size: 0.75rem;
  text-decoration: none;
  color: ${props => props.theme.color.tagText};

  background-color: ${props =>
    props.theme.color.tag[camelCase(props.to.slice(1))]};
  border: 1px solid
    ${props => props.theme.color.tag[camelCase(props.to.slice(1))]};
  border-radius: 5px;
  box-sizing: border-box;

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

export const Tag = props => {
  const linkTarget = props.to.toLowerCase()

  return <StyledTag to={`${linkTarget}`}>{props.children}</StyledTag>
}

export const StyledMediumTag = styled(StyledTag)`
  font-size: 1.25rem;
  font-weight: bold;

  // height: 80px;
  // max-height: 80px;

  // padding: ${props => props.theme.spacing.medium}
  //   ${props => props.theme.spacing.large};
  // margin: 0 ${props => props.theme.spacing.small};

  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.medium};
  margin: 0 ${props => props.theme.spacing.xSmall};

  &:first-child {
    margin-left: 0;
  }

  @media ${props => props.theme.breakpoint.tablet} {
    padding: ${props => props.theme.spacing.small}
      ${props => props.theme.spacing.medium};
    margin: 0 ${props => props.theme.spacing.xSmall};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.small}
      ${props => props.theme.spacing.medium};
    margin: 0 ${props => props.theme.spacing.xSmall};
  }
`
export const MediumTag = props => {
  const linkTarget = props.to.toLowerCase()

  return (
    <StyledMediumTag to={`${linkTarget}`}>{props.children}</StyledMediumTag>
  )
}

export const StyledLargeTag = styled(StyledTag)`
  font-size: 1.75rem;
  font-weight: bold;

  padding: ${props => props.theme.spacing.xSmall};
  margin: 0 0 ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.small};

  &:first-child {
    margin-left: ${props => props.theme.spacing.small};
  }
`

export const LargeTag = props => {
  const linkTarget = props.to.toLowerCase()

  return <StyledLargeTag to={`${linkTarget}`}>{props.children}</StyledLargeTag>
}

export const TagBar = styled.div`
  display: flex;
  align-items: flex-start;
`

export const TagHeading = styled.h1`
  display: inline-block;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.color.text};
`
