export const dynamic = "force-static";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user: any) => ({
    id: user.id.toString(),
  }));
}

async function getUser(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <main style={{ padding: "20px" }}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
      <p>Website: {user.website}</p>
    </main>
  );
}
