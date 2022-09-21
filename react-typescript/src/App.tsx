import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { Todo } from "./models/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo(" ");
  };

  console.log(todoList);

  return (
    <div>
      <InputForm todo={todo} setTodo={setTodo} addHandler={addHandler} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
