import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  const { count, cart } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
  }));

  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const AddToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  return (
    <div>
      <h1>
        Votre panier : {cart} {count}
      </h1>
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button>
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <br />
      <button onClick={AddToCartFunc}>Ajouter au panier</button>
    </div>
  );
}
