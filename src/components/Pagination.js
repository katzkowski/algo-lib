import React from "react"
import styled from "styled-components"
import { InternalLink } from "./elements"

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const PaginationElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 520px;

  margin: ${props => props.theme.spacing.medium} auto;

  a:first-child {
    color: ${props =>
      props.isFirst ? props.theme.color.disabled : props.theme.color.link};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:last-child {
    color: ${props =>
      props.isLast ? props.theme.color.disabled : props.theme.color.link};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    a {
      margin: ${props => props.theme.spacing.xSmall};
    }
  }
`

const PaginationElement = styled(InternalLink)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin: 0 ${props => props.theme.spacing.large};
  user-select: none;
`

const CurrentElement = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin: 0 ${props => props.theme.spacing.large};
  color: ${props => props.theme.color.link};
  padding: 0 ${props => props.theme.spacing.xSmall};
  user-select: none;
`

export const Pagination = ({
  isFirst,
  isLast,
  prevPage,
  currentPage,
  nextPage,
  numPages,
}) => {
  return (
    <PaginationWrapper>
      <PaginationElements isFirst={isFirst} isLast={isLast}>
        <PaginationElement invertedunderline to={prevPage}>
          &lsaquo; previous
        </PaginationElement>

        <CurrentElement>
          {currentPage} of {numPages}
        </CurrentElement>

        <PaginationElement invertedunderline to={nextPage}>
          next &rsaquo;
        </PaginationElement>
      </PaginationElements>
    </PaginationWrapper>
  )
}
