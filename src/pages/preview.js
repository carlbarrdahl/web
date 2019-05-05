import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const Title = styled("h1")`f2 f1-l lh-title mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Hello = styled("div")`f5 ttu tracked mb4`
const P = styled("p")`f4`

const Block = styled("article")`w-third-l pr4-l pv2`
Block.Title = styled("h2")`f3 fw6`
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
        <Link to="#case-studies" className="link">
          <Block className="hover-blue dark-blue">
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

const mapColor = ({ bg, color }) => `bg-${bg} ${color}`
const List = styled("div")`flex flex-wrap`
const Card = styled(Link)`
w-100 w-50-l pa4 link
${mapColor}
`
Card.Title = styled("h3")`f2 mb0 mt0`
Card.Description = styled("p")`f4 lh-copy normal measure`
const URL = styled("div")``

const WorkList = () => (
  <List>
    {works.map((work, i) => (
      <Card to={work.href} key={work.href} {...work}>
        <Card.Title>{work.title}</Card.Title>
        <Card.Description>{work.description}</Card.Description>
      </Card>
    ))}
  </List>
)

const works = [
  {
    title: "Swisher",
    description:
      "Linkable payments with encrypted details to protect your number and payment information",
    // "Share your Swish payments with number and payment data encrypted",
    bg: "near-white",
    color: "dark-gray",
    href: "/work/swisher",
    url: "https://swisher-app.firebaseapp.com"
  },
  {
    title: "b0tt0",
    description:
      "Order food and drinks for pickup with built-in queue management and push notifications to stay updated on order changes",
    // "e-commerce point of sale system for foodtrucks, bars and cafes",
    href: "/preview#projects",
    bg: "yellow",
    color: "dark-gray",
    url: "https://swisher-app.firebaseapp.com"
  },
  {
    title: "Pine Valley",
    description: "Pomodoro-style productivity game to help you stay focused",
    href: "/preview#projects",
    bg: "dark-green",
    color: "washed-green",
    url: "https://pakt-dev.firebaseapp.com"
  },
  {
    title: "Pakt",
    description:
      "Create and share challenges with your friends to increase accountability",
    // description: "Invite your friends to challenges and compete for rewards",
    href: "/preview#projects",
    bg: "navy",
    color: "lightest-blue",
    url: "https://pakt-dev.firebaseapp.com"
  }
]

export default IndexPage
