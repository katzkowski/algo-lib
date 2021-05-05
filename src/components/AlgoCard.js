import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H3, P, Subtitle } from "./elements"
import { Tag, TagBar } from "./Tag"

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 220px;
  max-height: 240px;

  padding: ${props => props.theme.spacing.small};

  border: 2px solid ${props => props.theme.color.border};
  border-radius: 5px;
  transition: border 0.1s;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${props => props.theme.shadow.menu};
  }

  @media ${props => props.theme.breakpoint.tablet} {
    min-height: 205px;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    min-height: 180px;
  }
`

const CardTitle = styled(H3)`
  margin: 0;
`

const CardDate = styled(Subtitle)`
  margin: 0;
`

const CardText = styled(P)`
  margin: ${props => props.theme.spacing.xSmall} 0
    ${props => props.theme.spacing.xSmall};
  line-height: 1.32;
  color: ${props => props.theme.color.textLight};
  font-size: 1.05rem;
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.heading};
`

// container for multiple cards
export const CardContainer = styled.section`
  margin: ${props => props.theme.spacing.xSmall} 0;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${props => props.theme.spacing.small};
  grid-row-gap: ${props => props.theme.spacing.small};

  @media ${props => props.theme.breakpoint.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
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
    <CardWrapper>
      <CardLink to={`/${slug}`}>
        <CardTitle>{title}</CardTitle>
        {/* <CardDate>{date}</CardDate> */}
        <CardText>{preview_text}</CardText>
      </CardLink>
      <TagBar>{Tags}</TagBar>
    </CardWrapper>
  )
}
