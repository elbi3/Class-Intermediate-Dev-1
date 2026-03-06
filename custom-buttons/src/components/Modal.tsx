interface ModalProps {
    icon?: React.ReactNode;
    message: string;
    onClose: () => void;
};

export default function Modal({ message, icon, onClose }: ModalProps) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{message} {icon}</p>
        <button style={styles.btn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    modal: {
      background: "white",
      color: "black",
      padding: "20px",
      borderRadius: "8px",
      minWidth: "200px"
    },
    btn: {
      color: "thistle"
    }
  };