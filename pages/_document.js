import Document, { Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render () {
    return (
      <html lang='ja' itemScope="itemscope" itemType="http://schema.org/Blog">
        <Head>
          <link rel='stylesheet' href='/static/style.css' />
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
