"use client";
import { createContext, useEffect, useState } from "react";
const FavouriteContext = createContext({
  favourites: [],
  addItemToFavourites: (item) => {},
  removeItemFromFavourites: (id) => {},
  resetFavourites: () => {},
});

const getInitialState = () => {
  const storedFavourites = localStorage.getItem("favourites");
  return storedFavourites ? JSON.parse(storedFavourites) : [];
};
export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(getInitialState);
  const addItemToFavourites = (item) => {
    setFavourites([...favourites, item]);
  };
  const removeItemFromFavourites = (id) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
  };
  const resetFavourites = () => {
    setFavourites([]);
  };
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  return (
    <FavouriteContext.Provider
      value={{
        favourites: favourites,
        addItemToFavourites,
        removeItemFromFavourites,
        resetFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteContext;
