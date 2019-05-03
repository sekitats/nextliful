import Link from 'next/link'

export default (props) => (
  <footer id='post-meta' className='clearfix'>
    <Link href='/about'>
      <a>
        <img className='avatar' src={props.author.image.fields.file.url} />
        <div>
          <span className='dark'>{props.author.name}</span>
          <span>{props.author.title}</span>
        </div>
      </a>
    </Link>
  </footer>
)
