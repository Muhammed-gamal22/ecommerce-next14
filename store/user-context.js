"use client";
import { createContext, useEffect, useState } from "react";
const UserContext = createContext({
  user: "",
  login: (userStatus) => {},
  logout: () => {},
});
const getInitialState = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser;
};
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialState);
  const handleLogin = (userStatus) => {
    setUser(userStatus);
  };
  const handleLogout = () => {
    setUser("");
  };
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
