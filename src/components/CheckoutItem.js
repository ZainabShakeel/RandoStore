import React from "react";
import API from "../services/ApiLists";

export default function CheckoutItem({ item, index }) {
  // console.log("CheckoutItem", item.img);
  return (
    <div className="card rounded-3 mb-4" key={index}>
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={API.baseurl + item.img}
              // src={require("./img/bed.jpg")}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{item?.name}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value="2"
              type="number"
              className="form-control form-control-sm"
            />

            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">PKR {item?.price}/-</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-danger">
              <i className="fas fa-trash fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
