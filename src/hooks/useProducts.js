import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext.jsx";

// Products context hook
function useProducts() {
  return useContext(ProductsContext);
}

export default useProducts;