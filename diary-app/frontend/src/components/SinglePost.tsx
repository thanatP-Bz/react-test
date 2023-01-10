import React from "react";
import { Post } from "./post";

interface Props {
  item: Post;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const SinglePost: React.FC<Props> = ({ item, posts, setPosts }) => {
  console.log(item.post);
  return <div>{item.post}</div>;
};

export default SinglePost;
