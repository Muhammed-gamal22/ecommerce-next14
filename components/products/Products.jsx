"use client";
import classes from "./Products.module.scss";
import ProductItem from "./ProductItem";
import { Suspense, useContext, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Slider from "../Slider";
import UserContext from "@/store/user-context";
import { redirect } from "next/navigation";

const Products = ({ products }) => {
  const { user } = useContext(UserContext);
  const productsRef = useRef();

  useEffect(() => {
    if (typeof window !== undefined && typeof user === "string" && !user) {
      redirect("/");
    }
  }, [user]);

  const handleMoveDirection = (direction) => {
    const { clientWidth, scrollLeft } = productsRef.current;
    if (productsRef.current) {
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      productsRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className={classes["products"]}>
      <h2 className={classes["products__title"]}>Products</h2>
      <div
        onClick={() => handleMoveDirection("left")}
        className={classes["products__icon-left"]}
      >
        <ChevronLeft />
      </div>
      <div ref={productsRef} className={classes["products__wrapper"]}>
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
      <div
        className={classes["products__icon-right"]}
        onClick={() => handleMoveDirection("right")}
      >
        <ChevronRight />
      </div>
    </section>
  );
};
export default Products;
