
import styled from 'styled-components';
import { format, parseISO } from "date-fns";
// import Seo from '../components/seo'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post';
import { getPerson, getPosts } from '../utils/contentful';

const Main = styled.main`
#post-list {
  margin-top: 40px;
  margin-bottom: 0;
}

#post-list li,
#archive-list li {
  border-top: 1px solid #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  list-style-type: none;
  margin-bottom: 0;
}

#post-list li:last-child {
  border-bottom: 1px solid #eee;
}

#post-list h2 {
  color: #333;
  display: block;
  font: bold 19px/1.7 "Helvetica Neue", helvetica, Arial, sans-serif;
}

#post-list p {
  font: normal 14px/1.5em "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #aaa;
  margin-top: 2px;
}

#post-list .dates {
  display: flex;
  justify-content: space-between;
  font: 300 14px/1 "Helvetica Neue", helvetica, Arial, sans-serif;
  color: #bbb;
}

#post-list-footer {
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 100px;
}

#post-list.archive.readmore h3 {
  font: 400 20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 30px;
}

#post-list.archive.readmore a {
  font: 400 16px/1.6 "Helvetica Neue", helvetica, Arial, sans-serif;
  color: #5694f1;
}

#post-list.archive.readmore a:hover {
  opacity: 0.8;
}

#post-list.archive.readmore .dates {
  font: 300 16px/1.6 "Helvetica Neue", helvetica, Arial, sans-serif;
}

#archive-link {
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 3px 10px 6px;
  box-shadow: 0 0 0 1px hsla(207, 83%, 80%, 1);
}

#archive-link:hover {
  background: #5694f1;
  color: #fff;
  box-shadow: 0 0 0 1px #5694f1;
}

#archive-link span {
  position: relative;
  top: 0;
  font-size: 17px;
}

`;

export default function PostIndex({ posts, author }) {
  return (
    <>
      <Nav />
      <Main>
        <section id='wrapper'>
           <Header author={author} />
           <ul id="post-list">
            {posts.map(post => {
              return !post.publishDate ? null : <Post key={post.id} post={post} />
            })}
           </ul>
           <nav id='post-nav' />
           <Footer author={author} />
         </section>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts();
  const author = await getPerson();
  const ordered = posts.sort((a, b) => parseISO(b.publishDate) - parseISO(a.publishDate))
  return {
    props: {
      posts: ordered,
      author
    }
  }
}
