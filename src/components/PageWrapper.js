import { MDXProvider } from "@mdx-js/react"
import React from "react"
import ContentWrapper from "./ContentWrapper"
import { H1, H2, H3, P, Pre } from "./elements"
import Footer from "./Footer"
import { Nav } from "./Nav"

export default function PageWrapper({ children, tags }) {
  return (
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
  )
}
