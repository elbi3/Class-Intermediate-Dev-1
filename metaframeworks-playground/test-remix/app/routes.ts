import { route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("blog/category/:category", "routes/blog.category.$category.tsx"),
];