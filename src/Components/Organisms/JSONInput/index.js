import { useRef, useState } from "react";

import "./index.scss";

const JSONInput = ({ json, onChange }) => {
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const [numberOfLines, setNumberOfLines] = useState(0);

  const setLines = () =>
    setNumberOfLines(textareaRef.current.value.split(/\r\n|\r|\n/).length);

  return (
    <div className="JSONInput">
      <div ref={lineNumbersRef} className="JSONInput__lineNumbers">
        {Array.from(Array(numberOfLines), (e, i) => (
          <span key={i}></span>
        ))}
      </div>
      <textarea
        onChange={() => onChange(textareaRef.current.value)}
        onKeyUp={setLines}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default JSONInput;
