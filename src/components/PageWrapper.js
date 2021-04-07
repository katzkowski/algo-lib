import { MDXProvider } from "@mdx-js/react"
import React, { useContext } from "react"
import { createGlobalStyle, ThemeContext } from "styled-components"
import ContentWrapper from "./ContentWrapper"
import { H1, H2, H3, P, Pre } from "./elements"
import Footer from "./Footer"
import { Nav } from "./Nav"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.42;
  }

  html, body {
    font-family: ${props => props.theme.font.main};
    background-color: ${props => props.theme.color.background};
  }

  pre {
    font-family: ${props => props.theme.font.code};
  }

  /* code blocks */
  div.gatsby-highlight {
    @media ${props => props.theme.breakpoint.mobile} {
      margin: 1rem -1rem; /* full screen */
    }
  }

`

export default function PageWrapper({ children, tags }) {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <GlobalStyle theme={theme} />
      <MDXProvider
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          p: P,
          pre: Pre,
        }}
      >
        <Nav tags={tags} />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer></Footer>
      </MDXProvider>
    </div>
  )
}
