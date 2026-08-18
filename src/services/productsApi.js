const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY || "";
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST || "ikea-api-pro.p.rapidapi.com";


const KEYWORDS = [
  "sofa",
  "chair",
  "table",
  "bed",
  "storage",
  "desk",
  "lamp",
  "shelf",
];

async function fetchProducts(keyword, page) {
  const response = await fetch(
    `https://${API_HOST}/product-search-by-keyword?countryCode=us&languageCode=en&keyword=${keyword}&page=${page}`,
    {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  if (data?.message && data.message.includes("quota")) {
    throw new Error("API Quota Exceeded");
  }

  return data?.data?.products || [];
}

function formatProduct(item, index) {
  return {
    id: item.id || String(index + 1),
    name: item.name,
    price: item.price?.currentPrice || 149.99,
    image: item.images?.main || item.images?.contextual,
    category: item.typeName || "Furniture",
    rating: item.rating?.average || 4.5,
    reviews: item.rating?.count || 12,
    images: [item.images?.main, item.images?.contextual].filter(Boolean),
  };
}

export async function getProducts() {
  try {
    const products = [];

    for (const keyword of KEYWORDS) {
      for (let page = 1; page <= 2; page++) {
        const data = await fetchProducts(keyword, page);
        products.push(...data);
      }
    }

    if (products.length === 0) {
      throw new Error("No products returned from API");
    }

    const uniqueProducts = Array.from(
      new Map(products.map((product) => [product.id, product])).values()
    );

    return uniqueProducts.map(formatProduct);
  } catch {
    const response = await fetch("/data/products.json");

    if (!response.ok) {
      throw new Error("Failed to load local products");
    }

    return await response.json();
  }
}