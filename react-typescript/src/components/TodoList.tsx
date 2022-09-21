import React from "react";
import Item from "./Item";
import { Todo } from "../models/model";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div>
      <Item todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoList;
