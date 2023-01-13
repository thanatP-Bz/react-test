import { useState } from "react";
import { Post } from "./components/post";
import PostBox from "./components/PostBox";

const getLocalstorage = () => {
  let post = localStorage.getItem("post");

  if (post) {
    return JSON.parse(localStorage.getItem("post") || "");
  }
  return [];
};

const App = () => {
  const [value, setValue] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>(getLocalstorage);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      setPosts([...posts, { _id: Date.now(), post: value }]);
      setValue("");
    }
  };

  return (
    <>
      <div className="screen-full w-screen">
        <div>
          <form
            className="flex justify-center items-center flex-col
             mx-auto max-w-2xl"
            onSubmit={submitHandler}
          >
            <textarea
              className="focus:shadow-soft-primary-outline mt-4 min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              placeholder="Write your thoughts here..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="mt-2 flex w-full justify-end ">
              <button
                type="submit"
                className="inline-block px-12 py-3 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Post
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-2">
            <PostBox posts={posts} setPosts={setPosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
