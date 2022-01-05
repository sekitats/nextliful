import Link from 'next/link';
import { format, parseISO } from 'date-fns'

export default function Post({ post }) {
  const tags = post.tags && post.tags.map((tag) => tag).join(", ")
  const date = format(parseISO(post.publishDate), "yyyy-MM-dd")
  return (
    <li key={post.id}>
      <Link
        as={`/posts/${post.slug}`}
        href={`/posts?slug=${post.slug}`}
      >
        <a>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <aside className="dates">
            <div>{tags}</div>
            <span>{date}</span>
          </aside>
        </a>
      </Link>
    </li>
  );
};
