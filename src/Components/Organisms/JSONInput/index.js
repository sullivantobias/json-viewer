import Editor from "@monaco-editor/react";

import "./index.scss";

const JSONInput = ({ json, onChange }) => (
  <div className="JSONInput">
    <Editor
      theme="vs-dark"
      onChange={onChange}
      defaultLanguage="json"
      options={{ formatOnPaste: true, formatOnType: true }}
      value={JSON.stringify(json)}
    />
  </div>
);

export default JSONInput;
