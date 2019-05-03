export default (props) => (
  <footer id='footer'>
    <div id='social'>
      <a className='symbol' href='https://facebook.com/' target="_blank">circlefacebook</a>
      <a className='symbol' href='https://tiwtter.com' target="_blank">circletwitterbird</a>
      <a className='symbol' href={props.author.github} target="_blank">circlegithubalt</a>
    </div>
    <p className='small'>© Copyright 2018 {props.author.name}</p>
    <p className='small'>
      Powered by
      <a href='https://nextjs.org/' target='_blank'>
      {' '}Next.js
      </a>
      {' '}&amp;
      <a href='https://www.netlify.com/' target='_blank'>
      {' '}Netlify
      </a>
      {' '}&amp;
      <a href='https://www.contentful.com/' target='_blank'>
      {' '}Contentful
      </a>
      {' '}&amp;
      <a href='https://github.com/digitalcraftsman/hugo-cactus-theme' target='_blank'>
      {' '}Cactus theme
      </a>
    </p>
  </footer>
)
