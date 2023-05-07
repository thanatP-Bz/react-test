import { UseAppContext } from "../hooks/UseAppContext";
import Transition from "./Transition";

const TransactionList = () => {
  const { transactions } = UseAppContext();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transition key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
