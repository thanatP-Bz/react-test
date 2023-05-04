import { UseAppcontext } from "../hooks/UseAppContext";

const Transition = () => {
  const { transactions } = UseAppcontext();
  console.log(transactions);
  return <></>;
};

export default Transition;
