import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (e: React.FormEvent) => void;
}

const InputForm: React.FC<Props> = ({ todo, setTodo, addHandler }) => {
  return (
    <form onSubmit={addHandler}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default InputForm;
