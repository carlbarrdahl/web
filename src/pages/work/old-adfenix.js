import React from "react"
import styled from "tachyons-components"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Image from "../../components/image"

const Title = styled("h1")`f1 tc black-80 mb0`
const Description = styled("h2")`f4 normal tc ma0 i`
const Ul = styled("ul")`mt0`
const Li = styled("li")``
const Dl = styled("dl")`f6`
const Dt = styled("dt")`b ttu tracked`
const Dd = styled("dt")`mb3`

const Heading = styled("h3")`f3 black-80`
const P = styled("p")`lh-copy f4`
const WorkPage = () => (
  <Layout>
    <SEO title="Adfenix" />
    <Title>Adfenix</Title>
    <Description>
      Housing recommendations powered by machine learning
    </Description>

    <Dl>
      <Dt>Date</Dt>
      <Dd>2018 - current</Dd>
      <Dt>Client</Dt>
      <Dd>Adfenix</Dd>
      <Dt>Graphic design</Dt>
      <Dd>Carl-Robin Kylander</Dd>
      <Dt>UX</Dt>
      <Dd>Hannes Winbäck</Dd>
      <Dt>Responsibilities</Dt>
      <Dd>
        <Ul>
          <Li>Frontend developement</Li>
          <Li>Deployment</Li>
        </Ul>
      </Dd>
      <Dt>Technologies</Dt>
      <Dd>
        <Ul>
          <Li>React</Li>
          <Li>GraphQL</Li>
          <Li>BuildKite</Li>
          <Li>Amazon Web Services</Li>
        </Ul>
      </Dd>
    </Dl>

    <Heading>Brand new frontend & deployment pipeline</Heading>
    <ul>
      <li>
        created frontend architecture (react, nextjs, graphql, apollo,
        buildkite, AWS S3, responsive for mobile/tablet/desktop)
      </li>
      <li>
        order campaign wizard with interactive preview of posts for multiple
        platforms (fb, ig, twitter)
      </li>
      <li>statistics page with charts detailing campaign performance</li>
      <li>listings page to display property details, status and actions</li>
      <li>embeddable widget for customer interaction similar to intercom</li>
      <li>
        embeddable script that loads additional scripts based on customer
        configuration
      </li>
    </ul>
    <P>
      A new frontend was built from scratch using React and GraphQL as data
      layer. To ensure high reliability BuildKite was used to run tests ahead of
      deployments to Amazon Web Services (S3)
    </P>
    <Heading>Embeddable script & widget</Heading>
    <P>
      Script with minimal overhead that loads additional scripts based on
      customer configuration. To keep file size footprint as low as possible we
      used{" "}
      <a href="https://preactjs.com/" target="_blank">
        Preact
      </a>{" "}
      which is a 3kB alternative to React using the same API.
    </P>
    <Heading>Analytics dashboard</Heading>
    <P>
      Dashboard so customers can view how their campaigns are performing. To
      display the data in a way that works well for both mobile devices and
      looks good on print-out we used{" "}
      <a href="https://nivo.rocks" target="_blank">
        Nivo charts
      </a>
    </P>

    <Heading>Campaign wizard</Heading>
    <P>
      Customers need to be able to update and preview what their content will
      look like when published.
    </P>
    <Heading>Search & filter properties</Heading>
    <P>In order for customers to create new campaigns...</P>
  </Layout>
)

export default WorkPage
