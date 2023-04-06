import React from "react";

export default function AddItems() {
  return (
    <div className="App">
      <form className="m-5">
        <div className="form-group">
          <p>Name</p>
          <input
            className="form-control"
            placeholder="Enter Product Name"
            required
          />
        </div>
        <div className="form-group">
          <p>Price</p>
          <input className="form-control" placeholder="Price" required />
        </div>
        <div className="form-group">
          <p>Product Image</p>
          <input type="file" className="form-control-file" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
