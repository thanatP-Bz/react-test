import React from "react";
import { Todo } from "../components/Todo";
import { AiOutlineCheck } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

type Props = {
  todo: Todo;
  item: Todo[];
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleItem = ({ todo, item, setItem }: Props) => {
  const isDoneHandler = (id: number) => {
    setItem(
      item.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  return (
    <form className="bg-white w-full text-xl text-gray-700 shadow-lg rounded-lg px-8 py-3 md:p-5 mb-3 md:mb-6 flex justify-between">
      <div>
        <ul>
          <li>{todo.todo}</li>
        </ul>
      </div>
      <div className="flex">
        <span
          onClick={() => {
            isDoneHandler(todo.id);
          }}
          className="p-2 rounded-md text-blue-400 cursor-pointer"
        >
          <AiOutlineCheck />
        </span>
        <span className="p-2 rounded-md text-blue-400 cursor-pointer">
          <BsTrashFill />
        </span>
      </div>
    </form>
  );
};

export default SingleItem;
