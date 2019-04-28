import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "tachyons-components"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Image from "../../components/image"

const Heading = styled("h1")`f1 tc black-80 mb0`
const Description = styled("p")`tc ma0`
const Ul = styled("ul")`mt0`
const Li = styled("li")``
const Dl = styled("dl")`f6`
const Dt = styled("dt")`b ttu tracked`
const Dd = styled("dt")`mb3`

const WorkPage = () => (
  <Layout>
    <SEO title="Swisher" />
    <Heading>Swisher</Heading>
    <Description>
      Share your Swish payments with number and payment data encrypted
    </Description>

    <Dl>
      <Dt>Date</Dt>
      <Dd>2018 - current</Dd>
      <Dt>Client</Dt>
      <Dd>Swisher</Dd>
      <Dt>Responsibilities</Dt>
      <Dd>
        <Ul>
          <Li>Developement</Li>
          <Li>UX design</Li>
          <Li>Deployment</Li>
        </Ul>
      </Dd>
      <Dt>Technologies</Dt>
      <Dd>
        <Ul>
          <Li>React</Li>
          <Li>QR</Li>
          <Li>CryptoJS</Li>
          <Li>Firebase</Li>
        </Ul>
      </Dd>
      <Dt>Website</Dt>
      <Dd>
        <Link to="https://swisher-app.firebaseapp.com?utm_source=carlb">
          https://swisher-app.firebaseapp.com
        </Link>
      </Dd>
    </Dl>
    <SwisherImage />
  </Layout>
)

export const SwisherImage = () => (
  <StaticQuery
    query={graphql`
      query {
        fullImage: file(relativePath: { eq: "work/swisher/full.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.fullImage.childImageSharp.fluid} />}
  />
)

export default WorkPage
