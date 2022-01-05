import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.footer`
display: flex;
font-size: 13px;
font-weight: bold;
line-height: 1.4;
border-top: 1px solid #eee;
padding-top: 40px;
margin-bottom: 40px;
padding-bottom: 40px;
margin-top: 40px;
color: #444;
border-bottom: 1px solid #eee;

div span {
  color: #aaa;
  font-weight: 500;
  display: block;
}

div span.dark {
  color: #1e2025;
}

div {
  margin: 0 25px 0 0;
  float: left;
}
img.avatar {
  height: 36px;
  width: 36px;
  float: left;
  border-radius: 50%;
  margin-top: 3px;
  margin-right: 20px;
  box-shadow: 0 0 0 3px #fff, 0 0 0 4px #eee;
}
`

export default ({ author }) => (
  <Wrapper>
    <Link href='/about'>
      <a>
        <img className='avatar' src={author.image.fields.file.url} />
        <div>
          <span className='dark'>{author.name}</span>
          <span>{author.title}</span>
        </div>
      </a>
    </Link>
  </Wrapper>
)
