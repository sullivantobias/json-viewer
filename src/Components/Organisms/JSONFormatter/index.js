import ReactJson from "react-json-view";

const JSONFormatter = ({ json, onEdit }) => (
  <ReactJson
    onEdit={(value) => onEdit(value?.updated_src)}
    style={{ width: "100%" }}
    theme="solarized"
    src={json}
  />
);

export default JSONFormatter;
