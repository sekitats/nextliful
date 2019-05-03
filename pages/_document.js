import Document, { Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render () {
    return (
      <html lang='ja' itemScope="itemscope" itemType="http://schema.org/Blog">
        <link rel='stylesheet' href='static/style.css' />
        <Main />
        <NextScript />
      </html>
    )
  }
}
