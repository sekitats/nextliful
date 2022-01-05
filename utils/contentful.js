import { createClient, EntryFields, Entry, Asset, Sys } from "contentful";

const DEFAULT_ENTRIES_PARAMS = {
  content_type: 'blogPost'
};

const env = process.env.ENV || "development";

const config = {
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN || "",
};


export const client = createClient(config);

export async function getPosts() {
  const entries = await client.getEntries(DEFAULT_ENTRIES_PARAMS);

  return entries.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });
}

export async function getPost(id) {
  const entry = await client.getEntry(id);
  return entry.fields;
}

export async function getPostByPathName(path) {
  const entries = await client.getEntries({
    ...DEFAULT_ENTRIES_PARAMS,
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

export async function getPerson() {
  const entries = await client.getEntries({ content_type: 'person' })
  return entries.items[0].fields
}