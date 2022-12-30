import { useState, useEffect } from "react";

const post = [
  {
    id: 1,
    text: "test",
  },
  {
    id: 2,
    text: "test3",
  },
];
function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState(post);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/v2/`);

      const json = await response.json();

      setItem();
    };

    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <textarea
          type="text"
          placeholder="enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">post</button>
      </form>

      <div>
        {item &&
          item.map((post) => {
            return <ul key={post.id}>{post.text}</ul>;
          })}
      </div>
    </>
  );
}

export default App;
