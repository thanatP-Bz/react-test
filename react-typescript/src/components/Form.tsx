import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlerSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handlerSubmit }) => {
  return (
    <form className="input" onSubmit={handlerSubmit}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        add
      </button>
    </form>
  );
};

export default Form;
