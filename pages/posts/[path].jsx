import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { format, parseISO } from "date-fns";
import Nav from '../../components/Nav'
import PostMeta from '../../components/PostMeta'
import Footer from '../../components/Footer'
import {
  getPostByPathName,
  getAllPostPaths,
  getPosts,
  getPerson,
} from "../../utils/contentful";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark-dimmed.css";

marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

const Container = styled.article`
/* Post Page */
.post {
  margin: 80px 0 0 0;
}

header {
  text-align: center;
}
h1 {
  margin-bottom: 40px;
  color: #222;
  font: 300 32px/1.4em "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h2 {
  margin-bottom: 40px;
  font: 300 24px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #111;
}

h2.subtitle {
  font: italic 19px/1.3em Georgia, serif;
  color: #bbb;
}

.headline {
  /*font: italic 22px/1.3em Georgia,serif;*/
  font: normal 13px/1.5em "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: -5px 0 40px 0;
  color: #b2b9be;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  /*margin-top: 15px;*/
  display: inline-block;
}

#sharing {
  float: right;
  margin: -2px;
}

#sharing a {
  font-size: 20px;
  font-size: 23px;
  margin-left: 1px;
  margin-top: 4px;
  color: #d4d4d4;
  display: inline-block;
  vertical-align: middle;
}

#sharing a:hover {
  /*color: #444;*/
  opacity: 0.8;
}

/* Post Navigation */
#post-nav {
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  margin-top: 20px;
}

#post-nav span {
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -ms-transition: all 0.1s linear;
  -o-transition: all 0.1s linear;
  transition: all 0.1s linear;
  position: relative;
}

#post-nav span.prev {
  float: left;
}

#post-nav span.next {
  float: right;
}

#post-nav span .arrow {
  position: relative;
  padding: 1px;
}

#post-nav span.prev:hover .arrow {
  left: -4px;
}

#post-nav span.next:hover .arrow {
  right: -4px;
}

#post-nav span.prev:hover {
  left: -3px;
}

#post-nav span.next:hover {
  right: -3px;
}
`

export default function Post(props) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {
        isMounted && (
          <>
            {/* <Seo {...props} /> */}
            <Nav />
            <section id="wrapper">
              <Container className="post">
                <header>
                  <h1>{props.post.title}</h1>
                  <aside className="headline">
                    <span>
                      {format(parseISO(props.post.publishDate), "yyyy-MM-dd")}
                    </span>
                  </aside>
                </header>
                <section id="post-body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(props.post.body),
                    }}
                  />
                </section>
              </Container>
              <PostMeta author={props.author} />
              <Footer author={props.author} />
            </section>
          </>
        )
      }
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostByPathName(params.path);
  const author = await getPerson()
  return {
    props: {
      post: data,
      author
    },
  };
}
