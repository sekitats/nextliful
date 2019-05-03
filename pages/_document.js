import Document, { Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render () {
    return (
      <html lang='ja' itemScope="itemscope" itemType="http://schema.org/Blog">
        <Main />
        <NextScript />
      </html>
    )
  }
}
