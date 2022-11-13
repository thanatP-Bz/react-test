import React from "react";
import SingleItem from "./SingleItem";
import { Todo } from "./Todo";
import { AiOutlineCheck } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

interface Props {
  item: Todo[];
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ItemList: React.FC<Props> = ({ item, setItem }) => {
  return (
    <div className="md:ml-10">
      {item.map((item) => {
        const { id, todo } = item;
        return (
          <div
            key={id}
            className="bg-white w-full text-xl text-gray-700 shadow-lg rounded-lg px-8 py-3 md:p-5 mb-3 md:mb-6 flex justify-between"
          >
            <div>
              <ul>
                <SingleItem todo={todo} item={item} setItem={setItem} />
              </ul>
            </div>
            <div className="flex">
              <span className="p-2 rounded-md text-blue-400 cursor-pointer">
                <AiOutlineCheck />
              </span>
              <span className="p-2 rounded-md text-blue-400 cursor-pointer">
                <BsTrashFill />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
