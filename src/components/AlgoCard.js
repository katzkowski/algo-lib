import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Date, H3, P } from "./elements"
import { Tag, TagBar } from "./Tag"

const CardWrapper = styled.div`
  margin: 0 ${props => props.theme.spacing.xSmall};
  padding: ${props => props.theme.spacing.small};
  border: 1px solid ${props => props.theme.color.background};
  border-radius: 5px;
  transition: border 0.1s;
  transition: box-shadow 0.3s;

  &:hover {
    // border: 1px solid ${props => props.theme.color.textLight};
    box-shadow: ${props => props.theme.shadow.menu};
  }

  &:first-child() {
    margin-top: ${props => props.theme.spacing.xSmall};
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
  font-size: 1.05rem;
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
