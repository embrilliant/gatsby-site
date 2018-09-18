module.exports = {
  siteMetadata: {
    title: 'Emily - JavaScript, ReactJS, Frontend',
  },
  plugins: [
	'gatsby-plugin-react-helmet',
	'gatsby-plugin-sass',
	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }
  ]
}
