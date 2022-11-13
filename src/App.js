import { useState } from "react";

import JSONFormatter from "./Components/Organisms/JSONFormatter";
import JSONInput from "./Components/Organisms/JSONInput";

const App = () => {
  const [json, setJson] = useState("");

  const handleChange = (value) => {
    try {
      JSON.parse(value);
    } catch (e) {
      return;
    }

    setJson(JSON.parse(value));
  };

  return (
    <div className="App">
      Init JSON Viewer
      <JSONInput json={json} onChange={(value) => handleChange(value)} />
      {json ? <JSONFormatter theme="solarized" json={json} /> : null}
    </div>
  );
};

export default App;
