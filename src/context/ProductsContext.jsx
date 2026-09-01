import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const API_URL = "https://api.npoint.io/3d69793110177b6ccaf0";

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get products
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;