import AlertButton from "./AlertButton";

type ToolbarProps = {
    onTrigger: (message: string, icon?: React.ReactNode) => void;
};

export default function Toolbar({ onTrigger }: ToolbarProps) {
  return (
    <div style={styles.bar}>
      <AlertButton message="Play clicked!" onTrigger={onTrigger} icon="🎬"><span>&nbsp;&nbsp;Play Movie</span></AlertButton>
      <AlertButton message="Upload clicked!" onTrigger={onTrigger} icon="⬆️"><span>&nbsp;&nbsp;Upload</span></AlertButton>
      <AlertButton message="Opened Settings!" onTrigger={onTrigger} icon="⚙️"><span>&nbsp;&nbsp;Settings</span></AlertButton>
    </div>
  );
}

const styles = {
    bar: {
        backgroundColor: "black"
    }
}