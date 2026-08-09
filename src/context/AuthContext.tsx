import { createContext } from "react";

export const AuthContext = createContext({
  username: "",
  isLoggedIn: false,
  loginError: "",
  signUpUser: (_username: string,_password: string) => {},
  logInUser:(_username:string,_password:string) => {},
  logoutUser: () => {},
});