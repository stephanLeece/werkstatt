const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-root-import",
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.spaceId,
    //     accessToken: process.env.accessToken
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/favIcons/favicon-32x32.png"
      }
    }
  ]
};
