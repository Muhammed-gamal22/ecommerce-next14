import HeaderProducts from "@/components/HeaderProducts";
import Products from "@/components/products/Products";
import { Fragment } from "react";
import { getData, getfilterOptions } from "@/lib/httpRequest";
import { headers } from "next/headers";
import Slider from "@/components/Slider";
const ProductsPage = async () => {
  const products = await getData();
  const categories = await getfilterOptions();

  return (
    <Fragment>
      <HeaderProducts />
      <Slider />
      <Products categories={categories} products={products} />
    </Fragment>
  );
};
export default ProductsPage;
