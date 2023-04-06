export const getCartData = async () => {
  try {
    const CartData = localStorage.getItem("Cart");
    return CartData != null ? JSON.parse(CartData) : null;
  } catch (e) {
    console.log("errrooo", e);
  }
};

export const storeCartData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem("Cart", jsonValue);
  } catch (e) {
    console.log("errrooo", e);
  }
};

export const removeCartData = async () => {
  try {
    localStorage.removeItem("Cart");
  } catch (e) {
    console.log("errrooo", e);
  }
};
