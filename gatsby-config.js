module.exports = {
    siteMetadata: {
      title: 'CodeRando',
      description: 'O melhor blog de programação do Rando'
    },
    plugins: [
      "gatsby-plugin-catch-links",
      "gatsby-transformer-remark",
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: `${__dirname}\\content\\posts`
        }
      }
    ]
}