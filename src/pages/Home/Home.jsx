import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import HeroHome from "./components/HeroHome.jsx";
import Categories from "./components/Categories.jsx";
import Collection from "./components/Collection.jsx";
import ProductsSlider from "./components/ProductsSlider.jsx";
import Reveal from "../../components/shared/Reveal.jsx";

function Home() {
  const { products } = useContext(ProductsContext);

  const newArrivals = products.filter((product) => product.isNewArrival);
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <main className="space-y-6">
        <HeroHome />


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
