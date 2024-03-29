import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* Reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}
*, *:before, *:after { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }
/* Base */
html,
body {
  height: 100%;
}

body {
  font: 16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #666;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 30px;
  letter-spacing: -1px;
  color: #222;
  font-weight: bold;
}

h2 {
  font: italic 19px/1.3em Georgia, serif;
  color: #bbb;
}

/* Typography */
/*Accent color*/
a,
#title,
#post-list h2:hover,
#post-list li:hover .dates,
#title:hover {
  text-decoration: none;
  color: #5badf0;
  color: #5694f1;
}

p a {
  color: #5694f1;
}

/*Transitions*/
a,
#post-nav a,
#post-list a {
  -webkit-transition: all 0.15s ease;
  -moz-transition: all 0.15s ease;
  -ms-transition: all 0.15s ease;
  -o-transition: all 0.15s ease;
  transition: all 0.15s ease;
}

ul,
ol {
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
ul {
  list-style-type: circle;
}
ol {
  list-style: decimal;
}
li {
  list-style-position: inside;
}

/* Line Height */
#post-body,
p {
  line-height: 1.7;
}

b,
strong {
  font-weight: 500;
  color: #1e2025;
}
em,
i {
  font-style: italic;
}

h3,
h4,
h5 {
  color: #333;
}

h3 {
  font-size: 20px;
  font-weight: 400;
}
h4 {
  font-size: 16px;
  font-weight: bold;
}
h5 {
  font-size: 15px;
  font-weight: bold;
}

h6 {
  font-size: 13px;
  font-weight: bold;
  color: #666;
  margin-bottom: 6px;
}

p.small {
  color: #bbb;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  text-align: center;
  margin-top: 20px;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #eee;
}

hr {
  display: block;
  border: none;
  height: 1px;
  margin: 40px auto;
  background: #eee;
}

span.code {
  font-family: Menlo, Monaco, Courier;
  background-color: #eee;
  font-size: 14px;
}

pre {
  font-family: Menlo, Monaco, Courier;
  white-space: pre-wrap;
  /*border: 1px solid #ddd;*/
  padding: 20px;
  background-color: #fdfdfd;
  /*font-size:14px;*/
  overflow: auto;
  border-radius: 3px;
  background: #272b2d;
  font-family: "Source Code Pro", Menlo, monospace;
  font-size: 13px;
  line-height: 1.5em;
  font-weight: 500;
  color: #d0d4d7;
}

code {
  font-family: Menlo, Monaco, Courier;
  // background-color:#EEE;
  font-size: 14px;
  padding: 4px;
  font-weight: 600;
}

table {
  width: 100%;
  margin: 40px 0;
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.5em;
}

th,
td {
  text-align: left;
  padding-right: 20px;
  vertical-align: top;
}

table td,
td {
  border-spacing: none;
  border-style: solid;
  padding: 10px 15px;
  border-width: 1px 0 0 0;
}

tr > td {
  border-top: 1px solid #eaeaea;
}

tr:nth-child(odd) > td {
  background: #fcfcfc;
}

thead th,
th {
  text-align: left;
  padding: 10px 15px;
  height: 20px;
  font-size: 13px;
  font-weight: bold;
  color: #444;
  border-bottom: 1px solid #dadadc;
  cursor: default;
  white-space: nowrap;
}

img {
  max-width: 100%;
  border-radius: 3px;
}

/* Icons */
@font-face {
  font-family: "icons";
  src: url("/static/fonts/icons.eot");
  src: url("/static/fonts/icons.eot#iefix") format("embedded-opentype"),
    url("/static/fonts/icons.woff") format("woff"),
    url("/static/fonts/icons.ttf") format("truetype"),
    url("/static/fonts/icons.svg#icons") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "icons";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
}

.icon-facebook:before {
  content: "\e802";
}
.icon-facebook-squared:before {
  content: "\e800";
}
.icon-twitter:before {
  content: "\e801";
}
.icon-twitter-1:before {
  content: "\e804";
}
.icon-facebook-circled:before {
  content: "\e805";
}
.icon-twitter-circled:before {
  content: "\e806";
}
.icon-facebook-rect:before {
  content: "\e803";
}

@font-face {
  font-family: "Mono Social Icons Font";
  src: url("/static/fonts/MonoSocialIconsFont-1.10.eot");
  src: url("/static/fonts/MonoSocialIconsFont-1.10.eot?#iefix")
      format("embedded-opentype"),
    url("/static/fonts/MonoSocialIconsFont-1.10.woff") format("woff"),
    url("/static/fonts/MonoSocialIconsFont-1.10.ttf") format("truetype"),
    url("/static/fonts/MonoSocialIconsFont-1.10.svg#MonoSocialIconsFont")
      format("svg");
  src: url("/static/fonts/MonoSocialIconsFont-1.10.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.symbol,
a.symbol:before {
  font-family: "Mono Social Icons Font";
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  -ms-text-rendering: optimizeLegibility;
  -o-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

/* Clearfix */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.hidden {
  display: none;
}

/* Spacing */
.post h1,
h3,
h4,
h5,
p,
.post-body ul,
ol,
pre {
  margin-bottom: 20px;
}

#wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px 100px 40px;

  &.home {
    max-width: 800px;
    margin: 0 auto;
    padding: 0px 40px 20px 40px;
  }
}

#title {
  display: inline-block;
  line-height: 100%;
  font-weight: 500;
  font-size: 19px;
  margin: 0;
  padding-bottom: 20px;
}

.description {
  float: right;
  font: italic 14px/1.4em Georgia, serif;
  color: #aaa;
}

.home {
  h1 {
    font-size: 30px;
    letter-spacing: -1px;
    color: #222;
    font-weight: bold;
  }

  h2 {
    font: italic 19px/1.3em Georgia, serif;
    color: #bbb;
  }
  #avatar {
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

/* Made with Cactus Badge */
#badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  height: 48px;
  width: 48px;
}

#footer {
  padding: 40px 0 0 0;
}
#sharing a.facebook {
  background: #4361b3;
}
#sharing a.twitter {
  background: #4fafed;
}

#sharing a {
  font-size: 20px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  margin-left: 2px;
}

/* Media Queries */
@media screen and (max-width: 540px) {
  #wrapper {
    padding: 20px 20px 20px 20px;
  }
  .post {
    margin: 40px 0;
  }

  #post-list,
  #archive-list {
    margin-top: 0;
  }
  #post-meta {
    margin-top: 60px;
  }

  #title {
    font-size: 17px;
  }
  #post-list .dates {
    display: none;
  }

  #post-list-footer {
    margin-top: 20px;
    padding-top: 40px;
  }

  h1 {
    font-size: 26px;
  }
  .post h2.headline {
    font-size: 13px;
  }
  .post h1 {
    font-size: 24px;
  }
  .post h2 {
    font-size: 20px;
  }
}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
