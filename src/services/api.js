// API service to connect frontend with Express / MySQL backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Fetch all products from backend
 */
export async function fetchAllProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

/**
 * Fetch products by category ID
 * @param {number|string} categoryId - numeric id (1 for Bedroom, 2 for Dinning, etc.)
 */
export async function fetchProductsByCategory(categoryId) {
  const response = await fetch(`${API_BASE_URL}/products/category/${categoryId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch category products: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export default {
  fetchAllProducts,
  fetchProductsByCategory,
};
