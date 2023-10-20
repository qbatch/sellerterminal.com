/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    robots: `index, follow`,
    title: `Hire Skilled Dedicated Developers | Qbatch`,
    description: `We are busy building empires for our dear clients globally. Hire our skilled software developers for error-free code, and on-time project delivery.`,
    keywords: `hire best dedicated developers, hire dedicated software development team, dedicated mobile app development team`,
    // siteUrl: `https://eclectic-palmier-c4e68a.netlify.app/`,
    siteUrl: `https://st-landingpage.com/`,
    httpEquiv: `en-us`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
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
          include: /images/,
        },
      },
    },
  ],
};
