import { useState } from "react";

import JSONFormatter from "./Components/Organisms/JSONFormatter";
import JSONInput from "./Components/Organisms/JSONInput";
import Container from "./Components/Structure/Container";

import "./App.scss";

const App = () => {
  const [json, setJson] = useState("");

  const handleChange = (isFormatter, value) => {
    if (isFormatter) {
      setJson(value);

      return;
    }

    try {
      JSON.parse(value);
    } catch (e) {
      return;
    }

    setJson(JSON.parse(value));
  };

  return (
    <div className="App">
      <Container>
        <JSONInput
          json={json}
          onChange={(value) => handleChange(false, value)}
        />
      </Container>
      <Container>
        {json ? (
          <JSONFormatter
            onEdit={(value) => handleChange(true, value)}
            json={json}
          />
        ) : null}
      </Container>
    </div>
  );
};

export default App;
