import Link from 'next/link'

export default () => (
  <footer id='post-meta' className='clearfix'>
    <Link href='/about'>
      <a>
        <img className='avatar' src='/static/img/profile.png' />
        <div>
          <span className='dark'>Tatsuhiko Seki</span>
          <span>Programmer & Composer</span>
        </div>
      </a>
    </Link>
  </footer>
)
