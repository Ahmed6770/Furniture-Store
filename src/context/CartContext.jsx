import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  // Free shipping over $600
  const shipping = subtotal > 600 ? 0 : 20;

  // Total items count
  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  // Add to cart function
  function addToCart(product, quantity = 1) {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity }]);
    }
  }

  // Remove from cart function
  function removeFromCart(product) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }

  // Clear cart function
  function clearCart() {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        subtotal,
        shipping,
        totalCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
