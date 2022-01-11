import { createClient, EntryFields, Entry, Asset, Sys } from "contentful";

const env = process.env.ENV || "development";

const config = {
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN || "",
};


export const client = createClient(config);

export async function getPosts() {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });
}

export async function getPostsByTag(tag) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'metadata.tags.sys.id[all]': tag
  })
  return entries.items.map(item => {
    return {
      ...item.fields,
      id: item.sys.id,
    }
  })
}

export async function getPost(id) {
  const entry = await client.getEntry(id);
  return entry.fields;
}

export async function getPostByPathName(path) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': path,
  });
  return entries.items[0].fields;
}

export async function getAllPostPaths() {
  const items = await getPosts();
  return items.map(item => {
    return {
      params: {
        path: item.slug
      }
    }
  }) 
}

export async function getAllTagPaths() {
  const items = await getPosts()
  const tags = items.map(item => {
    if (item.tags === undefined) return []
    return item.tags
  }).flat()
  const uniqueTags = tags.filter((tag, i, self) => {
    return self.indexOf(tag) === i
  })

  const paths = uniqueTags.map(tag => {
    return {
      params: {
        id : encodeURI(tag).toLowerCase()
      }
    }
  })
  return paths
}

export async function getPerson() {
  const entries = await client.getEntries({ content_type: 'person' })
  return entries.items[0].fields
}