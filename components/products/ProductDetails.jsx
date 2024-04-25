"use client";
import { useContext, useEffect } from "react";
import classes from "./ProductDetails.module.scss";
import Image from "next/image";
import CartContext from "@/store/cart-context";
import UserContext from "@/store/user-context";
import { redirect } from "next/navigation";
const ProductDetails = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, []);
  return (
    <div className={classes["product-details"]}>
      <div className={classes["product-details__content"]}>
        <div className={classes["product-details__left"]}>
          <div className={classes["product-details__image"]}>
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
              className={classes["product-details__photo"]}
            />
          </div>
        </div>
        <div className={classes["product-details__right"]}>
          <div className={classes["product-details__main"]}>
            <h1 className={classes["product-details__heading"]}>
              {product.title}
            </h1>
            <span className={classes["product-details__price"]}>
              {product.price}$
            </span>
          </div>
          <div className={classes["product-details__description"]}>
            {product.description}
          </div>

          <button
            onClick={() => addItem(product)}
            className={classes["product-details__btn"]}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
