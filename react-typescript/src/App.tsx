import React, { useState } from "react";
import Form from "./components/Form";
import { Todo } from "./models/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <>
      <div className="App">
        <span className="heading">task</span>
        <Form todo={todo} setTodo={setTodo} handlerSubmit={handlerSubmit} />
      </div>
    </>
  );
};

export default App;
