import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  padding: 20px 20px 0;

  /*max-width: 600px;*/
  /*width:100%;*/
  background: #fff;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  text-align: right;
  /*position: fixed;*/
  z-index: 100;

  a {
    top: 8px;
    right: 6px;
    padding: 8px 12px;
    color: #5badf0;
    font-size: 13px;
    /*font-weight: bold;*/
    line-height: 1.35;
    border-radius: 3px;

    &.cta {
      background: #5badf0;
      color: #fff;
      margin-left: 12px;
    }
  }
`;

const Nav = ({ tag }) => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
  </Wrapper>
)

export default Nav
