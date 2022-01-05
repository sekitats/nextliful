require('dotenv').config();

module.exports = {
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    NEXT_PUBLIC_CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
  },
}
