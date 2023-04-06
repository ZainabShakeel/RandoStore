import React, { useState, useEffect } from "react";
import { getCartData } from "../services/Cart";
import { Link } from "react-router-dom";

export default function Navbar({ productsItem }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchItems();
    // let test = await getCartData();
    // console.log("getCartData", test);
    return () => {
      // console.log("Do home some cleanup");
    };
  }, []);

  async function fetchItems() {
    const items = await getCartData();
    setProducts(items);
    console.log("navbar", items);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            RandoStore
          </a>
        </div>
        {/* <!-- Collapsible wrapper --> */}

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              to={"/checkout"}
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="true"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-warning">
                {productsItem ? productsItem.length : products.length}
              </span>
            </Link>
            {/* <ul className="dropdown-menu dropdown-menu-end block">
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
