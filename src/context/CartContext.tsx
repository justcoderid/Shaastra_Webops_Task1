
import { createContext } from "react";
export const CartContext = createContext({
  items: [] as { id: number; quantity: number }[],
  addItem: (_id: number) => {},
  removeItem: (_id: number) => {},
  removeOneItem: (_id: number) => {},
  clearCart: () => {},
});
