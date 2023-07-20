import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../../store/features/cake/cakeSlice";

const Cake = () => {
  const [input, setInput] = useState("");
  const [restockInput, setRestockInput] = useState();

  const cake = useSelector((state) => state.cake.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "#fff" }}>
        Number of Cakes: {cake}
      </h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        style={{ backgroundColor: "black", color: "#fff", padding: "5px 25px" }}
      >
        Buy Cake
      </button>
      <br />
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(decrementByAmount(Number(input)));
        }}
        style={{ backgroundColor: "black", color: "#fff", padding: "5px 25px" }}
      >
        Buy Cake
      </button>
      <br />
      <button
        style={{ backgroundColor: "black", color: "#fff", padding: "5px 25px" }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Restock Cake
      </button>
      <br />
      <input
        value={restockInput}
        onChange={(e) => {
          setRestockInput(e.target.value);
        }}
      ></input>
      <button
        style={{ backgroundColor: "black", color: "#fff", padding: "5px 25px" }}
        onClick={() => {
          dispatch(incrementByAmount(Number(restockInput)));
        }}
      >
        Restock Cake
      </button>
    </div>
  );
};

export default Cake;
