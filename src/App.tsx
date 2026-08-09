import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/login";
import Cart from "./components/Cart";
import Portal from "./components/SalesPortal";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
function App() {
  type CartItem = {
    id: number;
    quantity: number;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const Navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  function authenticateUser(Username: string) {
    setUsername(Username);
    setIsLoggedIn(true);
  }
  function logoutUser() {
    setIsLoggedIn(false);
    console.log("logged out");
    alert("You have been logged out.");
  }
  function addItemToCart(productId: number) {
    if (!isLoggedIn) {
      Navigate("/login");
      alert("Please log in to add items to the cart.");
      return;
    }
    const existing = cartItems.find((p) => p.id === productId);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }
  function removeItemFromCart(productId: number) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }
  function removeOneItem(productId: number) {
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    } else {
      removeItemFromCart(productId);
    }
  }
  function clearCart() {
    setCartItems([]);
  }
  return (
    <>
      <AuthContext.Provider
        value={{ username, isLoggedIn, authenticateUser, logoutUser }}
      >
        <CartContext.Provider
          value={{
            items: cartItems,
            addItem: addItemToCart,
            removeItem: removeItemFromCart,
            removeOneItem: removeOneItem,
            clearCart: clearCart,
          }}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Portal" element={<Portal />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
