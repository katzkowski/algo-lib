import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { camelCase } from "../utils/string"

export const Tag = styled(props => <Link {...props} />)`
  display: inline-block;
  font-size: 0.75rem;
  padding: ${props => props.theme.spacing.xxSmall};
  margin: 0 ${props => props.theme.spacing.xxSmall};
  text-decoration: none;
  background-color: ${props => props.theme.color.tag[camelCase(props.to.slice(1))]};
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.theme.color.text};

  &:first-child {
    margin-left: 0;
  }
`

export const TagBar = styled.div`
  display: flex;
  align-items: flex-start;
`

export const LargeTag = styled(Tag)`
  font-size: 1.75rem;
  font-weight: bold;
  padding: ${props => props.theme.spacing.xSmall};
  margin: 0 0 ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.small};

  &:first-child {
    margin-left: ${props => props.theme.spacing.small};
  }
`

export const TagHeading = styled.h1`
  display: inline-block;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.color.text};
`
