import React, { useState } from "react";

const List: React.FC = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  const addHandler = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <h2>List</h2>
      {list.map((name) => {
        return <li key={name}>{name}</li>;
      })}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default List;
