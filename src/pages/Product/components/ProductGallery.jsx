import { useState, useEffect } from "react";

function ProductGallery({ product }) {

  const galleryImages = product.images?.length > 0 
  ? product.images 
  : [product.image].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState(product?.image);
  useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row">

      {/* Thumbnails */}
      <div className="flex gap-4 md:flex-col">
        {galleryImages.slice(0, 4).map((image, index) => (
          <button key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              selectedImage === image
                ? "border-[#B88746]"
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
        <img className="h-[280px] w-full object-contain p-4 sm:h-[380px] sm:p-6 lg:h-[600px] lg:p-8 transition-all duration-300"
          id="main-product-image"
          src={selectedImage}
          alt={product.name}
        />
      </div>
    </div>
  );
}

export default ProductGallery;
