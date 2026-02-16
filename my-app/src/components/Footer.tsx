export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <p style={styles.tagline}>
          Built with React + Vite ⚡
        </p>
        <p style={styles.copy}>
          © {new Date().getFullYear()} Your Name — All rights reserved.
        </p>
      </div>

      <div style={styles.social}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          React
        </a>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    marginTop: "1rem",
    padding: "2rem",
    background: "#111827",
    color: "#e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  tagline: {
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  copy: {
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  social: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#93c5fd",
    textDecoration: "none",
  },
};
