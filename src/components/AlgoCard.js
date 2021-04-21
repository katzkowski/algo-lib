import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Date, H3, P } from "./elements"
import { Tag, TagBar } from "./Tag"

const CardWrapper = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
  padding: ${props => props.theme.spacing.small};
  border: 1px solid ${props => props.theme.color.background};
  border-radius: 5px;
  transition: border 0.1s;

  &:hover {
    border: 1px solid ${props => props.theme.color.textLight};
  }
`

const CardTitle = styled(H3)`
  margin: 0;
`

const CardDate = styled(Date)`
  margin: 0;
`

const CardText = styled(P)`
  margin: ${props => props.theme.spacing.xSmall} 0
    ${props => props.theme.spacing.xSmall};
  line-height: 1.32;
  color: ${props => props.theme.color.text};
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.heading};
`

export const AlgoCard = ({ date, preview_text, slug, title, tags }) => {
  const Tags =
    tags !== undefined
      ? tags.map(tag => (
          <Tag to={`/${tag}`} key={tag}>
            {tag}
          </Tag>
        ))
      : undefined

  return (
    <CardLink to={`/${slug}`}>
      <CardWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <CardText>{preview_text}</CardText>
        <TagBar>{Tags}</TagBar>
      </CardWrapper>
    </CardLink>
  )
}
