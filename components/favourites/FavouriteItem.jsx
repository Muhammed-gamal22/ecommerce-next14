import {
  Favorite,
  ShoppingCartOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import classes from "./FavouriteItem.module.scss";
import Image from "next/image";
import { useContext } from "react";
import FavouriteContext from "@/store/fav-context";
import Link from "next/link";
import CartContext from "@/store/cart-context";
const transformPrice = (totalPrice) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(totalPrice);
  return price;
};
const FavouriteItem = ({ favourite }) => {
  const { removeItemFromFavourites } = useContext(FavouriteContext);
  const { addItem } = useContext(CartContext);
  return (
    <div className={classes["favourite-container__item"]}>
      <div className={classes["favourite-container__image"]}>
        <Image
          width={100}
          height={100}
          src={favourite.image}
          className={classes["favourite-container__photo"]}
        />
      </div>
      <div className={classes["favourite-container__item-content"]}>
        <div className={classes["favourite-container__item-details"]}>
          {" "}
          <h3 className={classes["favourite-container__item-title"]}>
            {favourite.title}
          </h3>
          <p className={classes["favourite-container__item-price"]}>
            {transformPrice(favourite.price)}
          </p>
        </div>
        <div
          onClick={() => addItem(favourite)}
          className={classes["favourite-container__item-icon"]}
        >
          <ShoppingCartOutlined />
        </div>
        <div
          onClick={() => removeItemFromFavourites(favourite.id)}
          className={classes["favourite-container__item-fav"]}
        >
          <DeleteOutline />
        </div>
      </div>

      <Link
        href={`/products/${favourite.id}`}
        className={classes["favourite-container__link"]}
      >
        show
      </Link>
    </div>
  );
};
export default FavouriteItem;
