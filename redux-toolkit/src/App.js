import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calTotals } from "./features/Cart/CartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calTotals());
  });

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
