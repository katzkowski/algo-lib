import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline"
import React, { Component } from "react"
import styled from "styled-components"

const StyledArrowLeft = styled(ArrowIosBackOutline)`
  color: ${props => props.theme.color.textLight};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 ${props => props.theme.spacing.xxSmall} 0 0;
`

const StyledArrowRight = styled(ArrowIosForwardOutline)`
  color: ${props => props.theme.color.textLight};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.xxSmall};
`

export default class Arrow extends Component {
  render() {
    if (this.props.direction === "left") {
      return <StyledArrowLeft />
    } else {
      return <StyledArrowRight />
    }
  }
}
