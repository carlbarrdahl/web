import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "tachyons-components"

import SEO from "../../components/seo"
import Layout, { Container } from "../../components/layout"
import Image from "../../components/image"

const Heading = styled("h1")`f1 tc black-80 mb0`
const Description = styled("p")`tc ma0`
const Ul = styled("ul")`mt0`
const Li = styled("li")``
const Dl = styled("dl")`f6`
const Dt = styled("dt")`b ttu tracked`
const Dd = styled("dt")`mb3`
const P = styled("p")`f4 lh-copy`
const WorkPage = () => (
  <Layout>
    <Container>
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
      <P>
        Light-weight progressive webapp that lets you generate a Swish (swedish
        sms payment app) QR code. This makes payments easier as you don’t have
        to type or browse phone numbers. Pretty useful when splitting bills
        among a bunch of people.
      </P>
      <P>
        Enter your phone number, the amount and an optional message and a QR
        code is generated to be scanned from the Swish app.
      </P>

      <P>
        Sensitive data is encrypted in the URL using AES with an optional key.
        No data is sent to any server.
      </P>
      <SwisherImage />
    </Container>
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
