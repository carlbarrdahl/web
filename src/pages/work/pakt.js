import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "tachyons-components"

import Layout, { Container } from "../../components/layout"
// import SEO from "../components/seo"
const Title = styled("h1")`f1 tc black-80 mb0`
const Description = styled("h2")`f4 normal tc ma0 i`
const P = styled("p")`lh-copy`

const WorkTemplate = ({ children, pageContext, ...props }) => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query {
            create: file(relativePath: { eq: "work/pakt/create.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            view: file(relativePath: { eq: "work/pakt/view.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sign: file(relativePath: { eq: "work/pakt/sign.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            list: file(relativePath: { eq: "work/pakt/list.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            webhooks: file(relativePath: { eq: "work/pakt/webhooks.png" }) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Container>
            <Title>Pakt</Title>
            <Description>
              Create, manage and sign digital contracts using the mobile app
              BankID
            </Description>
            <div className="f4 lh-copy">
              <P>
                Pakt is a platform where users can create and share contracts.
                Documents are uniquely identified with a hash of its content to
                ensure everyone signs the same copy and no tampering is done.
                Signing and verification of users identity is done with BankID
                which is the leading electronic identification app in Sweden.
              </P>
              <P>
                Other services can easily be integrated by specifying webhooks
                that gets triggered when changes occur in the system.
              </P>
              <P>
                Future improvements could include adding Swish (similar to
                BankID but for sms payments) to add costs to creating documents
                or signatures. Users could also be notified by sms when
                contracts are assigned or new signatures created to connected
                contract.
              </P>
              <P>
                Some documents might be sensitive to store on central servers.
                In that case something like{" "}
                <a href="https://ipfs.io" target="_blank">
                  ipfs
                </a>{" "}
                could be used to store the documents and then secure them with
                smart contracts on a blockchain,{" "}
                <a href="https://ethereum.org" target="_blank">
                  Ethereum
                </a>
                for instance.
              </P>
              <P>
                <Img fluid={data.create.childImageSharp.fluid} />
                Contracts are easily created by dragging a document to upload
                (or browsing) and filling out the details. Start and end date
                for contract validity can be set and participants can be added
                by entering their email.
              </P>
              <P>
                <Img fluid={data.view.childImageSharp.fluid} />
                Documents are embedded to easily be read without need of
                downloading. Future improvements can include templates to
                dynamically generate documents based on data.
              </P>
              <P>
                <Img fluid={data.sign.childImageSharp.fluid} />
                Sign contract by entering your SSN and open app on mobile. QR
                code can be added for a more secure (and convenient) signing
                experience.
              </P>
              <P>
                <Img fluid={data.list.childImageSharp.fluid} />
                All users uploaded and signed contracts are listed.
              </P>
              <P>
                <Img fluid={data.webhooks.childImageSharp.fluid} />
              </P>
              Contract in screenshots from https://plainfreelancecontract.com/
            </div>
          </Container>
        )}
      />
    </Layout>
  )
}

export default WorkTemplate

// ---
// title: Pakt
// description: Create, manage and sign digital contracts using the mobile app BankID
// ---
