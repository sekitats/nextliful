import Link from 'next/link'

export default () => (
  <div className='profile'>
    <section id='wrapper'>
      <header id='header'>
        <Link href='/about' prefetch>
          <a><img id='avatar' className='2x' src='/static/img/profile.png' /></a>
        </Link>
        <h1>Tatsuhiko Seki</h1>
        <h2>Programmer & Composer</h2>
      </header>
    </section>
  </div>
)
