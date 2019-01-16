const path = require("path");

module.exports = {
  siteMetadata: {
    title: "JavaScript and Friends Conference",
    description: "Columbus Ohio JavaScript Conference",
    author: "JavaScript and Friends Conference (volunteers)"
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/layout.js")
        }
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-default-mdx-basic",
        short_name: "JavaScript and Friends Conference",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
