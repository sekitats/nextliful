import Document, { Head, Main, NextScript } from 'next/document'
// import { CONFIG } from '../const'

export default class SiteDocument extends Document {
  render () {
    return (
      <html lang='ja' itemScope="itemscope" itemType="http://schema.org/Blog">
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='author' content="Tatsuhiko Seki" />
          <title>Higher Ground</title>
          <meta name='description' content="description" />
          {/* <meta name="keywords" content={CONFIG.KEYWORDS} /> */}
          {/* <meta property="og:title" content={title ? title : CONFIG.TITLE} /> */}
          {/* <meta property="og:description" content={preview} /> */}
          {/* <meta property="og:type" content={type} /> */}
          {/* <meta property="og:url" content="" /> */}
          <meta name='twitter:card' content='summary' />
          <meta itemProp='name' content='' />
          <meta itemProp='description' content='' />
          <meta itemProp='keywords' content='' />
          {/* <link rel="shortcut icon" href="favicon" /> */}
          <link rel='stylesheet' href='static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
