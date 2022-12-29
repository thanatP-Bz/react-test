import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value) {
      setItem([...item, { id: new Date(), content: value }]);
      setValue("");
    }
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
        {item.map((post) => {
          return (
            <div key={post.id}>
              <h4>{post.content}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
