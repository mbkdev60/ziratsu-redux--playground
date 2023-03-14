import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImg } from "../redux/reducers/dataImgReducer";

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  const { count, cart, imgURL } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
    ...state.dataImgReducer,
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

  useEffect(() => {
    dispatch(getCatImg());
  }, [dispatch]);

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
      <br />
      {imgURL && <img style={{ width: "300px" }} src={imgURL} alt="Chat" />}
    </div>
  );
}
