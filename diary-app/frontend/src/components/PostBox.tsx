import React from "react";
import { Post } from "./post";
import SinglePost from "./SinglePost";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostBox: React.FC<Props> = ({ posts, setPosts }) => {
  return (
    <div>
      {posts.map((item) => {
        return (
          <SinglePost
            key={item._id}
            item={item}
            posts={posts}
            setPosts={setPosts}
          />
          /* <div>{item.post}</div> */
        );
      })}
    </div>
  );
};

export default PostBox;
