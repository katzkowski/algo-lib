import React from "react"
import { H1, Subtitle } from "../components/elements"
import { Tag, TagBar } from "./Tag"

export function Title(props) {
  const Tags = props.tags
    ? props.tags.map(tag => (
        <Tag to={`/${tag}`} key={tag}>
          {tag}
        </Tag>
      ))
    : undefined

  // TODO TagBar
  return (
    <div>
      {Tags ? <TagBar>{Tags}</TagBar> : null}
      <H1>{props.children}</H1>
      <Subtitle>{props.subtitle}</Subtitle>
    </div>
  )
}
