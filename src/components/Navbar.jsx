import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="d-flex justify-content-between bg-dark p-3">
      <Link to="/">
        <h4 className="mx-3">Redux Cart Shop</h4>
      </Link>
      <div className=" d-flex  mx-4 justify-content-center align-items-center ">
        <Link to="/">
          <h5 className="mx-2">Home</h5>
        </Link>
        <Link to="/cart">
          <h5 className="mx-2">Cart</h5>
        </Link>
        <h5
          className="mx-4  bg-primary"
          style={{
            width: "55px",
            height: "30px",
            border: "1px solid red",
            borderRadius: "40%",
            color: "black",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          {items?.length}
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
