import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const P = styled("p")`lh-copy f4`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <Container>
        <Section.Title>Contact</Section.Title>
        <P>
          What can I help you with? Contact me today to ask about availability.
        </P>
        <ContactForm />
      </Container>
    </Section>
  </Layout>
)

export default ContactPage
