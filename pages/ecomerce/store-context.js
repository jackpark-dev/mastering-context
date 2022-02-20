import React, { useState, createContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: () => setUser("Jack"),
    logout: () => setUser(""),
    addToCart: () => setCartCount(cartCount + 1),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useAddToCart = () => useStore((state) => state.addToCart);

export const useUser = () => useStore((state) => state.user);
export const useCartCount = () => useStore((state) => state.cartCount);
