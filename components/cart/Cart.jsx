"use client";
import CartContext from "@/store/cart-context";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useRouter, usePathname, redirect } from "next/navigation";
import "./Cart.scss";
import HeaderProducts from "../HeaderProducts";
import Link from "next/link";
import UserContext from "@/store/user-context";

const Cart = () => {
  const router = useRouter();
  const { items } = useContext(CartContext);
  const totalPrice = items.reduce((price, item) => price + item.totalPrice, 0);
  const { user } = useContext(UserContext);
  const pathName = usePathname();
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(totalPrice);

  useEffect(() => {
    console.log(user);
    if (!!!user) {
      router.push("/");
    }
  }, []);
  if (items.length === 0) {
    return (
      <p
        style={{
          padding: "10rem 20rem",
        }}
      >
        No Cart Items Please add Items To Cart
      </p>
    );
  } else {
    return (
      <div className="cart">
        <h1 className="cart__heading">Your Cart</h1>
        <div className="cart__wrapper">
          <div className="cart-products">
            <h2 className="cart-products__heading">Your Products</h2>
            <ul className="cart-products__wrapper">
              {items.map((item) => (
                <CartItem item={item} />
              ))}
            </ul>
          </div>
          <div className="cart-order">
            <h3 className="cart-order__heading">Order Review</h3>
            <div className="cart-order__total">
              <span className="cart-order__total-title">Total</span>
              <span className="cart-order__total-price">{price}</span>
            </div>
            <Link href="/checkout" className="cart-order__checkout">
              Checkout
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    );
  }
};

export default Cart;
