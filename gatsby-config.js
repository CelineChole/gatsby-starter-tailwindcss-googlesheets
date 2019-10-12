require("dotenv").config()

// Credentials when you deploy your site
const sheetCredentials = {
  client_email: process.env.GS_CLIENT_EMAIL || ``,
  private_key: process.env.GS_PRIVATE_KEY.replace(/\\n/g, '\n') || ``,
}

module.exports = {
  siteMetadata: {
    title: `gatsby-starter-tailwindcss-googlesheets`,
    description: `A starter to easily creates library from Google Sheets`,
    author: `Céline Cholé`,
  },
  plugins: [
    // Easily add Google Analytics to your site
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "enter your tracking id from Google analytics",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwindCSS-googlesheets`,
        short_name: `gatsby-starter-googlesheets`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // It handles PostCSS
    // To learn more, visit: https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    // Remove unused css from css/sass/less/stylus files and modules 
    // To learn more, visit: https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    // Turns any Google Sheets worksheet into a GraphQL type for build-time consumption
    // To learn more, visit: https://www.gatsbyjs.org/packages/gatsby-source-google-sheets/
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "13IimtmNvcrVqcvz8C2y-oxrBNRRvgityF1D9r70es1E",
        worksheetTitle: "Master",
        credentials: sheetCredentials,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
