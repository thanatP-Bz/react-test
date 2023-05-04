interface TransactionProps {
  transaction: {
    _id: number;
    text: string;
    amount: number;
  };
}

const Transition = ({ transaction }: TransactionProps) => {
  return (
    <>
      <li className="minus">
        {transaction.text}
        <span>-${transaction.amount}</span>
        <button type="submit" className="delete-btn">
          x
        </button>
      </li>
    </>
  );
};

export default Transition;
