
import styled from 'styled-components';
import { format, parseISO } from "date-fns";
// import Seo from '../components/seo'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Post from '../../components/Post';
import { Main } from '../'
import { getPerson, getAllTagPaths, getPostsByTag } from '../../utils/contentful';

const Posts = ({ posts }) => (
  <ul id="post-list">
    {posts.map(post => {
      return !post.publishDate ? null : <Post key={post.id} post={post} />
    })}
  </ul>
)

export default function PostIndex({ tag, posts, author }) {
  return (
    <>
      <Nav />
      <Main>
        <section id='wrapper'>
           <Header author={author} tag={tag} />
           <Posts posts={posts} />
           <Footer author={author} />
         </section>
      </Main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllTagPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPostsByTag(params.id);
  const author = await getPerson();
  return {
    props: {
      tag: posts[0]?.tags || null,
      posts,
      author
    }
  }
}
