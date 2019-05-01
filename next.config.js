const withSass = require('@zeit/next-sass')
const merge = require('webpack-merge')
const SUMMARY = require('./contentful/summary.json')

module.exports = Object.assign({}, withSass({
  cssModules: true
}), {
  devtool: 'inline-source-map',

  exportPathMap: () => {
    const pathMap = Object.keys(SUMMARY).reduce((acc, slug) => {
      acc[`/post/${slug}`] = { page: '/post', query: { slug: slug }} 
      return acc
    }, {})    

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...pathMap
    }
  }
})
