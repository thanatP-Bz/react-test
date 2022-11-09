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
    <div className="w-full h-screen bg-blue-200">
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

      <div>
        {item.map((item) => {
          const { id, todo } = item;
          return (
            <ul key={id}>
              <li>{todo}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
