import { configureStore } from "@reduxjs/toolkit";
import CartReduxStore from "../features/cartStore/cartSlice";
import ProductReducerStore from "../features/cartStore/productSlice";
const store = configureStore({
  reducer: {
    cart: CartReduxStore,
    Product: ProductReducerStore,
  },
});

export default store;
