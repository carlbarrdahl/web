const proxy = require("http-proxy-middleware")

require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: "Carl Barrdahl",
    description: "javascript developer",
    siteUrl: "https://carlb.dev"
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-dev",
      options: { username: "carlbarrdahl" }
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: true,
        axeOptions: {}
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131682053-1"
      }
    }
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:34567",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    )
  }
}
