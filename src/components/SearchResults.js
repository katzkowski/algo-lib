import React from "react"
import styled from "styled-components"
import { SearchResultItem } from "./SearchResultItem"

const ResultsWrapper = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 5;
  top: 2rem;
  width: 100%;

  padding-top: 0.25rem;

  background-color: ${props => props.theme.color.surface};
  // border: 1px solid ${props => props.theme.color.textLight};
`

export const SearchResults = props => {
  const results = ["Algorithm 1", "Algorithm 2", "Algorithm 3"]
  // TODO: add key
  const searchResults = results.map(result => (
    <SearchResultItem>{result}</SearchResultItem>
  ))

  return (
    <ResultsWrapper visible={props.displayResults}>
      {searchResults}
    </ResultsWrapper>
  )
}
