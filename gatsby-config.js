const siteMetadata = {
  robots: `index, follow`,
  title: `Seller Terminal - Your Amazon Reimubursemnets Case Advocate!`,
  description: `Join 1000+ sellers, brand owners, and warehouses who recovered their money with our reimbursement recovery services. Get your first $500 for free.`,
  keywords: `Amazon Seller Reimbursement Services, Automated Amazon Seller Reporting, FBA overcharged fees, Amazon FBA audit, FBA auditor, Amazon seller refunds, Lost inventory reimbursement`,
  siteUrl: `https://sellerterminal.com/`,
  httpEquiv: `en-us`,
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/svgs`,
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-offline`,
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('cssnano')({
            preset: 'default',
          }),
        ],
      },
    },
    
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
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${siteMetadata.siteUrl}`,
        sitemap: `${siteMetadata.siteUrl}sitemap-index.xml`,
        policy: [
          { userAgent: "*", disallow: ["/cgi-bin/", "/wp-admin/"] },
          { userAgent: "Googlebot", allow: "/" },
          { userAgent: "googlebot-image", allow: "/" },
          { userAgent: "googlebot-mobile", allow: "/" },
          { userAgent: "Googlebot-News", allow: "/" },
          { userAgent: "Googlebot-Video/1.0", allow: "/" },
          { userAgent: "APIs-Google", allow: "/" },
          { userAgent: "Googlebot-Image/1.0", allow: "/" },
          { userAgent: "MSNBot", disallow: "" },
          { userAgent: "Slurp", disallow: "" },
          { userAgent: "Teoma", disallow: "" },
          { userAgent: "Gigabot", disallow: "" },
          { userAgent: "Robozilla", disallow: "" },
          { userAgent: "Nutch", disallow: "" },
          { userAgent: "ia_archiver", disallow: "" },
          { userAgent: "baiduspider", disallow: "" },
          { userAgent: "naverbot", disallow: "" },
          { userAgent: "yeti", disallow: "" },
          { userAgent: "yahoo-mmcrawler", disallow: "" },
          { userAgent: "psbot", disallow: "" },
          { userAgent: "yahoo-blogs/v3.9", disallow: "" },
        ],
      },
    },
  ],
}
