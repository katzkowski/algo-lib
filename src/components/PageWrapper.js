import React from "react";
import { Nav } from "./Nav";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";



export default function PageWrapper({ children }) {
  return (
    <div>
      <Nav />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer></Footer>
    </div>
  )
}