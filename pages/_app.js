import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const res = await import (`../contentful/person.json`)
    return { pageProps, person: { author: res.default} }
  }
  render () {
    const { Component, pageProps, person } = this.props

    return (
      <Container>
        <Component {...pageProps} {...person} />
      </Container>
    )
  }
}
