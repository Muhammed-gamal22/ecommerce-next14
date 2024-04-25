"use client";
import CartContext from "@/store/cart-context";
import classes from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-text"]}>
        <div className={classes["header-text__logo-container"]}>
          <div className={classes["header-text__logo"]}>
            <Image
              src="/images/3.png"
              fill
              className={classes["header-text__image"]}
            />
          </div>
        </div>
        <h1 className={classes["header-text__heading"]}>
          E-commerce <span>Website</span>
        </h1>
        <p className={classes["header-text__paragraph"]}>
          introducing our latest collection,designed specifically for outdoor
          enthusiasts,features a range of high performance outwear with a range
          of bold and vibrant colors and patterns to choose from
        </p>
      </div>
    </header>
  );
};
export default Header;
