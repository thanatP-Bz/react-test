import React from "react";
import { Todo } from "../components/Todo";

interface Props {
  todo: Todo;
  item: Todo[];
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleItem: React.FC<Props> = ({ todo, item, setItem }) => {
  return <div>SingleItem</div>;
};

export default SingleItem;
