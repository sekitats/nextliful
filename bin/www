#!/usr/bin/env node

require('dotenv').config()
const fs = require('fs')
const path =require('path')
const mkdirp = require('mkdirp').sync
const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
})
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-katex'), {
    'throwOnError': false, 'errorColor': ' #cc0000'
  })
const { createClient } = require('contentful')

const CONTENT = {
  DIR: 'contentful',
  SUMMARY: 'summary',
  PERSON: 'person'
}

const types = [
  'person',
  'blogPost'
]

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN
})

const getcontent = async () => {
  for (const type of types) {

    const entries = await client.getEntries({
      content_type: type
    })

    if (entries.total === 1 && type === 'person') {
      const { fields } = entries.items[0]

      fs.writeFileSync(
        path.join(__dirname, '../', CONTENT.DIR, `/${type}.json`),
        JSON.stringify(fields, null, 2), 'utf8'
      )
    }

    if (type === 'blogPost') {

      entries.items.forEach((item) => {
        // 記事を json 化
        fs.writeFileSync(
          path.join(__dirname, '../', CONTENT.DIR, `/${item.fields.slug}.json`),
          JSON.stringify(Object.assign({}, item.fields, {
            body: md.render(item.fields.body)
          }), null, 2), 'utf8'        )
      })
        
      const map = entries.items.reduce((acc, entry, index) => {
        const { fields: { title, slug, description, publishDate, tags } } = entry
        acc[slug] = { title, slug, description, publishDate, tags }
        return acc
      }, {})
      
      // index用のmap
      fs.writeFileSync(
        path.join(__dirname, '../', CONTENT.DIR, `/${CONTENT.SUMMARY}.json`),
        JSON.stringify(map, null, 2), 'utf8'
      )
    }
  }
}

if (process.argv[2] === 'install') {
  mkdirp(CONTENT.DIR)
  getcontent()
}
