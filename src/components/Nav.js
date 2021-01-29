import React from "react"
import styled from "styled-components"
import { calcGradient } from "../utils/color"

// styled component for nav
const NavWrapper = styled.nav`
  width: 100%;
  background: ${props => calcGradient(props.tags, props.theme)};
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.medium};
  position: absolute;
  top: 0;

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.small} 5%;
  }
`

// styled component for project name
const Brand = styled.a`
  float: left;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  // width: 13%;
  color: ${props => props.theme.color.text};
`

// styled component for navigation list
const NavItemList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 0.3275rem;
  ${props => props.theme.spacing.xSmall};
  right: 0;
  position: absolute;
  // left: 50%;
  // transform: translate(-50%, -50%);
`

// styled component for wrapping nav items
const NavItemWrapper = styled.li`
  display: inline;
  margin: 0 ${props => props.theme.spacing.medium};
`

// styled component for nav items
const NavItem = styled.a`
  font-size: 1.05rem;
  text-decoration: none;
  // color: ${props => props.theme.color.text};
  color: rgba(0, 0, 0, 0.8);
`

const SearchBar = styled.input`
  // float: right;
  border: none;
  font-size: 1.15rem;
  margin: 0 0 0 0;
  left: 15%;
  width: 35%;
  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.xxSmall};
  border-radius: 5px;
  position: absolute;
  background: none;
  border: 2px solid darkgray;
`

export const Nav = props => {
  return (
    <NavWrapper tags={props.tags}>
      <Brand href="/">algo-lib</Brand>
      <SearchBar tpye="text" placeholder="search ..."></SearchBar>
      <NavItemList>
        <NavItemWrapper>
          <NavItem href="/">applications</NavItem>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItem href="/">types</NavItem>
        </NavItemWrapper>
      </NavItemList>
    </NavWrapper>
  )
}
