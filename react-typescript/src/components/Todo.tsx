import React from "react";

const Todo: React.FC<{ items: string[] }> = (props) => {
  return (
    <>
      {props.items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
};

export default Todo;
