export const dynamic = "force-static";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
        <h1>My Next.js Landing Page</h1>
        <ul>
          <li><a href="/users/1">User 1</a></li>
          <li><a href="/users/2">User 2</a></li>
          <li><a href="/users/3">User 3</a></li>
        </ul>
      </header>

      <section style={{ margin: "40px 0" }}>
        <h2>About</h2>
        <p>This is a simple landing page built with Next.js.</p>
      </section>

      <section style={{ margin: "40px 0" }}>
        <h2>Services</h2>
        <p>We provide placeholder services for this assignment.</p>
      </section>

      <section style={{ margin: "40px 0" }}>
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
      </section>

      <footer style={{ borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <p>© 2026 My Next App</p>
      </footer>
    </main>
  );
}
