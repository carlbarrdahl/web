import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const P = styled("p")`lh-copy f4`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <Container>
        <Section.Title>About</Section.Title>
        <P>About me</P>
      </Container>
    </Section>
  </Layout>
)

/* 



Fullstack js developer for freelancing (remote)

Many years experience in building web apps, dashboards, real-time games, bots, e-commerce and more.
Worked with AWS and glcoud.

Specialize in Progressive Web Apps but open to other things if the project is right.

Current preferred tools & frameworks: React / Gatsby, GraphQL, Serverless

https://carlb.dev



7 years experience in 


working on innovative products ranging from IoT, e-commerce, realtime multiplayer games


*/

export default AboutPage
