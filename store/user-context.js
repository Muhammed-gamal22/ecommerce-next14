"use client";
import { createContext, useEffect, useState } from "react";
const UserContext = createContext({
  user: "",
  login: (userStatus) => {},
  logout: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = window.localStorage.getItem("user");
      return storedUser;
    }
  });
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
