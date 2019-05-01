import React from 'react'
import moment from 'moment'
import Nav from '../components/nav'
import PostMeta from '../components/postMeta'
import Footer from '../components/footer'
import '../styles/style.scss'

export default class PostPage extends React.Component {
  render() {    
    const { post } = this.props
    return (
      <main>
        <Nav />
        <section id="wrapper">
          <article className="post">
            <header>
              <h1>{post.title}</h1>
              <aside className="headline">
                <span>{moment(post.publishDate).format('MMM D YYYY')}</span>
              </aside>
            </header>
            <section id='post-body'>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </section>
          </article>
          <PostMeta />
          <Footer />
        </section>
      </main>
    )
  }
}

PostPage.getInitialProps = async ({query}) => {
  const res = await import (`../contentful/${query.slug}`)
  return { post: res }
}