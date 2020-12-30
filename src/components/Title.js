import React from "react"
import { Tag, TagBar } from "./Tag"
import { H1, Date } from "../components/elements";

export default function Title(props) {
  const Tags = props.data.mdx.frontmatter.tags.map(tag => <Tag to={`/${tag}`} key={tag}>{tag}</Tag>)

  return (
    <div>
      <TagBar>{Tags}</TagBar>
      <H1>{props.data.mdx.frontmatter.title}</H1>
      <Date>{props.data.mdx.frontmatter.date}</Date>
    </div>
  )
}
