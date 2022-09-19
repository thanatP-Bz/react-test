import React, { useState } from "react";
import Form from "./components/Form";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  console.log(input);

  const changeHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form input={input} setInput={setInput} />
    </div>
  );
};

export default App;
