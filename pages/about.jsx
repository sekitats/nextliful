import React, { useState, useEffect } from 'react'
// import Seo from '../components/seo'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { marked } from "marked";
import { getPerson } from '../utils/contentful'
import styled from 'styled-components';

const Wrapper = styled.section`
#profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px 100px 40px;
}
h2 {
  margin-top: 60px;
  margin-bottom: 40px;
  font: 300 24px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #111;
}
h3 {
  margin-top: 40px;
  margin-bottom: 40px;
}
ul li {
  margin-bottom: 12px;
}
`;

const About = props => {
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
        <Wrapper id="wrapper">
          <Header author={props.author} />
          <div dangerouslySetInnerHTML={{ __html: marked.parse(props.author.shortBio) }} />
          <hr />
          <Footer author={props.author} />
        </Wrapper>
        </>
      )
    }
    </>
  )
}

export default About

export async function getStaticProps() {
  const author = await getPerson();
  return {
    props: {
      author
    },
  };
}
