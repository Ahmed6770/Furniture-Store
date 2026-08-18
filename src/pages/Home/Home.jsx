import HeroHome from "./components/HeroHome.jsx";
import Categories from "./components/Categories.jsx";
import Collection from "./components/Collection.jsx";
import ProductsSlider from "./components/ProductsSlider.jsx";
import useProducts from "../../hooks/useProducts.js";
import Reveal from "../../components/shared/Reveal.jsx";

function Home() {
  const { products } = useProducts();

  return (
    <div className="space-y-6">
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
        description="Discover our newest furniture collection."
        products={products.slice(0, 8)}
      />
      </Reveal>
      
      <Reveal>
      <ProductsSlider
        title="Best Sellers"
        description="Our most loved furniture pieces."
        products={products.slice(8, 16)}
      />
      </Reveal>
    </div>
  );
}

export default Home;
