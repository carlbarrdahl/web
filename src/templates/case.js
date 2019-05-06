import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Container, Section } from "../components/layout"

const Title = styled("h1")`f2 f1-l lh-title mt0 mb2`
const Subtitle = styled("h2")`f3 f2-l lh-copy fw4`
const Content = styled("div")`f4 lh-copy`

const WorkTemplate = ({ children, pageContext, ...props }) => {
  console.log(pageContext, props, pageContext.frontmatter.title)
  const { title, description } = pageContext.frontmatter
  return (
    <Layout>
      <Section bg="gold" color="black-80">
        <Container>
          <Section.Title>Case study</Section.Title>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </Container>
      </Section>
      <Section>
        <Container>
          <Content>{children}</Content>
        </Container>
      </Section>
    </Layout>
  )
}

export default WorkTemplate
