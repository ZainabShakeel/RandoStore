import React from "react";
import API from "../services/ApiLists";

export default function ItemBox({ item, index, AddtoCart, Delete, Edit }) {
  return (
    <div className="col-md-4 col-sm-6" key={index}>
      <div className="card mb-30">
        <a className="card-img-tiles" href="#" data-abc="true">
          <div className="inner">
            <div className="main-img">
              <img src={API.baseurl + item.img} alt="Category" />
            </div>
          </div>
        </a>
        <div className="card-body text-center">
          <h4 className="card-title">{item.name}</h4>
          <div>
            <button onClick={() => Delete(item)} className="btn">
              <i className="fas fa-trash"></i>
            </button>
            <button onClick={() => Edit(item)} className="btn">
              <i class="fas fa-pen"></i>
            </button>
          </div>

          <p className="text-muted">Starting from PKR {item.price}/-</p>
          <button
            onClick={() => AddtoCart(item)}
            className="btn btn-outline-primary btn-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
