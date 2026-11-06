const API_URL = "https://api.npoint.io/bed15c951047bde8d620";

export async function getProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to load products");
  const data = await response.json();
  return data;
}
