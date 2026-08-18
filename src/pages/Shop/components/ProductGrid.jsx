import ProductCard from './ProductCard.jsx'

function ProductGrid({products}) {
  return (
    <article className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard 
        key={product.id}
        product={product}
        />
      ))}
    </article>
  )
}

export default ProductGrid
