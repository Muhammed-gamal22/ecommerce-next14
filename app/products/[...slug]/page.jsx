import HeaderProducts from "@/components/HeaderProducts";
import ProductDetails from "@/components/products/ProductDetails";
import { getSingleProduct } from "@/lib/httpRequest";
import { Fragment } from "react";

const page = async ({ params }) => {
  const product = await getSingleProduct(params.slug);

  return (
    <Fragment>
      <HeaderProducts />
      <ProductDetails product={product} />
    </Fragment>
  );
};

export default page;
