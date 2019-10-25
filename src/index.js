/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./layout"

const Page = props => {
  const { site } = useStaticQuery(siteQuery)

  if (props.path !== "/") {
    // append page title to title
  }
  let { title, description, siteUrl } = site.siteMetadata

  return (
    <>
      <Helmet>
        <html lang="en" />
        <link rel="icon" type="image/png" />
        <link rel="apple-touch-icon-precomposed" />
        <link rel="canonical" href={props.location.href} />
        <meta name="og:image" content={siteUrl} />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="Carl Barrdahl" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Layout {...props}>{props.children}</Layout>
    </>
  )
}

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
)

const siteQuery = graphql`
  query Site {
    site {
      siteMetadata {
        title
      }
    }
  }
`
