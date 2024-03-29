import React, { useState, useEffect } from "react";
import { Todo } from "../components/Todo";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

type Props = {
  todo: Todo;
  item: Todo[];
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleItem = ({ todo, item, setItem }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const isDoneHandler = (id: number) => {
    setItem(
      item.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteHandler = (id: number) => {
    setItem(item.filter((todo) => todo.id !== id));
  };

  const handlerSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setItem(
      item.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  return (
    <form
      onSubmit={(e) => {
        handlerSubmit(e, todo.id);
      }}
      className="bg-white w-full text-xl text-gray-700 shadow-lg rounded-lg px-8 py-3 md:p-5 mb-3 md:mb-6"
    >
      <div className="flex justify-between">
        {edit ? (
          <input
            className="shadow-md p-2 rounded-lg text-lg w-full  max-w-[150px] md:max-w-[300px] focus:outline-blue-300 focus:outline-2 focus:shadow-none"
            placeholder="edit"
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div className="flex">
          <span
            onClick={() => {
              isDoneHandler(todo.id);
            }}
            className="p-2 rounded-md text-blue-400 cursor-pointer"
          >
            <AiOutlineCheck />
          </span>
          <span
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
            className="p-2 rounded-md text-blue-400 cursor-pointer"
          >
            <AiFillEdit />
          </span>
          <span
            onClick={() => deleteHandler(todo.id)}
            className="p-2 rounded-md text-blue-400 cursor-pointer"
          >
            <BsTrashFill />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SingleItem;
