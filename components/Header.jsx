import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
#header {
  text-align: center;
  position: relative;

  #avatar {
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  h1 {
    font-weight: 400;
    letter-spacing: 0px;
    font-size: 20px;
    color: #222;
  }
  
  h2 {
    font-size: 20px;
    font-weight: 300;
    color: #aaa;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
  }
}
`

export default (props) => (
  <Wrapper>
    <section>
      <header id='header'>
        <Link href='/about' prefetch>
          <a><img id='avatar' className='2x' src={props.author.image.fields.file.url} /></a>
        </Link>
        <h1>{props.author.name}</h1>
        <h2>{props.author.title}</h2>
      </header>
    </section>
  </Wrapper>
)
