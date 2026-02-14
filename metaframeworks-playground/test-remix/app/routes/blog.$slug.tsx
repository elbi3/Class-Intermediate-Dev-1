import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { useLoaderData } from "react-router";

export async function loader({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    "app/posts",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    html: marked(content),
  };
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
