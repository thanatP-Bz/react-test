import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<Props> = ({ input, setInput }) => {
  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
