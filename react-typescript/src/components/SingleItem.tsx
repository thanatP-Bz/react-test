import React,{useState} from "react";
import { Todo } from "../models/model";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleItem: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
const [edit,setEdit] = useState<boolean>(false)
const [editItem, setEditItem] = useState<string>(todo.todo)

  const editItemHandler = (id: number) => {
   
  };

  const deleteItemHandler = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <div>{todo.todo}</div>

      <button onClick={()=> editItemHandler()}>edit</button>
      <button onClick={() => deleteItemHandler(todo.id)}>delete</button>
    </div>
  );
};

export default SingleItem;
