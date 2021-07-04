import { Search } from "@styled-icons/evaicons-solid/Search"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { useFlexSearch } from "react-use-flexsearch"
import styled from "styled-components"
import { SearchResults } from "./SearchResults"

// wrapping search bar and search results
const SearchBarWrapper = styled.div`
  position: relative;
  display: {props => props.hidden ? "none" : "flex"};
  flex-direction: column;
  align-items: center;
  flex-grow: ${props => (props.expanded ? "1" : "0")};
  transition: flex-grow 0.25s ease-in-out;

  @media ${props => props.theme.breakpoint.mobile} {
    flex-grow: 1;
    display: ${props =>
      (props.mobileSearchVisible || !props.inNavbar) && !props.hidden
        ? "flex"
        : "none"};
  }
`

const SearchInput = styled.input`
  display: flex;
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
  border: 1px solid
    ${props =>
      props.resultsDisplayed
        ? props.theme.color.textLight
        : props.theme.color.surface};

  // 1px solid ${props => props.theme.color.surface};
  max-height: 2.25rem;
  min-height: 2.25rem;

  &:focus {
    border: 1px solid ${props => props.theme.color.textLight};
    outline: none;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props =>
      (props.mobileSearchVisible || !props.inNavbar) && !props.hidden
        ? "inline-block"
        : "none"};
  }
`

const SearchBarIcon = styled(Search)`
  position: absolute;
  left: ${props => props.theme.spacing.xSmall};
  top: ${props => props.theme.spacing.xSmall};
  color: ${props => props.theme.color.textLight};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props =>
      props.mobileSearchVisible || !props.inNavbar ? "inline-block" : "none"};
  }
`

export const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
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

  const handleBlur = e => {
    const parent = e.currentTarget.parentNode

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      if (!parent.contains(document.activeElement)) {
        // if new activeElement is not child of original container
        setShowResults(false)
        if (props.onBlur) {
          props.onBlur()
        }
      } else if (document.location.href === document.activeElement.href) {
        // if new activeElement is link to current page
        setShowResults(false)
        if (props.onBlur) {
          props.onBlur()
        }
      }
    }, 0)
  }

  return (
    <SearchBarWrapper
      mobileSearchVisible={props.mobileSearchVisible}
      expanded={props.expanded}
      inNavbar={props.inNavbar}
      hidden={props.hidden}
    >
      <SearchBarIcon
        mobileSearchVisible={props.mobileSearchVisible && props.inNavbar}
      />
      <SearchInput
        id={props.id}
        type="text"
        placeholder="search algorithms..."
        mobileSearchVisible={props.mobileSearchVisible && props.inNavbar}
        resultsDisplayed={showResults}
        onFocus={props.onFocus}
        onBlur={handleBlur}
        onChange={e => {
          setSearchQuery(e.target.value)
          e.target.value.trim() !== ""
            ? setShowResults(true)
            : setShowResults(false)
        }}
      />
      <SearchResults
        displayResults={
          showResults &&
          (props.mobileSearchVisible || props.expanded || !props.inNavbar)
        }
        results={results}
      />
    </SearchBarWrapper>
  )
}
