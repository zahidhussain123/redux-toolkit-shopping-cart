import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Products";
import {
  fetchedProducts,
  fetchProducts,
} from "../features/cartStore/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.Product);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    // dispatch(fetchedProducts());

    // thunk
    dispatch(fetchProducts());

    // const fetchApiData = async () => {
    //   let dataStore = await fetch("https://fakestoreapi.com/products");
    //   let res = await dataStore.json();
    //   console.log(res);
    //   setProducts(res);
    // };

    // fetchApiData();
  }, []);
  return (
    <div>
      <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products products={products} status={status} />
      </section>
    </div>
  );
};

export default Home;
