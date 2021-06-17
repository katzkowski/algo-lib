import React from "react"
import { Anchor, H2 } from "./elements"

export const AnchorH2 = props => {
  return (
    <H2>
      <Anchor id={props.children.toString().toLowerCase()}></Anchor>
      {props.children}
    </H2>
  )
}
