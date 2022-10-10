import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import {
  removeItem,
  increaseItem,
  decreaseItem,
  testing,
} from "../features/Cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseItem({ id }));
          }}
        >
          <ChevronDown />
        </button>
        <button
          onClick={() => {
            dispatch(testing(id));
          }}
        >
          test
        </button>
      </div>
    </article>
  );
};

export default CartItem;
