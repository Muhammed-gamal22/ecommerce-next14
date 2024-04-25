"use client";
import { useContext, useEffect } from "react";
import CartContext from "@/store/cart-context";
import UserContext from "@/store/user-context";
import { redirect } from "next/navigation";
import FavouriteContext from "@/store/fav-context";
import "./Favourites.scss";
import FavouriteItem from "./FavouriteItem";
const Favourites = () => {
  const { favourites } = useContext(FavouriteContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, []);
  if (favourites.length === 0) {
    return <p>No Favourites found</p>;
  } else {
    return (
      <div className="favourites">
        <h1 className="favourites__heading">Favourites</h1>
        <div className="favourites__container">
          {favourites.map((fav) => (
            <FavouriteItem favourite={fav} />
          ))}
        </div>
      </div>
    );
  }
};
export default Favourites;
