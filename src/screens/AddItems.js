import React, { useEffect, useState } from "react";

import { ApiCall } from "../services/ApiCall";
import API from "../services/ApiLists";
import { useNavigate, useLocation } from "react-router-dom";
// var file = require("file-system");
// var fs = require("fs");

export default function AddItems(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("props", location);
  const [name, setName] = useState(
    location?.state?.edit ? location?.state?.items.name : ""
  );
  const [price, setPrice] = useState(
    location?.state?.edit ? location?.state?.items.price : ""
  );
  const [image, setImage] = useState(
    location?.state?.edit ? location?.state?.items.img : ""
  );

  async function AddItemApi() {
    var formData = {
      name,
      price,
      img: image,
    };

    ApiCall("Post", API.items, formData)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {
        // console.log("cteated", resp);
        navigate("/items");
      });
  }

  function EditItem() {
    var formData = {
      name,
      price,
      img: image,
    };
    ApiCall("Put", API.items + "/" + location?.state?.items.id, formData)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {
        navigate("/items");
        console.log("response EditItem", resp);
      });
  }

  // const submitHandler = (event, files) => {
  //   console.log(event.target);
  //   console.log(files.target);
  //   fs.writeFile(
  //     `../components/img/${files.target.files[0].name}.jpg`,
  //     files.target.files[0],
  //     function (err) {
  //       if (err) throw err;
  //       console.log("Replaced!");
  //     }
  //   );
  // };

  return (
    <div className="App">
      <div className="m-5">
        <div className="form-group">
          <p>Name</p>
          <input
            className="form-control"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <p>Price</p>
          <input
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <p>Product Image</p>
          <input
            className="form-control"
            placeholder="Path of iamge"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <p>Product Image</p>
          <input
            type="file"
            className="form-control-file"
            onChange={() => submitHandler()}
          />
        </div> */}

        <button
          type="submit"
          className="btn btn-warning mt-3"
          onClick={() => {
            location?.state?.edit ? EditItem() : AddItemApi();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
