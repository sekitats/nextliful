import React from 'react'
import Head from 'next/head';

const Seo = (props) => {  
  return (
    <Head>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{props.post && props.post.title || props.author.name} | {props.author.title}</title>
      <meta name='author' content={props.author.name} />
      <meta name='description' content={props.post && props.post.description || props.author.title} />
      <meta name="keywords" content={props.post && props.post.tags} />
      <meta property="og:title" content={props.post && props.post.title || props.author.title} />
      <meta property="og:description" content={props.post && props.post.description || props.author.title} />
      <meta property="og:type" content={props.post ? 'blog' : 'website'} />
      <meta property="og:url" content={props.author.url || ''} />
      <meta name='twitter:card' content='summary' />
      <meta itemProp='name' content={props.post && props.post.title || props.author.title} />
      <meta itemProp='description' content={props.post && props.post.description || props.author.title} />
      <meta itemProp='keywords' content={props.post && props.post.tags} />
      <link rel="shortcut icon" href="favicon" />
    </Head>
  )
}

export default Seo