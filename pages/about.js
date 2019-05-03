import React from 'react'
import Seo from '../components/seo'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <React.Fragment>
      <Seo {...props} />
      <Nav />
      <section id='wrapper'>
        <Header author={props.author} />
        <p>{props.author.shortBio}</p>
        <hr />
        {/* <h3 id='lorem-ipsum-dolor'>Lorem ipsum dolor.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dicta corporis ad inventore itaque impedit dolor atque amet exercitationem! Veniam qui voluptas maiores vel laudantium necessitatibus, velit ducimus! Iste hic facere, accusamus fugiat enim facilis.</p> */}
        <Footer author={props.author} />
      </section>
    </React.Fragment>
  )
}

export default About
