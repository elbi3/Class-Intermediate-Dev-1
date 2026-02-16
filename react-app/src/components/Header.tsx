import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          ⚡⚡⚡ Vite FanPage ⚡⚡⚡
        </Link>
      </div>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}


const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  logo: {
    fontWeight: 700,
    fontSize: "1.2rem",
  },
  logoLink: {
    color: "white",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    opacity: 0.85,
  },
  activeLink: {
    color: "white",
    textDecoration: "underline",
    fontWeight: 600,
  },
};