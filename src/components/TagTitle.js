import React from "react"
import { LargeTag, TagHeading } from "./Tag"

export default function TagTitle(props) {
  const tag = props.tag
  const totalCount = props.totalCount
  const heading = `${totalCount} algorithm${
    totalCount === 1 ? "" : "s"
  } tagged with`

  return (
    <div>
      <TagHeading>{heading}</TagHeading>
      <LargeTag to={`/${tag}`}>{tag}</LargeTag>
    </div>
  )
}
