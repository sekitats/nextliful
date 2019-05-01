import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
  return (
    <div>
    <Nav />
    <section id='wrapper'>
      <Header />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam earum dolorum! Sed, perspiciatis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <hr />
      <h3 id='lorem-ipsum-dolor'>Lorem ipsum dolor.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dicta corporis ad inventore itaque impedit dolor atque amet exercitationem! Veniam qui voluptas maiores vel laudantium necessitatibus, velit ducimus! Iste hic facere, accusamus fugiat enim facilis.</p>
      <Footer />
    </section>
  </div>
  )
}

export default About
