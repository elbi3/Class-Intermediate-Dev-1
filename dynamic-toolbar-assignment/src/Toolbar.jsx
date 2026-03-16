import AlertButton from "./AlertButton";

function Toolbar() {

  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Saving!", children: "Save Draft" },
    { message: "Uploading!", children: "Upload File" },
    { message: "Posting!", children: "Sharing Document Online" },
    { message: "Deleting!", children: "Delete Draft" },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton
          key={index}
          message={button.message}
        >
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;