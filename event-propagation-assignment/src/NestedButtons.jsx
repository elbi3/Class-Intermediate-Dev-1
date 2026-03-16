import { useState } from "react";

function NestedButtons() {
  const [message, setMessage] = useState("Click a button");

  const handleOuterClick = () => {
    setMessage("Outer container clicked");
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    setMessage("Inner button clicked");
  };

  return (
    <div>
      <h2>{message}</h2>

      <div //OUTER CONTAINER
        onClick={handleOuterClick}
        style={{
          padding: "40px",
          backgroundColor: "#e5e5e5",
          textAlign: "center",
          borderRadius: "10px"
        }}
      >
        <p>Outer Container</p>
        {/* //INNER BUTTON */}
        <button onClick={handleInnerClick}> 
          Inner Button
        </button>
      </div>
    </div>
  );
}

export default NestedButtons;