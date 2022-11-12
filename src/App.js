import { useState } from "react";

import JSONFormatter from "./Components/Organisms/JSONFormatter";
import JSONInput from "./Components/Organisms/JSONInput";

const App = () => {
  const [json, setJson] = useState({ test: "test" });

  const handleChange = () => {
    console.log("Changing");
  };

  return (
    <div className="App">
      Init JSON Viewer
      <JSONInput json={json} onChange={handleChange} />
      {json ? <JSONFormatter theme="solarized" json={json} /> : null}
    </div>
  );
};

export default App;
