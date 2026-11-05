import { useState, useEffect } from "react";

function ProductGallery({ product }) {

  const galleryImages = product.images?.length
    ? product.images
    : [product.image];

  const [selectedImage, setSelectedImage] = useState(product?.image);
  useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  return (
    <section className="flex flex-col-reverse gap-5 md:flex-row">

      {/* Thumbnails */}
      <div className="flex gap-4 md:flex-col">
        {galleryImages.slice(0, 4).map((image, index) => (
          <button key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              selectedImage === image
                ? "border-amber-700"
                : "border-transparent hover:border-stone-300"
            }`}
          >
            <img className="h-16 w-16 sm:h-20 sm:w-20 object-cover"
              src={image}
              alt={`${product.name} ${index + 1}`}
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 overflow-hidden rounded-3xl bg-stone-100">
        <img className="h-72 w-full object-contain p-4 sm:h-96 sm:p-6 lg:h-144 lg:p-8 transition-all duration-300"
          id="main-product-image"
          src={selectedImage}
          alt={product.name}
        />
      </div>
    </section>
  );
}

export default ProductGallery;
