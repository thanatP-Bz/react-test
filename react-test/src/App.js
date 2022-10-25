import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const App = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default App;
