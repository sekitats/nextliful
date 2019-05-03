import Link from 'next/link'

export default (props) => (
  <div className='profile'>
    <section id='wrapper'>
      <header id='header'>
        <Link href='/about' prefetch>
          <a><img id='avatar' className='2x' src={props.author.image.fields.file.url} /></a>
        </Link>
        <h1>{props.author.name}</h1>
        <h2>{props.author.title}</h2>
      </header>
    </section>
  </div>
)
