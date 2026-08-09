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
  type User = {
    username: string;
    password: string;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser"),
  );
  const [username, setUsername] = useState(
    localStorage.getItem("currentUser") || "",
  );
  const Navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  function signUpUser(Username: string, Password: string) {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.username === username)) {
      alert("Username already exist");
      return;
    }
    const newUser: User = {
      username: Username,
      password: Password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", Username);
    setUsername(Username);
    setIsLoggedIn(true);
  }
  function logInUser(Username: string, Password: string) {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.username === Username && u.password === Password,
    );
    if (user) {
      localStorage.setItem("currentUser", Username);
      alert(`Logged in as ${Username}`);
      setUsername(Username);
      setIsLoggedIn(true);
      Navigate("/");
    } else {
      setLoginError("username or password doesn't match, please try again");
    }
  }
  function logoutUser() {
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
    setUsername("");
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
        value={{ username, isLoggedIn, signUpUser, logInUser, logoutUser,loginError }}
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
