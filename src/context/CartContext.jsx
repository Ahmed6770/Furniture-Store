import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, quantity) {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity }]);
    }
  }

  function removeFromCart(product) {
    setCartItems(
      cartItems.filter((item) => item.id !== product.id)
    );
  }

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;