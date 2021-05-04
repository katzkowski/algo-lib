import React from "react"
import ScrollMenu from "react-horizontal-scrolling-menu"
import styled from "styled-components"
import Arrow from "./Arrow"
import { Subtitle } from "./elements"
import { MediumTag } from "./Tag"

const Wrapper = styled.div`
  position: relative;
  // width: 100%;

  margin: ${props => props.theme.spacing.medium} -1rem;
  // margin: ${props => props.theme.spacing.medium} 0;

  display: flex;
  flex-direction: column;

  .scroll-menu-arrow--disabled {
    visibility: hidden;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    margin: ${props => props.theme.spacing.medium} auto;
  }
`

const SliderTitle = styled(Subtitle)`
  margin: ${props => props.theme.spacing.xSmall} 0
    ${props => props.theme.spacing.xSmall} 1.5rem;
`

export const TagSlider = props => {
  const tags = props.tags

  return (
    <Wrapper>
      <SliderTitle>{props.category} &gt;</SliderTitle>
      <ScrollMenu
        data={tags.map(tag => (
          <MediumTag key={tag.tag} to={`/${tag.tag}`}>
            {tag.tag}
          </MediumTag>
        ))}
        itemStyle={MediumTag}
        alignCenter={false}
        arrowLeft={<Arrow direction="left" />}
        arrowRight={<Arrow direction="right" />}
        hideSingleArrow={true}
        clickWhenDrag={false}
        dragging={true}
        selected={null}
        disableTabindex={true}
      />
    </Wrapper>
  )
}
