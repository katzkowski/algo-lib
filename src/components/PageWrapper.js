import { MDXProvider } from "@mdx-js/react"
import React, { useContext } from "react"
import { createGlobalStyle, ThemeContext } from "styled-components"
import { AnchorH2 } from "./AnchorH2"
import ContentWrapper from "./ContentWrapper"
import { Blockquote, H1, H3, P, Pre } from "./elements"
import Footer from "./Footer"
import { Nav } from "./Nav"
require("katex/dist/katex.min.css")

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.2;
  }

  html, body {
    font-family: ${props => props.theme.font.main};
    background-color: ${props => props.theme.color.background};
  }


  /* --- Prism Theme --- */
  /* General */
  pre[class*="language-"],
  code[class*="language-"] {
    color: ${props => props.theme.color.code.baseColor};
    font-size: 1rem;
    text-shadow: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*="language-"]::selection,
  code[class*="language-"]::selection,
  pre[class*="language-"]::mozselection,
  code[class*="language-"]::mozselection {
    text-shadow: none;
    background: ${props => props.theme.color.code.selectedColor};
  }
  @media print {
    pre[class*="language-"],
    code[class*="language-"] {
      text-shadow: none;
    }
  }
  pre[class*="language-"] {
    padding: 1.5rem;
    overflow: auto;
    background: ${props => props.theme.color.code.blockBackground};
  }
  :not(pre) > code[class*="language-"] {
    padding: .1em .3em;
    border-radius: .3em;
    color: ${props => props.theme.color.code.inlineCodeColor};
    background: ${props => props.theme.color.code.inlineCodeBackground};
  }
  /*********************************************************
  * Tokens
  */
  .namespace {
    opacity: .7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props => props.theme.color.code.commentColor};
  }
  .token.punctuation {
    color: ${props => props.theme.color.code.punctuationColor};
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${props => props.theme.color.code.propertyColor};
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${props => props.theme.color.code.selectorColor};
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${props => props.theme.color.code.operatorColor};
    background: ${props => props.theme.color.code.operatorBg};
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${props => props.theme.color.code.keywordColor};
  }
  .token.function {
    color: ${props => props.theme.color.code.functionColor};
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: ${props => props.theme.color.code.variableColor};
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  /*********************************************************
  * Line highlighting
  */
  pre[data-line] {
    position: relative;
  }
  pre[class*="language-"] > code[class*="language-"] {
    position: relative;
    z-index: 1;
  }
  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: ${props => props.theme.color.code.highlightBackground};
    box-shadow: inset 5px 0 0 ${props =>
      props.theme.color.code.highlightAccent};
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }
  
  div.gatsby-highlight {
    margin: 0;
    background-color: ${props => props.theme.color.surface}; 
    border-radius: 5px;
  }

  /* code blocks */
  @media ${props => props.theme.breakpoint.mobile} {
    div.gatsby-highlight {
      margin: 1rem -1rem; /* full screen */
    }

    pre[class*="language-"] {
      padding: 1.5rem;
    }
  }

  /* Latex color */
  .katex-html {
    color: ${props => props.theme.color.code.inlineCodeColor};
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
          h2: AnchorH2,
          h3: H3,
          p: P,
          pre: Pre,
          blockquote: Blockquote,
        }}
      >
        <Nav tags={tags} showGradient hideSearchbar={false} />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer></Footer>
      </MDXProvider>
    </div>
  )
}
