import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Section, Container } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WorkList from "../components/WorkList"
import ContactForm from "../components/ContactForm"

const Title = styled("h1")`f2 f1-l lh-title mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Hello = styled("div")`f5 ttu tracked mb4`
const P = styled("p")`f4`

const Block = styled("article")`w-third-l pv2 pr4-l`
Block.Title = styled("h2")`f3 fw6 mb0`
Block.Content = styled("p")`f4 lh-copy`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section bg="lightest-blue" color="navy">
      <Container>
        {/* <Hello>Hello, I'm Carl 👋</Hello> */}
        <Title>
          Increase your conversion and revenue with fast, reliable and engaging{" "}
          {/* I build fast, reliable &amp; engaging{" "} */}
          <Link className="link dark-blue  underline-hover" to="/services/pwa">
            web apps
          </Link>
        </Title>
        {/* <Title>Building fast, reliable & engaging web apps</Title> */}
        <Subtitle>
          Did you know <span className="b">53% of visitors</span> abandon mobile
          sites with longer than 3 seconds load time? Todays customers expect
          fast, reliable and engaging experiences.
          {/* Todays customers expect fast, mobile and ubiquitous web applications   */}
          {/* I use modern web technologies to create reponsive, offline-enabled and
          immersive experiences on the web.  */}
          {/* Progressive Web Applications
          combines the best of apps and web for fast, efficiant and
          offline-enabled experiences. */}
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
            <Block.Title>Responsive</Block.Title>
            <Block.Content>
              Looks great on all devices, mobile to desktop
            </Block.Content>
          </Block>
          <Block>
            <Block.Title>Offline</Block.Title>
            <Block.Content>
              Always available even if your connection isn't
            </Block.Content>
          </Block>
        </div>
        {/* <ul className="f4 lh-copy">
          <li>Increased your conversion and revenue</li>
          <li>More interactions from customers</li>
          <li>More engaging,d longer sessions and reduced bounce rate</li>
          <li>Works offline</li>
          <li>Improve load times</li>
          <li>Reach your customers with push notifications</li>
          <li>No need for app store</li>
          {/* <li>Access from homescreen</li>
          <li>Offline</li>
          <li>Push notifications</li>
          <li>Search engine optimized</li> 
        </ul> */}
      </Container>
    </Section>
    <Section id="case-studies">
      <Container>
        <Section.Title>Case studies</Section.Title>
        <Link to="#case-studies">
          e-commerce store with payment and push notifications
        </Link>
      </Container>
    </Section>
    <Section id="work">
      <Container>
        <Section.Title>Work</Section.Title>
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
        {/* <P>
          What can I help you with? Contact me today to ask about availability.
        </P> */}
        <ContactForm />
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
