import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H3 } from "../components/elements"
import PageWrapper from "../components/PageWrapper"
import { Tag } from "../components/Tag"
import { Title } from "../components/Title"
import { getTagCategory } from "../utils/tag-categories"

const TagContainer = styled.section`
  margin: ${props => props.theme.spacing.xSmall} 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  a {
    margin: 0 ${props => props.theme.spacing.small}
      ${props => props.theme.spacing.xSmall} 0;
  }
`

const Tags = ({ data }) => {
  const tags = data.allMdx.group

  const tagCount = tags.length

  return (
    <PageWrapper>
      <Title subtitle={`found ${tagCount} tag${tagCount === 1 ? "" : "s"}`}>
        All Tags
      </Title>

      <H3>by type</H3>
      <TagContainer>
        {tags
          .filter(tag => getTagCategory(tag) === "type")
          .map(tag => (
            <Tag size="medium" key={tag.tag} to={`/${tag.tag}`}>
              {tag.tag}
            </Tag>
          ))}
      </TagContainer>
      <H3>by application</H3>
      <TagContainer>
        {tags
          .filter(tag => getTagCategory(tag) === "application")
          .map(tag => (
            <Tag size="medium" key={tag.tag} to={`/${tag.tag}`}>
              {tag.tag}
            </Tag>
          ))}
      </TagContainer>
    </PageWrapper>
  )
}

export default Tags

export const allTagsQuery = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  }
`
