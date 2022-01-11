import Link from "next/link";
import { format, parseISO } from "date-fns";

const TagLink = ({ tags }) => {
  let wrapper
  if (!Array.isArray(tags)) return "";
    wrapper = tags.map((tag, i) => {
      let comma = ", ";
      if (i === tags.length - 1) {
        comma = "";
      }
      return (
        <div key={tag}>
          <Link href={`/tag/${tag.toLowerCase()}`}>
            <a>#{tag}</a>
          </Link>
          {comma}
        </div>
      );
    });
  return (
    <div className="tags">
      {wrapper}
    </div>
  )
};

export default function Post({ post }) {
  const date = format(parseISO(post.publishDate), "yyyy-MM-dd");
  return (
    <li key={post.id}>
      <h2>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <p>{post.description}</p>
      <aside className="footer">
        <TagLink tags={post.tags} />
        <span className="dates">{date}</span>
      </aside>
    </li>
  );
}
