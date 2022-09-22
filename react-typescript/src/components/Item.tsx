import React from "react";
import { Todo } from "../models/model";
import SingleItem from "./SingleItem";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Item: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <SingleItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};

export default Item;
