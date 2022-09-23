import React from "react";
import { Todo } from "../models/model";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleItem: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const editItem = (id: number) => {
    setTodoList();
  };

  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <div>{todo.todo}</div>

      <button>edit</button>
      <button onClick={() => deleteItem(todo.id)}>delete</button>
    </div>
  );
};

export default SingleItem;
