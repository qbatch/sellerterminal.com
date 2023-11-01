/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    robots: `index, follow`,
    title: `Seller Terminal - Your Amazon Reimubursemnets Case Advocate!`,
    description: `Join 1000+ sellers, brand owners, and warehouses who recovered their money with our reimbursement recovery services. Get your first $500 for free.`,
    keywords: `Amazon Seller Reimbursement Services, Automated Amazon Seller Reporting, FBA overcharged fees, Amazon FBA audit, FBA auditor, Amazon seller refunds, Lost inventory reimbursement`,
    siteUrl: `https://sellerterminal.com/`,
    httpEquiv: `en-us`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seller Terminal - Your Amazon Reimubursemnets Case Advocate!`,
        short_name: `Seller Terminal`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.png`,
        include_favicon: false
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/assets/images`,
      },
      __key: "img",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};
