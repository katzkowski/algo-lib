import { Sun } from "@styled-icons/boxicons-regular/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"
import { Close } from "@styled-icons/evaicons-solid/Close"
import { Menu } from "@styled-icons/evaicons-solid/Menu"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"
import { calcGradient } from "../utils/color"

// styled component for nav
const NavWrapper = styled.nav`
  width: 100%;
  background: ${props => calcGradient(props.tags, props.theme)};

  display: flex;
  justify-content: space-between;

  padding: ${props => props.theme.spacing.xxSmall} 12.5%
    ${props => props.theme.spacing.xxSmall} 12.5%;

  @media ${props => props.theme.breakpoint.tablet} {
    padding: ${props => props.theme.spacing.xxSmall}
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.xxSmall} 2.5%
      ${props => props.theme.spacing.xSmall} 5%;
  }
`

// styled component for project name
const Brand = styled.a`
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;

  color: ${props => props.theme.color.text};

  align-self: center;
  margin: ${props => props.theme.spacing.xSmall} 0;
`

// styled component for navigation list
const NavItemList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  // margin: 0.3275rem;
`

// styled component for wrapping nav items
const NavItemWrapper = styled.li`
  // display: inline;
  margin: 0 ${props => props.theme.spacing.small};

  &:nth-last-child(2) {
    margin-right: ${props => props.theme.spacing.xSmall};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    display: none;
  }
`

// styled component for nav items
const NavItem = styled.a`
  font-size: 1.05rem;
  text-decoration: none;
  // color: ${props => props.theme.color.text};
  color: rgba(0, 0, 0, 0.8);
`

const SearchBar = styled.input`
  font-size: 1.05rem;
  left: 37.5%;
  width: 25%;
  // max-width: 325px;
  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.xxSmall};
  margin: ${props => props.theme.spacing.xSmall} 0;
  border-radius: 15px;
  position: absolute;

  // background: rgba(229, 229, 229, 0.5);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: none;

  @media ${props => props.theme.breakpoint.tablet} {
    // left: calc(65rem * 0.25);
    // width: 20%;
  }

  @media ${props => props.theme.breakpoint.mobile} {
    left: 35%;
    width: 30%;
    min-width: 10rem;
    // display: none;
  }
`

const HamburgerIcon = styled(Menu)`
  display: none;
  color: ${props => props.theme.color.text};
  height: 2rem;
  width: 2rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
`

const CloseIcon = styled(Close)`
  display: none;
  color: ${props => props.theme.color.text};
  height: 2rem;
  width: 2rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
`

const DarkModeIcon = styled(Moon)`
  display: ${props => (props.visible ? "inline-block" : "none")};
  color: ${props => props.theme.color.text};
  height: 1.25rem;
  width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};
`

const LightModeIcon = styled(Sun)`
  display: ${props => (props.visible ? "inline-block" : "none")};
  color: ${props => props.theme.color.text};
  height: 1.25rem;
  width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};
`

export const Nav = props => {
  const [mobileMenuVisible, toggleMobileMenu] = useState(false)
  const { toggleDark } = useStyledDarkMode()

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
        <DarkModeIcon visible onClick={() => toggleDark()} />
        <LightModeIcon />
        <CloseIcon
          visible={mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
        <HamburgerIcon
          visible={!mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
      </NavItemList>
    </NavWrapper>
  )
}
