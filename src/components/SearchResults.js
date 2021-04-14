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

const unFlattenResults = results =>
  results.map(post => {
    const { slug, tags, title } = post
    return { slug, title, tags }
  })

export const SearchResults = props => {
  const algos = unFlattenResults(props.results)

  return (
    <ResultsWrapper visible={props.displayResults}>
      {algos.map(algo => (
        <SearchResultItem key={algo.slug} item={algo} />
      ))}
    </ResultsWrapper>
  )
}
