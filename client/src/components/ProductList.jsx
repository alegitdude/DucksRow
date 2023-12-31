import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }
  if (gridView === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>ProductList</GridView>;
};
export default ProductList;
