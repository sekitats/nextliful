import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'
import SUMMARY_JSON from '../contentful/summary.json'
import '../styles/style.scss'

export default class IndexPage extends React.Component {
  renderPosts() {
    return (
      <ul id="post-list">
      {this.props.posts.map(post => {
        return (
          <li key={post.slug}>
            <Link as={`/post/${post.slug}`} href={`/post?slug=${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <aside className="dates">
                  <span>{moment(post.publishDate).format('MMM D YYYY')}</span>
                </aside>
              </a>
            </Link>
          </li>
        )
      })}
      </ul>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Nav />
        <main>
          <section id='wrapper'>
            <Header />
            {this.renderPosts()}
            <nav id='post-nav' />
            <Footer />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

IndexPage.getInitialProps = () => {
  return {
    posts: Object.keys(SUMMARY_JSON).map((slug) => {
      return SUMMARY_JSON[slug]
    })
  }
}