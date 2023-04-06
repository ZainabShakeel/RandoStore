import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  return (
    <div className="App">
      <p>Home TEST</p>
      <Link to={"/items"}>
        <p>Go to Items</p>
      </Link>
      <Link to={"/checkout"}>
        <p>Go to Checkout</p>
      </Link>
      <Link to={"/add-items"}>
        <p>Go to Add Items</p>
      </Link>
    </div>
  );
}
