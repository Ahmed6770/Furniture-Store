import HeroHome from "./components/HeroHome.jsx";
import Categories from "./components/Categories.jsx";
import Collection from "./components/Collection.jsx";
import ProductsSlider from "./components/ProductsSlider.jsx";
import useProducts from "../../hooks/useProducts.js";
import Reveal from "../../components/shared/Reveal.jsx";

function Home() {
  const { products } = useProducts();

  const newArrivals = products.filter((product) => product.isNewArrival);
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <main className="space-y-6">
      <Reveal>
        <HeroHome />
      </Reveal>

      <Reveal>
        <Categories />
      </Reveal>

      <Reveal>
        <Collection />
      </Reveal>

      <Reveal>
        <ProductsSlider
          title="New Arrivals"
          description="Discover our newest furniture collection across all rooms."
          products={newArrivals}
        />
      </Reveal>

      <Reveal>
        <ProductsSlider
          title="Best Sellers"
          description="Our most loved, top-rated furniture pieces."
          products={bestSellers}
        />
      </Reveal>
    </main>
  );
}

export default Home;
