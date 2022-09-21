import React from "react";
import { Todo } from "../models/model";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Item: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <ul key={todo.id}>{todo.todo}</ul>;
      })}
    </div>
  );
};

export default Item;
