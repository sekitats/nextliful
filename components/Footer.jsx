import styled from "styled-components";

const Wrapper = styled.footer`
#social {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a.symbol {
  color: #cdd4da;
  font-size: 2rem;
  text-decoration: none;
  margin-right: 0.3rem;
}

a.symbol:hover {
  color: #bcd4da;
}
`;

export default ({ author }) => (
  <Wrapper id='footer'>
    <div id="social">
      <a className="symbol" href="https://facebook.com/" target="_blank">
        circlefacebook
      </a>
      <a className="symbol" href="https://tiwtter.com" target="_blank">
        circletwitterbird
      </a>
      <a className="symbol" href={author.github} target="_blank">
        circlegithubalt
      </a>
    </div>
    <p className="small">© Copyright 2018 {author.name}</p>
    <p className="small">
      Powered by
      <a href="https://nextjs.org/" target="_blank">
        {" "}
        Next.js
      </a>{" "}
      &amp;
      <a href="https://www.netlify.com/" target="_blank">
        {" "}
        Netlify
      </a>{" "}
      &amp;
      <a href="https://www.contentful.com/" target="_blank">
        {" "}
        Contentful
      </a>{" "}
      &amp;
      <a
        href="https://github.com/digitalcraftsman/hugo-cactus-theme"
        target="_blank"
      >
        {" "}
        Cactus theme
      </a>
    </p>
  </Wrapper>
);
