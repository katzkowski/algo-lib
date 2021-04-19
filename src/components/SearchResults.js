import React from "react"
import styled from "styled-components"
import { Date } from "./elements"
import { SearchResultItem } from "./SearchResultItem"

const ResultsWrapper = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 5;
  top: 2rem;
  width: 100%;

  padding-top: ${props => props.theme.spacing.xSmall};
  background-color: ${props => props.theme.color.background};
  border: 1px solid ${props => props.theme.color.surface};
  border-radius: 0 0 5px 5px;
`

const Subsection = styled(Date)`
  margin: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.medium} 0;
`

const NoResults = styled.p`
  width: 100%;
  text-decoration: none;
  color: ${props => props.theme.color.text};
  padding: ${props => props.theme.spacing.xSmall}
    ${props => props.theme.spacing.medium};
`

export const SearchResults = props => {
  // element to display when there to search results
  const noResultsText = <NoResults>No results</NoResults>

  const algos = props.results.map(algo => (
    <SearchResultItem
      key={algo.slug}
      to={algo.slug}
      item={algo}
      onClick={props.setLinkClicked(true)}
    />
  ))

  return (
    <ResultsWrapper visible={props.displayResults}>
      <Subsection>algorithms</Subsection>
      {algos.length === 0 ? noResultsText : algos}
    </ResultsWrapper>
  )
}
