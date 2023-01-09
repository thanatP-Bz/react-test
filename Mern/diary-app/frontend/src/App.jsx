import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/v2/`);

      const json = await response.json();
      setItem(json);
    };
    console.log(item);

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
        {item.map((pst) => {
          return <div key={pst._id}>{pst.post}</div>;
        })}
      </div>
    </>
  );
}

export default App;
