import React from "react"
import { Tag, TagBar } from "./Tag"
import { H1, H3 } from "../components/elements";

export default function Title(props) {
  const Tags = props.data.mdx.frontmatter.tags.map(tag => <Tag to={`/${tag}`}>{tag}</Tag>)

  return (
    <div>
      <TagBar>{Tags}</TagBar>
      <H1>{props.data.mdx.frontmatter.title}</H1>
    </div>
  )
}
