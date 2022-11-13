import React, { useState } from "react";
import Form from "../src/components/Form";
import { AiOutlineCheck } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

interface Todo {
  id: number;
  todo: string;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Todo[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setItem([...item, { id: Date.now(), todo: value }]);
    }

    setValue("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-300 to-blue-300 flex overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10 mx-10 h-[500px]">
        <div>
          <Form
            value={value}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
          />
        </div>

        <div>
          <div className="md:ml-10 ">
            {item.map((item) => {
              const { id, todo } = item;
              return (
                <div
                  key={id}
                  className="bg-white w-full text-xl text-gray-700 shadow-lg rounded px-8 py-3 md:p-5 mb-3 md:mb-6 flex justify-between"
                >
                  <div>
                    <ul>
                      <li>{todo}</li>
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
        </div>
      </div>
    </div>
  );
}

export default App;
