import { createContext } from "react";

export const AuthContext = createContext({
  username: "",
  isLoggedIn: false,
  authenticateUser: (_username: string) => {},
  logoutUser: () => {},
});