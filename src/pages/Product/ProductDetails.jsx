import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts.js";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductFeatures from "./components/ProductFeatures";
import RelatedProducts from "./components/RelatedProducts";

function ProductDetails() {
  // scroll
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((product) => product.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-2xl font-semibold">
          Loading Product...
        </h2>
      </main>
    );
  }
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mt-10 grid gap-14 lg:grid-cols-2">
        <ProductGallery product={product} />

        <ProductInfo product={product} />
      </div>

      <div className="mt-20">
        <ProductFeatures />
      </div>

      <div className="mt-24">
        <RelatedProducts currentProduct={product} />
      </div>
    </section>
  );
}

export default ProductDetails;
