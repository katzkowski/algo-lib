import { Search } from "@styled-icons/evaicons-solid/Search"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { useFlexSearch } from "react-use-flexsearch"
import styled from "styled-components"
import { SearchResults } from "./SearchResults"

// wrapping search bar and search results
const SearchBarWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: ${props => (props.expanded ? "1" : "0")};
  transition: flex-grow 0.2s ease-in-out;

  @media ${props => props.theme.breakpoint.mobile} {
    flex-grow: 1;
    display: ${props => (props.mobileSearchVisible ? "flex" : "none")};
  }
`

const SearchInput = styled.input`
  display: flex;
  z-index: 10;
  align-items: center;
  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.xSmall}
    ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.large};

  width: 100%;

  font-size: 1.05rem;
  background-color: ${props => props.theme.color.surface};
  color: ${props => props.theme.color.textLight};

  border-radius: 5px;
  border: none;
  max-height: 2.25rem;
  min-height: 2.25rem;

  &:focus {
    border: 1px solid ${props => props.theme.color.text};
    outline: none;
  }

  @media ${props => props.theme.breakpoint.tablet} {
    // left: calc(65rem * 0.25);
    // width: 20%;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.mobileSearchVisible ? "inline-block" : "none")};
  }
`

const SearchBarIcon = styled(Search)`
  position: absolute;
  z-index: 11;
  left: ${props => props.theme.spacing.xSmall};
  top: ${props => props.theme.spacing.xSmall};
  color: ${props => props.theme.color.textLight};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.mobileSearchVisible ? "inline-block" : "none")};
  }
`

export const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState("")
  const data = useStaticQuery(graphql`
    query {
      localSearchAlgorithms {
        index
        store
      }
    }
  `)

  const results = useFlexSearch(
    searchQuery,
    data.localSearchAlgorithms.index,
    data.localSearchAlgorithms.store
  )

  return (
    <SearchBarWrapper
      mobileSearchVisible={props.mobileSearchVisible}
      expanded={props.expanded}
    >
      <SearchBarIcon mobileSearchVisible={props.mobileSearchVisible} />
      <SearchInput
        id="navbar-search"
        type="text"
        placeholder="search ..."
        mobileSearchVisible={props.mobileSearchVisible}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <SearchResults
        displayResults={props.expanded || props.mobileSearchVisible}
        results={results}
      />
    </SearchBarWrapper>
  )
}
