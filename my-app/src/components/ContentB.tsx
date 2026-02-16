import { useState } from "react";
import FunButton from "./FunButton";

export default function ComponentB() {
  const [message, setMessage] = useState("Waiting for fun...");

  function handleFun(count: number) {
    if (count >= 5) {
      setMessage("Okay that’s enough clicking 😅");
    } else {
      setMessage(`You’ve clicked ${count} times!`);
    }
  }

  return (
    <div>
      <h2>Component B</h2>
      <FunButton label="Click Me B" onFunAction={handleFun} />
      <p style={{ marginTop: ".5rem" }}>{message}</p>
    </div>
  );
}
