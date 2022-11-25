import ReactJson from "react-json-view";

const JSONFormatter = ({ json, onChange }) => (
  <ReactJson
    onEdit={(value) => onChange(value?.updated_src)}
    onDelete={(value) => onChange(value?.updated_src)}
    onAdd={(value) => onChange(value?.updated_src)}
    style={{
      width: "100%",
      fontSize: 20,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    }}
    theme="solarized"
    src={json}
  />
);

export default JSONFormatter;
