const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})

const withImages = require('next-images')
module.exports = withImages()
