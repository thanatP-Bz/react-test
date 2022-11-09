import React, { useState } from "react";

interface Todo {
  id: number;
  todo: string;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Todo[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setItem([...item, { id: Date.now(), todo: value }]);
    }

    setValue("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>task</label>
        <input
          type="text"
          value={value}
          placeholder="enter value"
          onChange={changeHandler}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
