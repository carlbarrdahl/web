import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import WorkList from "../components/WorkList"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const Title = styled("h1")`f2 f1-l lh-title mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Hello = styled("div")`f5 ttu tracked mb4`
const P = styled("p")`f4`

const Block = styled("article")`w-third-l pr4-l`
Block.Title = styled("h2")`f3 fw6 mt0`
Block.Content = styled("p")`f4 lh-copy`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section bg="lightest-blue" color="navy">
      <Container>
        <Section.Title>Carl Barrdahl • web developer</Section.Title>
        <Title>
          Increase your conversion and revenue with fast, reliable and engaging{" "}
          <Link className="link dark-blue  underline-hover" to="/services/pwa">
            web apps
          </Link>
        </Title>
        <Subtitle>
          Did you know <span className="b">53% of visitors</span> abandon mobile
          sites with longer than 3 seconds load time? Todays customers expect
          fast, reliable and engaging experiences.
        </Subtitle>
      </Container>
    </Section>
    <Section id="pwa">
      <Container>
        <Section.Title>Why progressive web apps?</Section.Title>
        <div className="flex flex-wrap">
          <Block>
            <Block.Title>Engaging</Block.Title>
            <Block.Content>
              Discoverable, linkable and installable with push notifications
            </Block.Content>
          </Block>
          <Block>
            <Block.Title>Responsive & progressive</Block.Title>
            <Block.Content>
              Works for every user on every device - mobile to desktop
            </Block.Content>
          </Block>
          <Block>
            <Block.Title>Offline</Block.Title>
            <Block.Content>
              Always available even if your connection isn't
            </Block.Content>
          </Block>
        </div>
      </Container>
    </Section>
    <Section id="case-studies" bg="near-white">
      <Container>
        <Section.Title>Case studies</Section.Title>
        <Link to="/case/checkout" className="link hover-blue dark-blue">
          <Block>
            <Block.Title>Re-imagining the checkout</Block.Title>
            <Block.Content>
              Store using PaymentRequestAPI and Push Notifications to track
              orders
            </Block.Content>
          </Block>
        </Link>
      </Container>
    </Section>
    <Section id="projects">
      <Container>
        <Section.Title>Projects</Section.Title>
        <WorkList />
      </Container>
    </Section>
    <Section id="contact">
      <Container>
        <Section.Title>Contact</Section.Title>
        <ContactForm />
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
