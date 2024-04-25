import { NextResponse } from "next/server";
const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
// http://localhost:1337/api/products?populate=*
export const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const resData = await response.json();
  return resData;
};

export const getfilterOptions = async () => {
  const filterOptionsResponse = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const filterOptionsData = await filterOptionsResponse.json();
  return filterOptionsData;
};

export const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const resData = await response.json();
  return resData;
};

export const getSpecificCategory = async (categoryTitle) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryTitle}`
  );
  const resData = await response.json();
  return resData;
};
// export const sendCartData = async (items) => {
//   const response = await fetch(
//     "https://fir-9-a36bb-default-rtdb.firebaseio.com/cart.json",
//     {
//       headers: "application/json",
//       body: JSON.stringify(items),
//       method: "PUT",
//     }
//   );
//   const resData = await response.json();
// };
