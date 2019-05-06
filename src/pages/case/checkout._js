import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Container, Section } from "../../components/layout"

const Title = styled("h1")`f2 f1-l lh-title mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Content = styled("div")`f4 lh-copy`

const CaseCheckout = ({ children, pageContext, ...props }) => {
  // console.log(pageContext, props, pageContext.frontmatter.title)
  // const { title, description } = pageContext.frontmatter
  return (
    <Layout>
      <Section bg="gold" color="black-80">
        <Container>
          <Section.Title>Case study</Section.Title>
          <Title>Re-imagining the checkout</Title>
          <Subtitle>
            E-commerce solution using Web Payments for smooth checkout
            experience and Push Notifications to track changes to orders
          </Subtitle>
        </Container>
      </Section>
      <Section>
        <Container>
          <Section.Title>Web Payments</Section.Title>
          <Content>
            E-commerce solution using Web Payments for smooth checkout
            experience and Push Notifications to track changes to orders
          </Content>
        </Container>
      </Section>
      <Section bg="near-black" color="near-white">
        <Container>
          <Section.Title>Push Notifications</Section.Title>
          <Content>{children}</Content>
        </Container>
      </Section>
      <Section>
        <Container>
          <Section.Title>Performance</Section.Title>
          <Content>{children}</Content>
        </Container>
      </Section>
    </Layout>
  )
}

export default CaseCheckout
