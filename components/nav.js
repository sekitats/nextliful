import Link from 'next/link'
import '../styles/style.scss'


const Nav = () => (
  <nav className='main-nav'>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
  </nav>
)

export default Nav
