module.exports = {
  siteMetadata: {
    title: `Carl Barrdahl - Developer & UX - Gothenburg, Sweden`,
    description: `Carl Barrdahl - Developer & UX - Gothenburg, Sweden`,
    author: `@carlbarrdahl`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [ ".mdx", ".md" ],
        defaultLayouts: {
          // posts: require.resolve("./src/components/default-post-layout.js"),
          // default: require.resolve("./src/components/default-page-layout.js")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carl_b`,
        short_name: `carl_b`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131682053-1"
      }
    }
  ]
}
