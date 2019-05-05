import React from "react"
import { Link } from "gatsby"
import styled from "tachyons-components"

import Layout, { Container } from "../components/layout"
// import SEO from "../components/seo"
const Title = styled("h1")`f1 tc black-80 mb0`
const Description = styled("h2")`f4 normal tc ma0 i`

const WorkTemplate = ({ children, pageContext, ...props }) => {
  console.log(pageContext, props, pageContext.frontmatter.title)
  const { title, description } = pageContext.frontmatter
  return (
    <Layout>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <div className="f4 lh-copy">{children}</div>
      </Container>
    </Layout>
  )
}

export default WorkTemplate
