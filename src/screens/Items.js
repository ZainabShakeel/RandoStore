import React, { useEffect, useState } from "react";
import axios from "axios";

import { ApiCall } from "../services/ApiCall";
import API from "../services/ApiLists";
import Navbar from "../components/Navbar";
import ItemBox from "../components/ItemBox";
import { storeCartData, removeCartData, getCartData } from "../services/Cart";
import { useNavigate } from "react-router-dom";

export default function Items() {
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  const [Cartproducts, setCartProducts] = useState([]);
  const [isCartproducts, setCIsartProducts] = useState(false);

  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState("");

  useEffect(() => {
    fetchItems();
    fetchCartProduct();

    return () => {
      // console.log("Do home some cleanup");
    };
  }, []);

  async function fetchCartProduct() {
    const items = await getCartData();
    console.log("products cart test items", items);
    if (items.length > 0) setCartProducts(items);
    else setCartProducts([]);
  }

  async function AddtoCart(item) {
    console.log("item", item, "Cartproducts", Cartproducts);
    let test = Cartproducts.push(item);
    storeCartData(Cartproducts);
    setCIsartProducts(!isCartproducts);
  }

  function fetchItems() {
    ApiCall("Get", API.items)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {
        // console.log("response Items", resp);
        setProducts(resp.data);
        setSearchArray(resp.data);
      });
  }

  function DeleteItem(item) {
    ApiCall("Delete", API.items + "/" + item.id)
      .catch((error) => {
        console.log("erorr reponse", error);
      })
      .then((resp) => {
        console.log("response DeleteItem", resp);
        fetchItems();
      });
  }

  function EditItem(items) {
    navigate("/add-items", {
      state: {
        items,
        edit: true,
      },
    });
  }

  const SearchFilter = (text) => {
    setSearch(text);
    if (searchArray?.length > 0) {
      const newData = searchArray?.filter((item) => {
        const itemData = `${item.name.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setProducts(newData);
    }
  };

  return (
    <div className="App">
      <Navbar productsItem={Cartproducts} isCartproducts={isCartproducts} />
      <div className="container mt-100">
        <div className="form-group m-5">
          <input
            className="form-control"
            placeholder="Enter Product Name to Search"
            value={search}
            onChange={(e) => SearchFilter(e.target.value)}
            required
          />
        </div>
        <div className="row">
          {products?.map((item, index) => {
            return (
              <ItemBox
                item={item}
                index={index}
                AddtoCart={AddtoCart}
                Delete={DeleteItem}
                Edit={EditItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
