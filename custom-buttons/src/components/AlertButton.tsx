import { useState } from "react";


type AlertButtonProps = {
    message: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    onTrigger: (message: string, icon?: React.ReactNode) => void;
  };

export default function AlertButton({ 
    message, 
    children,
    icon, 
    onTrigger 
}: AlertButtonProps) {
    const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    onTrigger(`${message} (clicked ${newCount} times)`, icon);
  };

  return (
    <button onClick={handleClick} style={styles.btn}>
      {icon} {children} <span style={styles.counter}>{count}</span> 
    </button>
  );
}

const styles = {
    btn: {
        margin: ".25rem",
    },
    counter: {
        color: "magenta"
    }
};