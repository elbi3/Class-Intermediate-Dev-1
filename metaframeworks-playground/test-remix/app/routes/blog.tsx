import { Link } from "react-router";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function loader() {
  const postsDir = path.join(process.cwd(), "app/posts");
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(postsDir, filename),
      "utf-8"
    );

    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
    };
  });
}

export default function Blog() {
  const posts = loader() as any;

  return (
    <main>
      <h1>Blog</h1>
      {/* <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
