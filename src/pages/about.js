import React from "react"
import { ExternalLink, H1, P, Ul } from "../components/elements"
import PageWrapper from "../components/PageWrapper"

const About = () => {
  return (
    <PageWrapper>
      <H1>About</H1>
      <P>
        <b>algo-lib</b> is an open library of algorithms with pseudo-code and
        explanations, which is maintained as a personal project by two computer
        science students. The project emerged from the idea to collect all
        algorithms, which we encounter during the studies, in one place. We then
        decided to publish our continuously updated library, so that others can
        benefit from our collection.
      </P>
      <P>
        On this page, algorithms are labeled with different tags, with can
        roughly be categorized into
      </P>
      <Ul>
        <li>
          <b>application</b> tags (e. g. <i>sorting</i>) and
        </li>
        <li>
          <b>type</b> tags (e. g. <i>divide-and-conquer</i>)
        </li>
      </Ul>
      <P>
        An algorithm can have multiple tags from both categories, but must have
        at least one tag from an arbitrary category.
      </P>
      <P>
        Every algorithm has its own page. The page layout is structured
        uniformly across all algorithms and consists of
      </P>
      <Ul>
        <li>the algorithms' tags (above the title)</li>
        <li>an introduction</li>
        <li>an implementation in pseudo code</li>
        <li>information about the usage of the algorithm</li>
        <li>time and space complexity</li>
      </Ul>
      <P>
        If you encounter any issues or typos, you can contact us via e-mail or
        create an issue in out GitHub repository. We also gladly appreciate any
        kind of feedback or suggestions. Please keep in mind that the intention
        of this page is to present a summary of each algorithm, rather than a
        detailed analysis or beginner-friendly explanation.
      </P>
      <P>
        This website was created using the JavaScript frameworks{" "}
        <ExternalLink tabIndex="0" href="https://www.gatsbyjs.com/">
          Gatsby
        </ExternalLink>
        ,{" "}
        <ExternalLink tabIndex="0" href="https://reactjs.org/">
          React
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink tabIndex="0" href="https://styled-components.com/">
          Styled Components
        </ExternalLink>
        .
      </P>
    </PageWrapper>
  )
}

export default About
