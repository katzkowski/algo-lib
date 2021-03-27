import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { lightTheme } from "./src/themes/theme"
require("prismjs/themes/prism.css") // theme for code blocks

const GlobalStyles = createGlobalStyle`
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
`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
