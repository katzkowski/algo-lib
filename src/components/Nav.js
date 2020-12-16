import styled from "styled-components";
import React from "react";

// styled component for nav
const NavWrapper = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.color.surface};
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium}; 
  // display: flex;
  // justify-content: space-between;
  position: fixed;
`;

// styled component for project name
const Brand = styled.a`
  float: left;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.color.text}; 
`;

// styled component for navigation list
const NavItemList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: ${props => props.theme.spacing.small} ${props => props.theme.spacing.xSmall};
  float: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// styled component for wrapping nav items
const NavItemWrapper = styled.li`
  display: inline;
  margin: 0 ${props => props.theme.spacing.medium};
`; 

// styled component for nav items
const NavItem = styled.a`
  font-size: 1.25rem;
  text-decoration: none;
  color: ${props => props.theme.color.text};
`;

const SearchBar = styled.input`
  float: right;
  border: none;
  font-size: 1.15rem;
  padding: ${props => props.theme.spacing.xxSmall};
  border-radius: 5px;
`

export const Nav = () => {
  return (
    <NavWrapper>
      <Brand href="/">algo-lib</Brand>
      <NavItemList>
        <NavItemWrapper>
          <NavItem href="/">applications</NavItem>
        </NavItemWrapper>
        <NavItemWrapper>
          <NavItem href="/">types</NavItem>
        </NavItemWrapper>
      </NavItemList>
      <SearchBar tpye="text" placeholder="Search ..."></SearchBar>
    </NavWrapper>
  )
}
