import {useState} from "react";
import Toolbar from "./components/Toolbar.tsx";
import Modal from "./components/Modal.tsx";

export default function App() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalIcon, setModalIcon] = useState<React.ReactNode | null>(null);


  const handleTrigger = (message: string, icon?: React.ReactNode) => {
    setModalMessage(message);
    setModalIcon(icon ?? null);
  };

  return (
    <div style={styles.toolbar}>
      <h1>🌚 Toolbar Demo 🌚</h1>

      <Toolbar onTrigger={handleTrigger}/>

      {modalMessage && (
        <Modal
          message={modalMessage}
          icon={modalIcon}
          onClose={() => {
            setModalMessage(null);
            setModalIcon(null);
          }}
        />
      )}
    </div>
  );
}

const styles = {
  toolbar: {
    textAlign: "center",
    padding: "1rem",
    // paddingInline: "2rem",
    backgroundColor: "thistle",
    color: "darkslategrey",
    width: "100%"
  }
};