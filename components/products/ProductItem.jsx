import classes from "./ProductItem.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { useDispatch } from "react-redux";
import CartContext from "@/store/cart-context";
import { useContext, useRef } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { ref, push, set } from "firebase/database";
import { database } from "../../lib/firebase";
import {
  ChevronLeft,
  ChevronRight,
  FavoriteBorderRounded,
  AccessAlarm,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import FavouriteContext from "@/store/fav-context";
const ProductItem = ({ product }) => {
  const { addItem, removeFavourite } = useContext(CartContext);
  const { favourites, removeItemFromFavourites, addItemToFavourites } =
    useContext(FavouriteContext);

  const isFavourite = favourites.some((fav) => fav.id === product.id);
  console.log(isFavourite);
  const addToCartHandler = (item) => {
    addItem(item);
  };
  console.log(isFavourite);
  const handleToggleFavourite = () => {
    if (isFavourite) {
      removeItemFromFavourites(product.id);
    } else {
      addItemToFavourites(product);
    }
  };

  const transformPrice = (totalPrice) => {
    const price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(totalPrice);
    return price;
  };
  return (
    <div className={classes["product-container"]}>
      <div key={product.id} className={classes["product-container__item"]}>
        <div className={classes["product-container__image"]}>
          <Image
            width={100}
            height={100}
            src={product.image}
            className={classes["product-container__photo"]}
          />
        </div>
        <div className={classes["product-container__item-content"]}>
          <div className={classes["product-container__item-details"]}>
            {" "}
            <h3 className={classes["product-container__item-title"]}>
              {product.title}
            </h3>
            <p className={classes["product-container__item-price"]}>
              {transformPrice(product.price)}
            </p>
          </div>
          <div
            onClick={() => addToCartHandler(product)}
            className={classes["product-container__item-icon"]}
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={handleToggleFavourite}
            className={classes["product-container__item-fav"]}
          >
            {isFavourite ? <Favorite /> : <FavoriteBorderOutlined />}
          </div>
        </div>

        <Link
          href={`/products/${product.id}`}
          className={classes["product-container__link"]}
        >
          show
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
