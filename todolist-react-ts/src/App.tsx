import React, { useState } from "react";
import Form from "../src/components/Form";
import ItemList from "../src/components/ItemList";
import { Todo } from "../src/components/Todo";

function App() {
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Todo[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setItem([...item, { id: Date.now(), todo: value, isDone: false }]);
    }

    setValue("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-300 to-blue-300 overflow-auto flex">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:mt-10 mt-6 mx-10 h-[300px]">
        <div>
          <Form
            value={value}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
          />
        </div>

        <div>
          <ItemList item={item} setItem={setItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
