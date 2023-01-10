import { useState } from "react";
import { Post } from "./components/post";
import PostBox from "./components/PostBox";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setPosts([...posts, { _id: Math.random(), post: value }]);
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="add content"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Post
        </button>
      </form>

      <div>
        <PostBox posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
};

export default App;
