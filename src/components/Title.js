import React from "react"
import { H1, Subtitle } from "../components/elements"
import { Tag, TagBar } from "./Tag"

export function Title(props) {
  const Tags = props.data.mdx.frontmatter.tags.map(tag => (
    <Tag to={`/${tag}`} key={tag}>
      {tag}
    </Tag>
  ))

  return (
    <div>
      <TagBar>{Tags}</TagBar>
      <H1>{props.data.mdx.frontmatter.title}</H1>
      <Subtitle>{props.data.mdx.frontmatter.date}</Subtitle>
    </div>
  )
}
