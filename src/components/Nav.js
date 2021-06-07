import { Sun } from "@styled-icons/boxicons-regular/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"
import { Close } from "@styled-icons/evaicons-solid/Close"
import { Menu } from "@styled-icons/evaicons-solid/Menu"
import { Search } from "@styled-icons/evaicons-solid/Search"
import { Link } from "gatsby"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { calcGradient } from "../utils/color"
import { SearchBar } from "./SearchBar"

// wrapping navbar and gradient
const BarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: ${props =>
    props.shadowVisible ? props.theme.shadow.menu : "none"};
  transition: box-shadow 0.3s;
  background: ${props => props.theme.color.background};
`

// styled component for nav
const NavContainer = styled.nav`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: 64px;
  z-index: 1;

  display: flex;
  padding: 0 ${props => props.theme.spacing.medium};

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.xSmall} 1rem
      ${props => props.theme.spacing.xSmall} 1rem;
  }
`

const GradientBar = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  width: 100%;
  height: 0.25rem;
  background: ${props => calcGradient(props.tags, props.theme)};
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

  padding: 0 ${props => props.theme.spacing.small};

  &:hover,
  &:active {
    background-color: ${props => props.theme.color.hover};
  }

  @media ${props => props.theme.breakpoint.mobile} {
    padding: ${props => props.theme.spacing.small}
      ${props => props.theme.spacing.medium};
  }
`

// mobile nav menu
const MobileNav = styled.nav`
  display: none;

  @media ${props => props.theme.breakpoint.mobile} {
    display: ${props => (props.visible ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 1;

    width: 100vw;
    background-color: ${props => props.theme.color.surface};
    box-shadow: ${props => props.theme.shadow.mobileMenu};
  }
`

// right side of nav bar containing search bar + icons
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
  display: ${props => (props.hiddenSearchBar ? "inline-block" : "none")};
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
  const [shadowVisible, showShadow] = useState(false)
  const [navDisplayed, toggleNavDisplay] = useState(true)
  const [searchBarExpanded, expandSearchBar] = useState(false)
  const [mobileSearchVisible, toggleMobileSearch] = useState(false)

  // display shadow when page has been scrolled
  const shadowOnScroll = () => {
    window.addEventListener("scroll", e => {
      if (window.pageYOffset > 20) {
        showShadow(true)
      } else {
        showShadow(false)
      }
    })
  }

  // componentDidMount equivalent for function compontents
  useEffect(shadowOnScroll, [])

  return (
    <BarWrapper shadowVisible={shadowVisible}>
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
          <NavItem to="/tags#applications">applications</NavItem>
          <NavItem to="/tags#types">types</NavItem>
          <NavItem to="/">about</NavItem>
        </NavItems>

        <RightSide>
          <SearchWrapper expanded={searchBarExpanded}>
            <SearchBar
              id="search-navbar"
              onFocus={() => {
                expandSearchBar(true)
                toggleMobileSearch(true)
                toggleNavDisplay(false)
              }}
              onBlur={() => {
                expandSearchBar(false)
                toggleMobileSearch(false)
                setTimeout(() => {
                  toggleNavDisplay(true)
                }, 200)
              }}
              mobileSearchVisible={mobileSearchVisible}
              expanded={searchBarExpanded}
              inNavbar={true}
              hidden={props.hideSearchBar}
            ></SearchBar>
          </SearchWrapper>

          <IconWrapper>
            <SearchIcon
              visible={!mobileSearchVisible}
              hiddenSearchBar={props.hideSearchBar}
              onClick={() => {
                if (!props.hideSearchBar) {
                  toggleMobileSearch(true)
                  setTimeout(() => {
                    // timeout for browser to display element
                    const search = document.getElementById("search-navbar")
                    if (search !== undefined) search.focus()
                  }, 10)
                } else {
                  const search = document.getElementById("search-landing")
                  if (search !== undefined) {
                    search.focus()
                    // scroll to search bar
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                }
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
      <GradientBar tags={props.tags} visible={props.showGradient} />
      <MobileNav visible={mobileMenuVisible}>
        <div>
          <NavItem to="/tags#applications">applications</NavItem>
          <NavItem to="/tags#types">types</NavItem>
          <NavItem to="/">about</NavItem>
        </div>
      </MobileNav>
    </BarWrapper>
  )
}
