import { useState } from "react";
import { Post } from "./components/post";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [post, setPost] = useState<Post[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setPost([...post, { _id: Math.random(), post: value }]);
      setValue("");
    }
  };

  console.log(post);

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
        {post.map((item) => {
          return <div key={item._id}>{item.post}</div>;
        })}
      </div>
    </>
  );
};

export default App;
