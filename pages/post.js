import React from 'react'
import moment from 'moment'
import Seo from '../components/seo'
import Nav from '../components/nav'
import PostMeta from '../components/postMeta'
import Footer from '../components/footer'

export default class PostPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Seo {...this.props} />
        <main>
          <Nav />
          <section id="wrapper">
            <article className="post">
              <header>
                <h1>{this.props.post.title}</h1>
                <aside className="headline">
                  <span>
                    {moment(this.props.post.publishDate).format('MMM D YYYY')}
                  </span>
                </aside>
              </header>
              <section id="post-body">
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.post.body }}
                />
              </section>
            </article>
            <PostMeta author={this.props.author} />
            <Footer author={this.props.author} />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

PostPage.getInitialProps = async ({ query }) => {
  const res = await import(`../contentful/${query.slug}`)
  return { post: res }
}
