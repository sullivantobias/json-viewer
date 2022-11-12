import JsonInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const JSONInput = ({ json, onChange }) => {
  return (
    <JsonInput
      id={1}
      reset
      onChange={onChange}
      placeholder={json}
      locale={locale}
      height="550px"
      width="100%"
    />
  );
};

export default JSONInput;
