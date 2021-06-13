import React from "react"
import styled from "styled-components"
import { H1, Subtitle } from "../components/elements"
import { Tag, TagBar } from "./Tag"

const Author = styled.span`
  font-weight: 600;
`

const CardsHeading = styled(Subtitle)`
  margin: ${props => props.theme.spacing.small} 0;
`

export function Title(props) {
  const Tags = props.tags
    ? props.tags.map(tag => (
        <Tag to={`/${tag}`} key={tag}>
          {tag}
        </Tag>
      ))
    : undefined

  // display author and date or subtitle or heading for card section
  return (
    <div>
      {Tags ? <TagBar>{Tags}</TagBar> : null}
      <H1>{props.children}</H1>
      {props.author ? (
        <Subtitle>
          by <Author>{props.author}</Author> | {props.date}
        </Subtitle>
      ) : props.subtitle ? (
        <Subtitle>{props.subtitle}</Subtitle>
      ) : props.cardsHeading ? (
        <CardsHeading>{props.cardsHeading}</CardsHeading>
      ) : null}
    </div>
  )
}
