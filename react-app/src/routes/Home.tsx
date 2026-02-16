import ViteLogo from "../components/ViteLogo";
import ComponentA from "../components/ContentA";
import ComponentB from "../components/ContentB";

export default function Home() {
  return (
        <div className="home-container">
            <h1>Home</h1>
            <p>⚡⚡⚡⚡⚡⚡⚡⚡⚡</p>
            <p>Powered by lightning-fast HMR</p>
            <h2>All Hail the Dev Server</h2>
            <p>⚡⚡⚡⚡⚡⚡⚡⚡⚡</p>
            <div className="components-a-b">
                <ComponentA />
                <ComponentB />
            </div>
            <p>⚡⚡⚡⚡⚡⚡⚡⚡⚡</p>
            <ViteLogo />
        </div>
    );
}
