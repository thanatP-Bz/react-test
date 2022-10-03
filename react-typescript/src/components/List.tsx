import React, { useState } from "react";

const List: React.FC = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  const addHandler = () => {
    setList([...list, name]);
    setName("");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>List</h2>
      {list.map((name) => {
        return <li key={name}>{name}</li>;
      })}

      <input type="text" value={name} onChange={onChangeHandler} />
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default List;
