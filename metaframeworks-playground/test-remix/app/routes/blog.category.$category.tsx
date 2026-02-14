import { useLoaderData } from "react-router";

export async function loader({ params }: any) {
  return { category: params.category };
}

export default function Category() {
  const data = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Category: {data.category}</h1>
    </main>
  );
}
