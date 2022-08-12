import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cartStore/cartSlice";
import { STATUSES } from "../features/cartStore/productSlice";
const Products = ({ products, status }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (productid) => {
    dispatch(add(productid));
  };

  if (status === STATUSES.LOADING) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center" }}>Loading...</h1>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Something is wrong
      </h1>
    );
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleAddToCart(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
