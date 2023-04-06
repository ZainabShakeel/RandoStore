import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { ApiCall } from "../services/ApiCall";
import API from "../services/ApiLists";

import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {
  return (
    <div className="App">
      <h2>Checkout</h2>

      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              <CheckoutItem />

              <CheckoutItem />

              <div className="card">
                <div className="card-body">
                  <Link
                    className="btn btn-warning btn-block btn-lg"
                    to={"/items"}
                  >
                    <p>View Item</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
