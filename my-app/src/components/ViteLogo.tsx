export default function ViteLogo() {
  return (
    <div style={styles.container}>
      <img
        src="https://vitejs.dev/logo.svg"
        alt="Vite Logo"
        style={styles.logo}
        className="logo"
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0",
  },
  logo: {
    height: "120px",
  },
};
