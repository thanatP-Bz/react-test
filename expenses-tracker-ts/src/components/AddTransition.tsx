import { useState } from "react";
import { UseAppContext } from "../hooks/UseAppContext";

const AddTransition = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | string>(0);

  const { AddTransaction } = UseAppContext();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const id = Math.random();

    AddTransaction(id, text, +amount);

    setAmount(0);
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            {/*  (negative - expense, positive - income) */}
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransition;
