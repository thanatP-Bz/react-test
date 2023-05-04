import { UseAppcontext } from "../hooks/UseAppContext";

const TransactionList = () => {
  const { transactions } = UseAppcontext();
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list"></ul>
    </>
  );
};

export default TransactionList;
