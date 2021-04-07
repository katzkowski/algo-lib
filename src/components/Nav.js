import { Sun } from "@styled-icons/boxicons-regular/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"
import { Close } from "@styled-icons/evaicons-solid/Close"
import { Menu } from "@styled-icons/evaicons-solid/Menu"
import { Link } from "gatsby"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"
import { calcGradient } from "../utils/color"

// styled component for nav
const NavWrapper = styled.nav`
  width: 100%;
  z-index: 1;
  // background: ${props => calcGradient(props.tags, props.theme)};
  background: ${props => props.theme.color.background};
  // box-shadow: ${props => props.theme.shadow.menu};

  display: flex;
  justify-content: space-between;

  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.medium};

  @media ${props => props.theme.breakpoint.tablet} {
    padding: ${props => props.theme.spacing.xxSmall}
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.xSmall} 1rem
      ${props => props.theme.spacing.xSmall} 1rem;
  }
`

const NavContainer = styled.nav`
  width: 100%;
  height: 64px;
  z-index: 1;
  background: ${props => props.theme.color.background};

  display: flex;
  // justify-content: space-between;

  padding: 0 ${props => props.theme.spacing.medium};

  @media ${props => props.theme.breakpoint.tablet} {
    padding: ${props => props.theme.spacing.xxSmall}
      ${props => props.theme.spacing.medium};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.xSmall} 1rem
      ${props => props.theme.spacing.xSmall} 1rem;
  }
`

const BarWrapper = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.shadow.menu};
`

// styled component for project name
const Brand = styled.a`
  min-width: 80px;
  align-self: center;

  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  user-select: none;
  color: ${props => props.theme.color.text};

  @media ${props => props.theme.breakpoint.mobile} {
    flex-grow: 1;
    margin: 0 ${props => props.theme.spacing.small} 0 0;
  }
`

// styled component for navigation list
const NavItemList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  // margin: 0.3275rem;
`

const NavItems = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding-left: ${props => props.theme.spacing.xLarge};

  @media ${props => props.theme.breakpoint.mobile} {
    display: none;
  }
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
const NavItem = styled(props => <Link {...props} />)`
  // make items full bar height
  height: 100%;
  display: flex;
  align-items: center;

  font-size: 1.05rem;
  text-decoration: none;
  // color: ${props => props.theme.color.text};
  color: rgba(0, 0, 0, 0.8); // TODO new theme color

  padding: 0 ${props => props.theme.spacing.small};

  &:hover {
    background-color: rgba(32, 33, 36, 0.04); // TODO new theme color
  }

  @media ${props => props.theme.breakpoint.mobile} {
    display: none;
  }
`

// wrapping search bar and dark mode icons
const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SearchBar = styled.input`
  padding: ${props => props.theme.spacing.xxSmall}
    ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.xxSmall};

  font-size: 1.05rem;
  background-color: ${props => props.theme.color.surface};

  border-radius: 5px;
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

const GradientBar = styled.div`
  width: 100%;
  height: 0.25rem;
  background: ${props => calcGradient(props.tags, props.theme)};
  // box-shadow: ${props => props.theme.shadow.menu};
  z-index: -1;
`

const HamburgerIcon = styled(Menu)`
  align-self: center;
  display: none;
  color: ${props => props.theme.color.text};
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  margin: 0 ${props => props.theme.spacing.small} 0 0;

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
`

const CloseIcon = styled(Close)`
  align-self: center;
  display: none;
  color: ${props => props.theme.color.text};
  height: 2rem;
  width: 2rem;
  margin: 0 ${props => props.theme.spacing.small} 0 0;

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
    <BarWrapper>
      {/* <GradientBar tags={props.tags} /> */}
      <NavContainer tags={props.tags}>
        <CloseIcon
          visible={mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
        <HamburgerIcon
          visible={!mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
        <Brand href="/">algo-lib</Brand>

        <NavItems>
          <NavItem href="/">applications</NavItem>
          <NavItem href="/">types</NavItem>
          <NavItem href="/">about</NavItem>
        </NavItems>

        <SearchWrapper>
          <SearchBar tpye="text" placeholder="search ..."></SearchBar>
          <DarkModeIcon visible onClick={() => toggleDark()} />
          <LightModeIcon />
        </SearchWrapper>
      </NavContainer>
      <GradientBar tags={props.tags} />
    </BarWrapper>
  )
}
