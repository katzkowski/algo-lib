import React from "react"
import { Nav } from "./Nav"
import Footer from "./Footer"
import ContentWrapper from "./ContentWrapper"
import { MDXProvider } from "@mdx-js/react"
import { H1, H2, H3, P } from "./elements"

export default function PageWrapper({ children }) {
  return (
    <MDXProvider
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        p: P
      }}
    >
      <Nav />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer></Footer>
    </MDXProvider>
  )
}
