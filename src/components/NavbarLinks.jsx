import React from "react";
import { Link } from "react-router-dom";
function NavbarLinks() {
  return (
    <>
      <li>
        <Link className="" to="cart">
          Cart
        </Link>
      </li>
      <li>
        <Link className="" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="" to="/">
          Home
        </Link>
      </li>
    </>
  );
}

export default NavbarLinks;
