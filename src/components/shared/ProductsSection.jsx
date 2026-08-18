import ProductCard from './ProductCard.jsx'

function ProductsSection({products}) {
  return (
    <>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </>
  )
}

export default ProductsSection
