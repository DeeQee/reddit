/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Barcadia",
    description: "A super-fast site using GatsbyJS",
    author: "Morgan Baker",
    twitterUsername: "deeqeevee",
    facebookUsername: "deeqeevee",
    instagramUsername: "deeqeevee",
    linkedinUsername: "morgan-baker-development",
    image: "/macbook-color.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "DeeQeeVee",
    developerUrl: "https://facebook.com/deeqeevee",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "qbp8s617ncwp",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "Zj2VTDu3shDGRS6MFlSJtxgzLJ30dQnNcg161UUT4Gc",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
