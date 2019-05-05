import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WorkList from "../components/WorkList"
import ContactForm from "../components/ContactForm"

const Title = styled("h1")`f2 f1-l lh-solid mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Hello = styled("div")`f5 mt4 ttu tracked`
const P = styled("p")`f4`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section bg="near-white">
      <Container>
        <Hello>Hello, I'm Carl 👋</Hello>
        <Title>
          Building fast, reliable &amp; engaging{" "}
          <Link className="link dark-blue  underline-hover" to="/services/pwa">
            web apps
          </Link>
        </Title>
        {/* <Title>Building fast, reliable & engaging web apps</Title> */}
        <Subtitle>
          Using modern web technologies to create reponsive, offline-enabled and
          immersive experiences on the web.
          {/* Building the products and services of tomorrow. Experience in building
          platforms for marketing campaigns and IoT, e-commerce, PWA apps,
          real-time games and more. */}
          {/* Wide range experience
          in working on innovative products ranging from IoT, e-commerce,
          realtime multiplayer games, personalized housing recommendations
          through machine learning and more. */}
        </Subtitle>
        {/* <small>
          What the heck is a{" "}
          <Link to="/services/pwa">progressive web app?</Link>
        </small> */}
        {/* <small>
          Did you know 53% of visits are abandonded if a mobile site takes
          longer than 3 seconds to load?<sup>[1]</sup>
        </small> */}
      </Container>
    </Section>
    <Section id="projects">
      <Container>
        <Section.Title>Projects</Section.Title>
        <WorkList />
      </Container>
    </Section>
    {/* <Section id="services">
      <Container>
        <Section.Title>Services</Section.Title>
        <p>Services I offer</p>
        <ul>
          <li>Fullstack development</li>
          <li>Progressive Web Apps</li>
          <li>Landing pages</li>
          <li>API integrations</li>
        </ul>
        <p>Preferred tools</p>
        <ul>
          <li>React (Gatsby)</li>
          <li>GraphQL (Apollo)</li>
          <li>Serverless</li>
          <li>Firebase</li>
        </ul>
      </Container>
    </Section> */}
    <Section id="contact">
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

export default IndexPage
