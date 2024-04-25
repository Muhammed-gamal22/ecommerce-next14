import HeaderProducts from "@/components/HeaderProducts";
import Products from "@/components/products/Products";
import { Fragment } from "react";
import { getData } from "@/lib/httpRequest";
import Slider from "@/components/Slider";
const ProductsPage = async () => {
  const products = await getData();

  return (
    <Fragment>
      <HeaderProducts />
      <Slider />
      <Products products={products} />
    </Fragment>
  );
};
export default ProductsPage;
