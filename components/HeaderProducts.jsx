"use client";
import classes from "./HeaderProduct.module.scss";
import Link from "next/link";
import { useContext, useState } from "react";
import CartContext from "@/store/cart-context";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { ShoppingBagOutlined } from "@mui/icons-material";
import {} from "@/store/cart-context";
import UserContext from "@/store/user-context";
import FavouriteContext from "@/store/fav-context";
const HeaderProducts = () => {
  const { items, resetCart } = useContext(CartContext);
  const { logout } = useContext(UserContext);
  const { resetFavourites } = useContext(FavouriteContext);
  let cartLength = 0;
  for (let i = 0; i < items?.length; i++) {
    cartLength += items[i].quantity;
  }
  return (
    <header className={classes["headerProducts"]}>
      <div className={classes["header-content"]}>
        <div className={classes["header-content__nav"]}>
          <Link href="/products" className={classes["header-content__logo"]}>
            {" "}
            <Image
              src="/images/3.png"
              fill
              className={classes["header-content__image"]}
            />
          </Link>
        </div>
        <nav className={classes["header-content__links"]}>
          <ul className={classes["header-content__list"]}>
            <li className={classes["header-content__item"]}>
              <Link href="/cart" className={classes["header-content__link"]}>
                <div className={classes["header-content__icon"]}>
                  <ShoppingBagOutlined />
                </div>
                <span className={classes["header-content__bag"]}>
                  {cartLength}
                </span>
              </Link>
            </li>
            <li className={classes["header-content__item"]}>
              <Link
                onClick={() => {
                  signOut(auth);
                  resetCart();
                  logout();
                  resetFavourites();
                }}
                href="/"
                className={classes["header-content__link"]}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default HeaderProducts;
