//also known as "SharedComponents.tsx"

import { useState } from "react";

type FunButtonProps = {
  label: string;
  onFunAction?: (count: number) => void;
};

export default function FunButton({ label, onFunAction }: FunButtonProps) {
  const [count, setCount] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);

    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 200);

    if (onFunAction) {
      onFunAction(newCount);
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{
        ...styles.button,
        transform: isPulsing ? "scale(1.08)" : "scale(1)",
      }}
    >
      {label} ({count})
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #f472b6, #fb7185)",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s ease",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  },
};
