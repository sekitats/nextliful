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
      <a className="symbol" href={author.twitter} target="_blank">
        circletwitterbird
      </a>
      <a className="symbol" href={author.youtube} target="_blank">
        circleyoutube
      </a>
      <a className="symbol" href={author.github} target="_blank">
        circlegithubalt
      </a>
    </div>
    <p className="small">© Copyright 2018 {author.name}</p>
    <p className="small">
      Powered by
      <a href="https://github.com/osekiharn/Nextliful" target="_blank">
        {" "}
        Nextliful
      </a>.
    </p>
  </Wrapper>
);
