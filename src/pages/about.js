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

export default AboutPage
