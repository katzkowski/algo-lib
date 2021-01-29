import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Date, H3, P } from "./elements"
import { Tag, TagBar } from "./Tag"

const CardWrapper = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
`

const CardH3 = styled(H3)`
  margin: 0;
`

const CardDate = styled(Date)`
  margin: 0;
`

const CardP = styled(P)`
  margin: ${props => props.theme.spacing.xSmall} 0
    ${props => props.theme.spacing.xSmall};
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.link};
`

export const AlgoCard = ({ date, preview_text, slug, title, tags }) => {
  const Tags = tags.map(tag => (
    <Tag to={`/${tag}`} key={tag}>
      {tag}
    </Tag>
  ))

  return (
    <CardWrapper>
      <CardLink to={`/${slug}`}>
        <CardH3>{title}</CardH3>
      </CardLink>
      <CardDate>{date}</CardDate>
      <CardP>{preview_text}</CardP>
      <TagBar>{Tags}</TagBar>
    </CardWrapper>
  )
}
