import React from "react"
import styled from "styled-components"
import { InternalLink } from "./elements"

const PaginationWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xLarge}
    ${props => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? props.theme.color.disabled : props.theme.color.link};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.color.disabled : props.theme.color.link};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }
`

const PaginationElement = styled(InternalLink)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin: 0 ${props => props.theme.spacing.large};
`

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement invertedunderline to={prevPage}>
        &lt; Previous page
      </PaginationElement>
      <PaginationElement invertedunderline to={nextPage}>
        Next page &gt;
      </PaginationElement>
    </PaginationWrapper>
  )
}
