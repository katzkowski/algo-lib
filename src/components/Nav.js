import { Sun } from "@styled-icons/boxicons-regular/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"
import { Close } from "@styled-icons/evaicons-solid/Close"
import { Menu } from "@styled-icons/evaicons-solid/Menu"
import { Search } from "@styled-icons/evaicons-solid/Search"
import { Link } from "gatsby"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"
import { calcGradient } from "../utils/color"
import { SearchBar } from "./SearchBar"

// wrapping navbar and gradient
const BarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  box-shadow: ${props => props.theme.shadow.menu};
`

// styled component for nav
const NavContainer = styled.nav`
  width: 100%;
  height: 64px;
  z-index: 1;
  background: ${props => props.theme.color.background};

  display: flex;

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

const GradientBar = styled.div`
  width: 100%;
  height: 0.25rem;
  background: ${props => calcGradient(props.tags, props.theme)};
  // box-shadow: ${props => props.theme.shadow.menu};
  z-index: -1;
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
    // margin: 0 ${props => props.theme.spacing.small} 0 0;
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
`

// styled component nav items container
const NavItems = styled.div`
  // hide navigation on searchbar focus
  display: ${props => (props.visible ? "flex" : "none")};

  overflow: visible;
  height: 100%;
  flex-grow: 2;

  align-items: center;
  padding-left: ${props => props.theme.spacing.xLarge};

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
  color: ${props => props.theme.color.text};
  // color: rgba(0, 0, 0, 0.8); // TODO new theme color

  padding: 0 ${props => props.theme.spacing.small};

  &:hover {
    background-color: rgba(32, 33, 36, 0.04); // TODO new theme color
  }

  @media ${props => props.theme.breakpoint.mobile} {
    display: none;
  }
`

const RightSide = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

// wrapping search element in navbar
const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: ${props => (props.expanded ? "2" : "1")};
  padding-left: ${props => props.theme.spacing.xLarge};

  @media ${props => props.theme.breakpoint.mobile} {
    padding-left: 0;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SearchIcon = styled(Search)`
  display: none;
  color: ${props => props.theme.color.text};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.xSmall};

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
`

const CloseSearchIcon = styled(Close)`
  display: none;
  color: ${props => props.theme.color.text};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.xxSmall};

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "inline-block" : "none")};
  }
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
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};
`

const LightModeIcon = styled(Sun)`
  display: ${props => (props.visible ? "inline-block" : "none")};
  color: ${props => props.theme.color.text};
  max-height: 1.25rem;
  min-height: 1.25rem;
  max-width: 1.25rem;
  min-width: 1.25rem;
  margin: 0 0 0 ${props => props.theme.spacing.small};
`

export const Nav = props => {
  const [mobileMenuVisible, toggleMobileMenu] = useState(false)
  const { isDark, toggleDark } = useStyledDarkMode()

  const [navDisplayed, toggleNavDisplay] = useState(true)
  const [searchBarExpanded, toggleSearchBar] = useState(false)
  const [mobileSearchVisible, toggleMobileSearch] = useState(false)

  return (
    <BarWrapper>
      <NavContainer tags={props.tags}>
        <CloseIcon
          visible={mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
        <HamburgerIcon
          visible={!mobileMenuVisible}
          onClick={() => toggleMobileMenu(!mobileMenuVisible)}
        />
        <Brand visible={!mobileSearchVisible} href="/">
          algo-lib
        </Brand>

        <NavItems visible={navDisplayed}>
          <NavItem to="/">applications</NavItem>
          <NavItem to="/">types</NavItem>
          <NavItem to="/">about</NavItem>
        </NavItems>

        <RightSide>
          <SearchWrapper expanded={searchBarExpanded}>
            <SearchBar
              onFocus={() => {
                toggleNavDisplay(false)
                toggleSearchBar(true)
                toggleMobileSearch(true)
              }}
              onBlur={() => {
                toggleSearchBar(false)
                toggleMobileSearch(false)
                setTimeout(() => {
                  toggleNavDisplay(true)
                }, 200)
              }}
              mobileSearchVisible={mobileSearchVisible}
              expanded={searchBarExpanded}
            ></SearchBar>
          </SearchWrapper>

          <IconWrapper>
            <SearchIcon
              visible={!mobileSearchVisible}
              onClick={() => {
                toggleMobileSearch(true)
                setTimeout(() => {
                  // TODO geht das schöner?
                  document.getElementById("navbar-search").focus()
                }, 10)
              }}
            />
            <CloseSearchIcon
              visible={mobileSearchVisible}
              onClick={() => toggleMobileSearch(false)}
            />
            <DarkModeIcon visible={!isDark} onClick={() => toggleDark()} />
            <LightModeIcon visible={isDark} onClick={() => toggleDark()} />
          </IconWrapper>
        </RightSide>
      </NavContainer>
      <GradientBar tags={props.tags} />
    </BarWrapper>
  )
}
