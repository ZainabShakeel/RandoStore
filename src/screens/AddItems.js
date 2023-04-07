import { upload } from "@testing-library/user-event/dist/upload";
import React, { useEffect, useState } from "react";

import { ApiCall } from "../services/ApiCall";
import API from "../services/ApiLists";

var file = require("file-system");
var fs = require("fs");

export default function AddItems() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  async function AddItemApi() {
    var formData = {
      name,
      price,
      img: "./img/test2.jpeg",
    };

    ApiCall("Post", API.items, formData)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {});
  }

  const submitHandler = (event, files) => {
    console.log(event.target);
    console.log(files.target);
    fs.writeFile(
      `../components/img/${files.target.files[0].name}.jpg`,
      files.target.files[0],
      function (err) {
        if (err) throw err;
        console.log("Replaced!");
      }
    );
  };

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
          <input
            type="file"
            className="form-control-file"
            onChange={() => submitHandler()}
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
