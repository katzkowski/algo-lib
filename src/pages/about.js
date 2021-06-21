import React from "react"
import { H1, P } from "../components/elements"
import PageWrapper from "../components/PageWrapper"

const About = () => {
  return (
    <PageWrapper>
      <H1>About</H1>
      <P>
        <b>algo-lib</b> is a project of two computer science students from the
        University of Bremen. It emerged from the idea to collect all algorithms
        encountered during the studies in one place.
      </P>
    </PageWrapper>
  )
}

export default About
