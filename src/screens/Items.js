import React, { useEffect, useState } from "react";
import axios from "axios";

import { ApiCall } from "../services/ApiCall";
import API from "../services/ApiLists";
import Navbar from "../components/Navbar";
import ItemBox from "../components/ItemBox";
import { storeCartData, removeCartData, getCartData } from "../services/Cart";

export default function Items() {
  const [products, setProducts] = useState();
  const [Cartproducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetchItems();

    // console.log("getCartData", test);
    return () => {
      // console.log("Do home some cleanup");
    };
  }, []);

  async function AddtoCart(item) {
    console.log("item", item, "Cartproducts", Cartproducts);
    let test = Cartproducts.push(item);
    storeCartData(Cartproducts);
  }

  async function fetchItems() {
    ApiCall("Get", API.items)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {
        // console.log("response Items", resp);
        setProducts(resp.data);
      });
  }
  return (
    <div className="App">
      <Navbar productsItem={Cartproducts} />
      <div className="container mt-100">
        <div className="row">
          {products?.map((item, index) => {
            return <ItemBox item={item} index={index} AddtoCart={AddtoCart} />;
          })}
        </div>
      </div>
    </div>
  );
}
