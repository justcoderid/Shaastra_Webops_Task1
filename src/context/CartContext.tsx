import { number } from "framer-motion";
import { createContext } from "react";
export const CartContext = createContext({
  items: [] as { id: number; quantity: number }[],
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
  removeOneItem: (id: number) => {},
  clearCart: () => {},
});
